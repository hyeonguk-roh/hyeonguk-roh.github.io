"use client";

import { useOS, AppID } from "@/context/OSContext";
import React, { useRef } from "react";
import Draggable from "react-draggable";
import { X, Minus, Square } from "lucide-react";

interface WindowProps {
    id: AppID;
    title: string;
    children: React.ReactNode;
    defaultWidth?: number;
    defaultHeight?: number;
}

export default function Window({
    id,
    title,
    children,
    defaultWidth = 600,
    defaultHeight = 400,
}: WindowProps) {
    const { windows, closeWindow, focusWindow, toggleMinimize } = useOS();
    const nodeRef = useRef(null);

    const windowState = windows.find((w) => w.id === id);

    if (!windowState || windowState.isMinimized) return null;

    return (
        <Draggable
            nodeRef={nodeRef}
            handle=".window-handle"
            onMouseDown={() => focusWindow(id)}
            bounds="parent"
            defaultPosition={{ x: Math.random() * 50 + 50, y: Math.random() * 50 + 50 }}
        >
            <div
                ref={nodeRef}
                style={{ zIndex: windowState.zIndex, width: defaultWidth, height: defaultHeight }}
                className="absolute top-0 left-0 bg-black border border-zinc-700 rounded-md overflow-hidden shadow-2xl shadow-black flex flex-col will-change-transform pointer-events-auto"
            >
                {/* Title Bar - Drag Handle */}
                <div className="window-handle h-8 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-2 cursor-grab active:cursor-grabbing select-none hover:bg-zinc-800 transition-colors">
                    <div className="text-sm font-bold text-zinc-300 tracking-wider">
                        {title}
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => toggleMinimize(id)}
                            className="p-1 hover:bg-zinc-700 rounded-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:bg-zinc-700 rounded-sm text-zinc-400 hover:text-white transition-colors">
                            <Square className="w-3 h-3" />
                        </button>
                        <button
                            onClick={() => closeWindow(id)}
                            className="p-1 hover:bg-red-900 rounded-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto relative bg-zinc-950">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}
