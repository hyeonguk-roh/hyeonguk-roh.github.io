"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
            className="group relative p-6 bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-zinc-500 transition-colors"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-green-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2 text-zinc-500">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-sm text-zinc-400 mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-zinc-400"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
