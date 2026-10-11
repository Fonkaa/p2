"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PortfolioData, ThemeType, ContactMessage } from "@/types/portfolio";
import { initialData } from "@/data/initialData";

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>, syncToCloud?: boolean) => Promise<boolean>;
  resetData: () => void;
  addMessage: (msg: Omit<ContactMessage, "id" | "createdAt">) => ContactMessage;
  deleteMessage: (id: string) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  activeTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isLoading: boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);
const STORAGE_KEY = "luxury_portfolio_data_v4";

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<PortfolioData>(() => {
    if (typeof window !== "undefined") {
      try {
        const local = localStorage.getItem(STORAGE_KEY);
        if (local) {
          const parsed = JSON.parse(local);
          if (parsed && typeof parsed === "object") {
            return {
              ...initialData,
              ...parsed,
              hero: { ...initialData.hero, ...(parsed.hero || {}) },
              projects: Array.isArray(parsed.projects) ? parsed.projects : initialData.projects,
              skills: Array.isArray(parsed.skills) ? parsed.skills : initialData.skills,
            };
          }
        }
      } catch (e) {}
    }
    return initialData;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const applyTheme = (theme: ThemeType) => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      document.body.setAttribute("data-theme", theme);
    }
  };

  // Fetch true state from Redis on mount (READ-ONLY)
  useEffect(() => {
    let isMounted = true;

    async function loadFromCloud() {
      try {
        const res = await fetch(`/api/portfolio?t=${Date.now()}`, {
          cache: "no-store",
          headers: { Pragma: "no-cache", "Cache-Control": "no-cache" },
        });

        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data && isMounted) {
            // Only update if Redis has real data
            if (json.source === "redis-cloud" || Array.isArray(json.data.projects)) {
              setData(json.data);
              if (json.data.theme) applyTheme(json.data.theme);
              try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(json.data));
              } catch {}
            }
          }
        }
      } catch (err) {
        console.warn("[PortfolioContext] Load error:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadFromCloud();

    return () => {
      isMounted = false;
    };
  }, []);

  // updateData NEVER calls the remote API unless syncToCloud is explicitly true!
  const updateData = async (newData: Partial<PortfolioData>, syncToCloud = false): Promise<boolean> => {
    try {
      const merged: PortfolioData = {
        ...data,
        ...newData,
        theme: newData.theme || data.theme || "obsidian-gold",
        adminPasscode: newData.adminPasscode || data.adminPasscode || "fiker4620",
        hero: { ...(data?.hero || initialData.hero), ...(newData?.hero || {}) },
        contact: { ...(data?.contact || initialData.contact), ...(newData?.contact || {}) },
        contactCopy: { ...(data?.contactCopy || initialData.contactCopy), ...(newData?.contactCopy || {}) },
        projectsCopy: { ...(data?.projectsCopy || initialData.projectsCopy), ...(newData?.projectsCopy || {}) },
        skillsCopy: { ...(data?.skillsCopy || initialData.skillsCopy), ...(newData?.skillsCopy || {}) },
        projects: Array.isArray(newData.projects) ? newData.projects : (data.projects || initialData.projects),
        skills: Array.isArray(newData.skills) ? newData.skills : (data.skills || initialData.skills),
        messages: Array.isArray(newData.messages) ? newData.messages : (data.messages || []),
      };

      // 1. Always update client state immediately
      setData(merged);
      if (merged.theme) applyTheme(merged.theme);

      // 2. Cache in localStorage immediately
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch (e) {}

      // 3. STOP! If this is an internal component update, DO NOT POST TO REDIS!
      if (!syncToCloud) {
        return true;
      }

      // 4. ONLY send a POST when explicitly told to sync (Save & Sync button)
      console.log("[PortfolioContext] User triggered explicit cloud sync...");
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(merged),
      });

      const rawText = await res.text();
      let json: any = {};
      try {
        json = JSON.parse(rawText);
      } catch {
        return res.ok;
      }

      return json.success === true;
    } catch (err) {
      console.error("[PortfolioContext] Update error:", err);
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
    updateData({ messages: updatedMessages }, true); // messages can sync
    return newMessage;
  };

  const deleteMessage = (id: string) => {
    const updated = (data.messages || []).filter((m) => m.id !== id);
    updateData({ messages: updated }, true);
  };

  const setTheme = (theme: ThemeType) => {
    applyTheme(theme);
    updateData({ theme }, false); // Do not blast Redis on theme preview
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
        isLoading,
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