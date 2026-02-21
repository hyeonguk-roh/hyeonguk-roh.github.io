export type Tag = "Software" | "GameDev" | "Worldbuilding";

export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: Tag[];
    link?: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        slug: "randumania",
        title: "Randumania",
        description: "An infinite dungeon crawler framework built in Roblox, featuring a Stat Manager with modifiers and procedural generation.",
        tags: ["GameDev", "Software"],
        github: "https://github.com/hyeonguk-roh",
    },
    {
        slug: "youtube-automation",
        title: "YouTube Automation System",
        description: "An application to automate the creation of YouTube videos using AI services and programatic video editing.",
        tags: ["Software"],
        github: "https://github.com/hyeonguk-roh",
    },
    {
        slug: "eldoria-lore",
        title: "The Chronicles of Eldoria",
        description: "Comprehensive worldbuilding lore documents including geopolitical structures, magic systems, and history.",
        tags: ["Worldbuilding"],
        link: "/lore/eldoria",
    },
];
