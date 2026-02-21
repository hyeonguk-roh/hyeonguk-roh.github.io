export default function StackList() {
    const stack = [
        { category: "Languages", items: ["Python", "C++", "TypeScript", "Lua"] },
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
        { category: "Game Dev", items: ["Unity", "Roblox Studio", "C#"] },
        { category: "Backend/Tools", items: ["Node.js", "Git", "PostgreSQL"] },
    ];

    return (
        <section className="py-20 border-t border-white/10 bg-black/20">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold mb-12 font-mono tracking-tight">System<span className="text-zinc-500">.Capabilities</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stack.map((group) => (
                        <div key={group.category} className="space-y-4">
                            <h3 className="text-lg font-medium border-b border-white/10 pb-2 text-zinc-300">
                                {group.category}
                            </h3>
                            <ul className="space-y-2">
                                {group.items.map((item) => (
                                    <li key={item} className="text-zinc-500 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
