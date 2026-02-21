"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function KofiApp() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-zinc-950 text-white text-center">
            <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-500 fill-pink-500 animate-pulse border-none" />
            </div>

            <h2 className="text-xl font-bold mb-2">Buy me a Coffee!</h2>
            <p className="text-zinc-400 text-sm mb-8 max-w-[250px] leading-relaxed">
                If you found my work helpful, consider leaving a tip. It helps keep the servers running and the coffee flowing!
            </p>

            <a
                href="https://ko-fi.com/dannyroh"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-bold transition-colors shadow-lg shadow-pink-500/20"
            >
                Support on Ko-fi
            </a>
        </div>
    );
}
