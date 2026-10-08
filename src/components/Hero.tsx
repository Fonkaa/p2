"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { ArrowUpRight, FileDown, Sparkles, RotateCw, Play, Pause, RefreshCw } from "lucide-react";

export default function Hero() {
  const { data } = usePortfolio();
  const { hero } = data;

  // Read uploaded 360 images array; fallback to avatarUrl
  const uploadedImages = Array.isArray(hero.rotation360Images) && hero.rotation360Images.length > 0
    ? hero.rotation360Images
    : (hero.avatarUrl ? [hero.avatarUrl] : []);

  const totalFrames = uploadedImages.length;
  const is360 = totalFrames > 1;

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startFrameRef = useRef(0);

  // Keep frame index bounded
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
  }, 3500); // 3.5 seconds

  return () => clearInterval(interval);
}, [is360, isPlaying, isDragging, totalFrames]);

  // Pointer drag scrubbing
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
    const sensitivity = 12; // 12px drag movement = 1 frame jump
    const frameOffset = Math.floor(deltaX / sensitivity);

    let next = (startFrameRef.current - frameOffset) % totalFrames;
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
    <section id="hero" className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full blur-[130px] opacity-25 pointer-events-none transition-colors duration-700"
        style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[var(--color-border)] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[var(--color-primary)]">
              {hero.badge || "Available for Select Contracts"}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text)] leading-[1.15]">
            {hero.headline}
          </h1>

          <p className="text-lg sm:text-xl font-medium tracking-wide text-[var(--color-primary)]/90">
            {hero.subheadline}
          </p>

          <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed max-w-xl">
            {hero.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase bg-[var(--color-primary)] text-[var(--color-bg)] hover:brightness-110 shadow-luxury-glow transition-all"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={hero.resumeUrl || "#"}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase glass-panel text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
            >
              <FileDown className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Resume / Dossier</span>
            </a>
          </div>
        </div>

        {/* Right Column: 360 Showcase */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group w-72 sm:w-80 md:w-96">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[var(--color-primary)] to-transparent opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative rounded-3xl glass-panel p-3 border border-[var(--color-border)] overflow-hidden shadow-2xl">
              
              {/* Rotation Stage */}
              <div 
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className={`aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[var(--color-surface)] relative select-none ${
                  is360 ? "cursor-grab active:cursor-grabbing" : ""
                }`}
                style={{ touchAction: "none" }}
              >
                {/* Image Frame */}
                <img
                  src={uploadedImages[currentFrame] || hero.avatarUrl}
                  alt={`Angle Frame ${currentFrame + 1}`}
                  className="w-full h-full object-cover object-top pointer-events-none select-none transition-transform duration-75"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* 360 Header Bar */}
                {is360 && (
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-panel border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-primary)] shadow-sm">
                      <RotateCw className={`w-3 h-3 ${isPlaying && !isDragging ? "animate-spin" : ""}`} />
                      <span>{currentDegree}° (Frame {currentFrame + 1}/{totalFrames})</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlaying(!isPlaying);
                        }}
                        className="p-1.5 rounded-full glass-panel border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
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
                        className="p-1.5 rounded-full glass-panel border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                        title="Reset angle to 0°"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-[var(--color-border)] flex items-center justify-between z-20 pointer-events-auto">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text)]">
                      {hero.status || "Open to Engagements"}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--color-muted)] font-mono">
                    {is360 ? `${totalFrames} Perspectives` : "Single Perspective"}
                  </span>
                </div>
              </div>

              {/* Interaction Callout */}
              <div className="text-center pt-2 pb-0.5">
                <span className="text-[10px] font-mono text-[var(--color-muted)] tracking-wider uppercase">
                  {is360 ? "◄ Drag horizontally to scrub 360° ►" : "Upload multiple angle photos in Admin Folio 2 for 360° view"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}