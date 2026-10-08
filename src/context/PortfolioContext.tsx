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
const STORAGE_KEY = "luxury_portfolio_data_v1";

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData>(initialData);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const applyTheme = (theme: ThemeType) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  };

  // Safe deep merger that NEVER clobbers user projects or hero images with defaults
  const mergeSavedWithDefaults = (saved: any): PortfolioData => {
    return {
      ...initialData,
      ...saved,
      navbar: { ...initialData.navbar, ...(saved?.navbar || {}) },
      hero: {
        ...initialData.hero,
        ...(saved?.hero || {}),
        rotation360Images: saved?.hero?.rotation360Images ?? initialData.hero.rotation360Images ?? [],
      },
      // Keep saved projects if they exist; only fall back if user has none
      projects: Array.isArray(saved?.projects) && saved.projects.length > 0 
        ? saved.projects 
        : initialData.projects,
      skills: Array.isArray(saved?.skills) && saved.skills.length > 0 
        ? saved.skills 
        : initialData.skills,
      projectsCopy: { ...initialData.projectsCopy, ...(saved?.projectsCopy || {}) },
      skillsCopy: { ...initialData.skillsCopy, ...(saved?.skillsCopy || {}) },
      githubCopy: { ...initialData.githubCopy, ...(saved?.githubCopy || {}) },
      contactCopy: { ...initialData.contactCopy, ...(saved?.contactCopy || {}) },
      contact: { ...initialData.contact, ...(saved?.contact || {}) },
      aiCopy: { ...initialData.aiCopy, ...(saved?.aiCopy || {}) },
      messages: saved?.messages || [],
    };
  };

  useEffect(() => {
    async function loadPortfolioData() {
      // 1. Read localStorage first for instant, zero-flicker render
      try {
        const localRaw = localStorage.getItem(STORAGE_KEY);
        if (localRaw) {
          const parsed = JSON.parse(localRaw);
          const safeMerged = mergeSavedWithDefaults(parsed);
          setData(safeMerged);
          applyTheme(safeMerged.theme || "obsidian-gold");
        } else {
          applyTheme(initialData.theme || "obsidian-gold");
        }
      } catch (err) {
        console.warn("Could not load from local storage:", err);
        applyTheme("obsidian-gold");
      }

      // 2. Query cloud database (cross-device sync)
      try {
        const res = await fetch(`/api/portfolio?t=${Date.now()}`, {
          cache: "no-store",
          headers: { Pragma: "no-cache" },
        });

        if (res.ok) {
          const rawText = await res.text();
          let json: any = {};
          try {
            json = rawText ? JSON.parse(rawText) : {};
          } catch {
            json = {};
          }

          if (json.success && json.data) {
            const merged = mergeSavedWithDefaults(json.data);
            setData(merged);
            applyTheme(merged.theme || "obsidian-gold");

            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch (quotaErr) {
              console.warn("LocalStorage quota full on cloud sync:", quotaErr);
            }
          }
        }
      } catch (err) {
        console.warn("Could not synchronize with cloud DB, staying on local state:", err);
      }
    }

    loadPortfolioData();
  }, []);

  const updateData = async (newData: Partial<PortfolioData>): Promise<boolean> => {
    let updatedPayload: PortfolioData = { ...data, ...newData };

    setData((prev) => {
      updatedPayload = { ...prev, ...newData };
      return updatedPayload;
    });

    applyTheme(updatedPayload.theme || "obsidian-gold");

    // 1. Save to local storage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPayload));
    } catch (e) {
      console.warn("Local storage quota limit reached. Saving to cloud DB...", e);
    }

    // 2. Save globally to Upstash Redis
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPayload),
      });

      const raw = await res.text();
      let json: any = {};
      try {
        json = raw ? JSON.parse(raw) : {};
      } catch {
        return false;
      }

      return json.success === true;
    } catch (err) {
      console.error("Failed to sync to cloud database:", err);
      return false;
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