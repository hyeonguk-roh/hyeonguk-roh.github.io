"use client";

import { useOS } from "@/context/OSContext";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Taskbar() {
    const { windows, openWindow, toggleMinimize, focusWindow } = useOS();
    const [time, setTime] = useState<string>("");
    const [startOpen, setStartOpen] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-12 bg-black/60 backdrop-blur-md border-t border-zinc-800 flex items-center px-4 justify-between relative z-[9999]">
            {/* Start Menu Popup */}
            {startOpen && (
                <div className="absolute bottom-14 left-4 w-64 bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl p-2 flex flex-col gap-1">
                    <div className="px-3 py-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 border-b border-zinc-800">
                        System Links
                    </div>
                    <a
                        href="https://github.com/hyeonguk-roh"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 rounded-md transition-colors text-sm"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/hyeonguk-roh"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 rounded-md transition-colors text-sm"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                    <a
                        href="mailto:hyeonguk.roh@gmail.com"
                        className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-800 rounded-md transition-colors text-sm"
                    >
                        <Mail className="w-4 h-4" />
                        Email
                    </a>
                </div>
            )}

            {/* Start Button & Active Apps */}
            <div className="flex items-center gap-2 h-full">
                <button
                    onClick={() => setStartOpen(!startOpen)}
                    className={`h-8 px-4 rounded-md font-bold text-sm transition-colors ${startOpen ? "bg-white text-black" : "hover:bg-zinc-800"
                        }`}
                >
                    START
                </button>

                <div className="w-px h-6 bg-zinc-700 mx-2" />

                {/* Running Windows */}
                {windows.map((w) => (
                    <button
                        key={w.id}
                        onClick={() => {
                            if (w.isMinimized) {
                                toggleMinimize(w.id);
                                focusWindow(w.id);
                            } else {
                                toggleMinimize(w.id);
                            }
                        }}
                        className={`h-8 px-3 rounded-md text-sm max-w-[150px] truncate transition-all duration-200 border ${w.isMinimized
                            ? "bg-transparent border-transparent hover:bg-zinc-800 text-zinc-400"
                            : "bg-zinc-800 border-zinc-600 shadow-inner text-white"
                            }`}
                    >
                        {w.title}
                    </button>
                ))}
            </div>

            {/* System Tray */}
            <div className="flex items-center gap-4 h-full">
                <button
                    onClick={() => openWindow("kofi", "Support Me")}
                    className="h-8 px-2 flex items-center gap-2 hover:bg-zinc-800 rounded-md text-pink-500 transition-colors"
                    title="Buy me a coffee"
                >
                    <Heart className="w-4 h-4 fill-pink-500" />
                </button>
                <div className="text-sm text-zinc-300 font-mono tracking-wider">
                    {time}
                </div>
            </div>
        </div>
    );
}
