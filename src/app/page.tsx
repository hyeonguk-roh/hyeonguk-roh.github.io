import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ProjectGrid from "@/components/home/ProjectGrid";
import StackList from "@/components/home/StackList";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectGrid />
        <StackList />

        {/* Lore Section Teaser */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-zinc-900/30" />
          <div className="absolute w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <div className="inline-block mb-4 px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
              CLASSIFIED // LORE_ARCHIVE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Access the Archives</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore deep worldbuilding documents, system architectures, and narrative designs. Structured as technical manuals and classified briefings.
            </p>
            <a
              href="/lore"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded hover:bg-zinc-200 transition-colors"
            >
              Enter Database
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/10 text-center text-sm text-zinc-500 font-mono">
        <p>SYSTEM.VERSION 1.0.0 // © {new Date().getFullYear()} HYEONGUK ROH</p>
      </footer>
    </>
  );
}
