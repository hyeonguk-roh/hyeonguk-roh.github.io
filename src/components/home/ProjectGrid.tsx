"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Tag } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const allTags: Tag[] = ["Software", "GameDev", "Worldbuilding"];

export default function ProjectGrid() {
    const [activeFilter, setActiveFilter] = useState<Tag | "All">("All");

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.tags.includes(activeFilter));

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight font-mono mb-2">Projects<span className="text-green-500 animate-pulse">_</span></h2>
                        <p className="text-zinc-500">A selection of recent systems and worlds.</p>
                    </div>

                    <div className="flex gap-2 mt-6 md:mt-0">
                        <button
                            onClick={() => setActiveFilter("All")}
                            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors border ${activeFilter === "All"
                                    ? "bg-white text-black border-transparent"
                                    : "bg-transparent text-zinc-400 border-white/10 hover:border-zinc-500"
                                }`}
                        >
                            All
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setActiveFilter(tag)}
                                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors border ${activeFilter === tag
                                        ? "bg-white text-black border-transparent"
                                        : "bg-transparent text-zinc-400 border-white/10 hover:border-zinc-500"
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
