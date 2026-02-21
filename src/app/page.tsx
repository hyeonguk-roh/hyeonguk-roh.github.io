"use client";

import Desktop from "@/components/Desktop";
import Taskbar from "@/components/Taskbar";
import OSManager from "@/components/OSManager";
import { OSProvider } from "@/context/OSContext";

export default function Home() {
    return (
        <OSProvider>
            <main className="w-screen h-screen relative flex flex-col bg-black overflow-hidden font-mono text-white">
                {/* Desktop Area */}
                <div className="flex-1 w-full h-full relative z-0">
                    <Desktop />
                    <OSManager />
                </div>

                {/* Taskbar */}
                <div className="w-full relative z-[9999]">
                    <Taskbar />
                </div>
            </main>
        </OSProvider>
    );
}
