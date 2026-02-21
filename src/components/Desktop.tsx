"use client";

import { useOS } from "@/context/OSContext";
import { Grid3X3, Spade, Gamepad2 } from "lucide-react";
import React from "react";

export default function Desktop() {
    const { openWindow } = useOS();

    const desktopIcons = [
        { id: "minesweeper", title: "Minesweeper", icon: Grid3X3 },
        { id: "solitaire", title: "Solitaire", icon: Spade },
        { id: "snake", title: "Snake", icon: Gamepad2 },
    ];

    return (
        <div className="w-full h-full p-6 grid grid-cols-[repeat(auto-fill,minmax(90px,1fr))] grid-rows-[repeat(auto-fill,minmax(100px,1fr))] gap-4 content-start">
            {desktopIcons.map((app) => (
                <button
                    key={app.id}
                    onClick={() => openWindow(app.id as any, app.title)}
                    className="flex flex-col items-center gap-2 p-2 hover:bg-white/10 rounded-md transition-colors group outline-none focus:ring-2 focus:ring-white/30"
                    onDoubleClick={() => openWindow(app.id as any, app.title)}
                >
                    <div className="w-12 h-12 bg-zinc-800/80 group-hover:bg-zinc-700 rounded-xl flex items-center justify-center shadow-lg shadow-black/50 border border-zinc-700/50">
                        <app.icon className="w-6 h-6 text-zinc-300 group-hover:text-white" />
                    </div>
                    <span className="text-xs text-center text-zinc-300 group-hover:text-white drop-shadow-md select-none">
                        {app.title}
                    </span>
                </button>
            ))}
        </div>
    );
}
