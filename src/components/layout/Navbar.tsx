import Link from "next/link";
import { Terminal, BookOpen, Layers } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-zinc-400" />
                    <Link href="/" className="font-mono font-bold tracking-tight text-lg hover:text-zinc-300 transition-colors">
                        ROH.SYS
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/#projects" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        <span className="hidden sm:inline">Projects</span>
                    </Link>
                    <Link href="/lore" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="hidden sm:inline">Lore</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
