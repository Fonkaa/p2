"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { Project } from "@/types/portfolio";
import { ArrowUpRight, RotateCw, Play, Pause, RefreshCw, ExternalLink } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// Interactive 360-degree Showcase Card Media Stage
function ProjectMediaStage({ project }: { project: Project }) {
  // Video Mode
  if (project.mediaType === "video" && project.mediaUrl) {
    return (
      <div className="relative w-full aspect-video sm:aspect-[16/9] overflow-hidden bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <video
          src={project.mediaUrl}
          controls
          className="w-full h-full object-cover"
          poster=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>
    );
  }

  // Multi-frame 360 sequence; fallback to single mediaUrl
  const frames = Array.isArray(project.rotation360Images) && project.rotation360Images.length > 0
    ? project.rotation360Images
    : (project.mediaUrl ? [project.mediaUrl] : []);

  const totalFrames = frames.length;
  const is360 = totalFrames > 1;

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startFrameRef = useRef(0);

  // Exact 3.5 seconds per frame interval
  const ROTATION_SPEED_MS = 3500;

  useEffect(() => {
    if (currentFrame >= totalFrames && totalFrames > 0) {
      setCurrentFrame(0);
    }
  }, [totalFrames, currentFrame]);

  // Autoplay Rotation Loop
  useEffect(() => {
    if (!is360 || !isPlaying || isDragging) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
    }, ROTATION_SPEED_MS);

    return () => clearInterval(interval);
  }, [is360, isPlaying, isDragging, totalFrames]);

  // Manual Drag & Scrub Handlers (Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!is360) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startFrameRef.current = currentFrame;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !is360) return;
    const deltaX = e.clientX - startXRef.current;
    const sensitivity = 16; // 16px horizontal movement advances 1 frame
    const offset = Math.floor(deltaX / sensitivity);

    let next = (startFrameRef.current - offset) % totalFrames;
    if (next < 0) next = (next + totalFrames) % totalFrames;
    setCurrentFrame(next);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!is360) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const currentDegree = is360 ? Math.round((currentFrame / totalFrames) * 360) : 0;

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full aspect-video sm:aspect-[16/9] overflow-hidden bg-[var(--color-surface)] border-b border-[var(--color-border)] select-none ${
        is360 ? "cursor-grab active:cursor-grabbing" : ""
      }`}
      style={{ touchAction: is360 ? "none" : "auto" }}
    >
      <img
        src={frames[currentFrame] || project.mediaUrl || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"}
        alt={`${project.title} - Perspective ${currentFrame + 1}`}
        className="w-full h-full object-cover pointer-events-none select-none transition-all duration-500 ease-out"
        draggable={false}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* 360 HUD Controls Overlay */}
      {is360 && (
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-panel border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-primary)] shadow-md">
            <RotateCw className={`w-3 h-3 ${isPlaying && !isDragging ? "animate-spin" : ""}`} />
            <span>{currentDegree}° (Frame {currentFrame + 1}/{totalFrames})</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(!isPlaying);
              }}
              className="p-1.5 rounded-full glass-panel border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors shadow-md"
              title={isPlaying ? "Pause rotation" : "Play continuous rotation"}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentFrame(0);
              }}
              className="p-1.5 rounded-full glass-panel border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors shadow-md"
              title="Reset angle to 0°"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Drag Hint */}
      {is360 && (
        <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg glass-panel border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-muted)] shadow-md">
            ◄ Drag horizontally to spin 360° ►
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const { data } = usePortfolio();
  const { projects, projectsCopy } = data;

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[var(--color-border)] pb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
            {projectsCopy?.badge || "Curated Portfolio"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mt-2">
            {projectsCopy?.heading || "Engineered Systems & Products"}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-muted)] max-w-md font-sans">
          {projectsCopy?.subheading || "Production systems built for scale, resilience, and mathematical elegance. All items are dynamically maintained via the CMS with full 360° rotation."}
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-3xl glass-panel border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl"
          >
            {/* Visual Media Container with 360 Scrubbing & 3.5s Rotation */}
            <ProjectMediaStage project={project} />

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-mono text-[var(--color-primary)] uppercase tracking-wider font-semibold">
                    {project.tagline}
                  </span>
                  
                  {/* Action Link Icons */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass-panel text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass-panel text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                        title="Open Live Host Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>
              </div>

              {/* Bottom Footer: Tags & Live Host CTA */}
              <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-3 py-1 rounded-lg bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] hover:underline uppercase tracking-wider ml-auto"
                  >
                    <span>Launch App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}