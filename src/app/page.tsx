"use client";

import dynamic from "next/dynamic";
import GitHubProjects from "@/components/GitHubProjects";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

// Load Hero and ProjectsSection purely on client so dynamic 360° frames never clash with SSR
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: false });

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col gap-12">
      <Hero />
      <ProjectsSection />
      <GitHubProjects />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}