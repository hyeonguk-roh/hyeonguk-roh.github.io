"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center relative pt-20 pb-10">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        SYSTEM ONLINE
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                        Engineer of Systems.<br />
                        <span className="text-zinc-500">Builder of Worlds.</span><br />
                        Developer of Games.
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Bridging the gap between software engineering, game development, and deep worldbuilding. I write logic that powers narratives.
                    </p>

                    <div className="pt-8 flex gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition-colors"
                        >
                            Initialize Sequence
                        </a>
                        <a
                            href="/lore"
                            className="px-6 py-3 bg-white/5 text-white font-semibold rounded-md border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            Access Records
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ChevronDown className="w-6 h-6 opacity-50" />
            </motion.div>
        </section>
    );
}
