"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PortfolioData, ThemeType, ContactMessage } from "@/types/portfolio";
import { initialData } from "@/data/initialData";

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => Promise<boolean>;
  resetData: () => void;
  addMessage: (msg: Omit<ContactMessage, "id" | "createdAt">) => ContactMessage;
  deleteMessage: (id: string) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  activeTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);
const STORAGE_KEY = "luxury_portfolio_data_v2";

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const applyTheme = (theme: ThemeType) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  };

  // Safe deep merger that prioritizes USER DATA over initialData
  const mergeData = (incoming: any, fallback: PortfolioData): PortfolioData => {
    if (!incoming || typeof incoming !== "object") return fallback;

    return {
      ...fallback,
      ...incoming,
      navbar: { ...fallback.navbar, ...(incoming.navbar || {}) },
      hero: {
        ...fallback.hero,
        ...(incoming.hero || {}),
        rotation360Images: incoming?.hero?.rotation360Images?.length > 0 
          ? incoming.hero.rotation360Images 
          : (incoming?.hero?.avatarUrl ? [incoming.hero.avatarUrl] : fallback.hero.rotation360Images),
      },
      // CRUCIAL: If incoming has projects, NEVER overwrite with fallback projects!
      projects: Array.isArray(incoming.projects) && incoming.projects.length > 0
        ? incoming.projects
        : fallback.projects,
      skills: Array.isArray(incoming.skills) && incoming.skills.length > 0
        ? incoming.skills
        : fallback.skills,
      projectsCopy: { ...fallback.projectsCopy, ...(incoming.projectsCopy || {}) },
      skillsCopy: { ...fallback.skillsCopy, ...(incoming.skillsCopy || {}) },
      githubCopy: { ...fallback.githubCopy, ...(incoming.githubCopy || {}) },
      contactCopy: { ...fallback.contactCopy, ...(incoming.contactCopy || {}) },
      contact: { ...fallback.contact, ...(incoming.contact || {}) },
      aiCopy: { ...fallback.aiCopy, ...(incoming.aiCopy || {}) },
      messages: Array.isArray(incoming.messages) ? incoming.messages : (fallback.messages || []),
    };
  };

  // 1. Initial Load
  useEffect(() => {
    let currentBestData = initialData;

    // A. Read LocalStorage First
    try {
      const localRaw = localStorage.getItem(STORAGE_KEY);
      if (localRaw) {
        const parsed = JSON.parse(localRaw);
        currentBestData = mergeData(parsed, initialData);
        setData(currentBestData);
        applyTheme(currentBestData.theme || "obsidian-gold");
        console.log("[PortfolioContext] Loaded from LocalStorage:", currentBestData);
      } else {
        applyTheme(initialData.theme || "obsidian-gold");
      }
    } catch (e) {
      console.warn("[PortfolioContext] LocalStorage read failed:", e);
    }

    // B. Fetch from API (Cloud Database)
    async function fetchCloudData() {
      try {
        const res = await fetch(`/api/portfolio?t=${Date.now()}`, {
          cache: "no-store",
          headers: { Pragma: "no-cache" },
        });

        if (!res.ok) return;

        const json = await res.json();
        if (json.success && json.data) {
          // If cloud has valid user data, merge it with current best data
          const cloudMerged = mergeData(json.data, currentBestData);
          setData(cloudMerged);
          applyTheme(cloudMerged.theme || "obsidian-gold");
          console.log("[PortfolioContext] Synced with Cloud DB:", cloudMerged);

          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudMerged));
          } catch {}
        }
      } catch (err) {
        console.warn("[PortfolioContext] Cloud fetch error:", err);
      }
    }

    fetchCloudData();
  }, []);

  // 2. Save Data Function
  const updateData = async (newData: Partial<PortfolioData>): Promise<boolean> => {
    let updatedPayload: PortfolioData = { ...data, ...newData };

    setData((prev) => {
      updatedPayload = mergeData(newData, prev);
      return updatedPayload;
    });

    applyTheme(updatedPayload.theme || "obsidian-gold");

    // A. Always save to LocalStorage immediately
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPayload));
      console.log("[PortfolioContext] Successfully saved to LocalStorage:", updatedPayload);
    } catch (e) {
      console.warn("[PortfolioContext] LocalStorage quota exceeded:", e);
    }

    // B. Push to Server / Cloud Database
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPayload),
      });

      const json = await res.json();
      console.log("[PortfolioContext] Server save response:", json);
      return json.success === true;
    } catch (err) {
      console.error("[PortfolioContext] Cloud save network failure:", err);
      // Even if network fails, user data is safe in localStorage
      return true;
    }
  };

  const addMessage = (msg: Omit<ContactMessage, "id" | "createdAt">): ContactMessage => {
    const newMessage: ContactMessage = {
      ...msg,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      read: false,
    };
    const updatedMessages = [newMessage, ...(data.messages || [])];
    updateData({ messages: updatedMessages });
    return newMessage;
  };

  const deleteMessage = (id: string) => {
    const updated = (data.messages || []).filter((m) => m.id !== id);
    updateData({ messages: updated });
  };

  const setTheme = (theme: ThemeType) => {
    applyTheme(theme);
    updateData({ theme });
  };

  const resetData = () => {
    setData(initialData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    applyTheme(initialData.theme);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateData,
        resetData,
        addMessage,
        deleteMessage,
        isAdminOpen,
        setIsAdminOpen,
        isAuthenticated,
        setIsAuthenticated,
        activeTheme: data.theme,
        setTheme,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}