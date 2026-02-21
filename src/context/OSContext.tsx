"use client";

import React, { createContext, useContext, useState } from "react";

export type AppID = "minesweeper" | "solitaire" | "snake" | "kofi";

export interface WindowState {
    id: AppID;
    title: string;
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
}

interface OSContextType {
    windows: WindowState[];
    openWindow: (id: AppID, title: string) => void;
    closeWindow: (id: AppID) => void;
    focusWindow: (id: AppID) => void;
    toggleMinimize: (id: AppID) => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export function OSProvider({ children }: { children: React.ReactNode }) {
    const [windows, setWindows] = useState<WindowState[]>([]);
    const highestZIndex = React.useRef(10);

    const openWindow = (id: AppID, title: string) => {
        highestZIndex.current += 1;
        const newZ = highestZIndex.current;

        setWindows((prev) => {
            const existing = prev.find((w) => w.id === id);
            if (existing) {
                if (existing.isMinimized) {
                    return prev.map(w => w.id === id ? { ...w, isMinimized: false, zIndex: newZ } : w);
                }
                return prev.map(w => w.id === id ? { ...w, zIndex: newZ } : w);
            }
            return [
                ...prev,
                { id, title, isOpen: true, isMinimized: false, zIndex: newZ },
            ];
        });
    };

    const closeWindow = (id: AppID) => {
        setWindows((prev) => prev.filter((w) => w.id !== id));
    };

    const focusWindow = (id: AppID) => {
        highestZIndex.current += 1;
        const newZ = highestZIndex.current;
        setWindows((prev) =>
            prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w))
        );
    };

    const toggleMinimize = (id: AppID) => {
        setWindows((prev) =>
            prev.map((w) => (w.id === id ? { ...w, isMinimized: !w.isMinimized } : w))
        );
    };

    return (
        <OSContext.Provider
            value={{ windows, openWindow, closeWindow, focusWindow, toggleMinimize }}
        >
            {children}
        </OSContext.Provider>
    );
}

export function useOS() {
    const context = useContext(OSContext);
    if (!context) {
        throw new Error("useOS must be used within an OSProvider");
    }
    return context;
}
