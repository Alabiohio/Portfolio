import React from "react";
import {
    Palette,
    Search,
    Bot,
    Gauge,
    PenTool,
    Code,
    MessageSquare,
    Users,
    Lightbulb,
    Clock,
    Brain,
    Crown
} from "lucide-react";

interface SkillBadgeProps {
    name: string;
    large?: boolean;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, large }) => {
    const getSkillIcon = (skill: string) => {
        const lower = skill.toLowerCase();
        
        if (lower.includes("react")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
        if (lower.includes("next.js") || lower.includes("nextjs")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg";
        if (lower.includes("typescript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
        if (lower.includes("tailwind")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
        if (lower.includes("javascript")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
        if (lower.includes("html")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg";
        if (lower.includes("css")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg";
        if (lower.includes("node.js") || lower.includes("nodejs")) return "https://cdn.simpleicons.org/nodedotjs";
        if (lower.includes("python")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg";
        if (lower.includes("cloudflare")) return "https://cdn.simpleicons.org/cloudflare";
        if (lower.includes("neon")) return "https://cdn.simpleicons.org/neon";
        if (lower.includes("git") && !lower.includes("github")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg";
        if (lower.includes("github")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
        if (lower.includes("vercel")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg";
        if (lower.includes("firebase")) return "/firebase.png";
        if (lower.includes("foundation")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/foundation/foundation-original.svg";
        if (lower.includes("bootstrap")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg";
        if (lower.includes("postgresql") || lower.includes("postgres")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";
        if (lower.includes("supabase")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg";
        if (lower.includes("google analytics")) return "/analytics.png";
        if (lower.includes("search console") && !lower.includes("bing")) return "/gsc.png";
        if (lower.includes("bing")) return "/bing.png";
        if (lower.includes("figma")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";
        if (lower.includes("photoshop")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg";
        if (lower.includes("illustrator")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg";
        if (lower.includes("after effects")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg";
        if (lower.includes("adobe")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg";

        if (lower.includes("ui/ux")) return Palette;
        if (lower.includes("seo")) return Search;
        if (lower.includes("chatbot")) return Bot;
        if (lower.includes("performance") || lower.includes("tuning")) return Gauge;
        if (lower.includes("adobe") || lower.includes("creative")) return PenTool;
        if (lower.includes("communication")) return MessageSquare;
        if (lower.includes("teamwork") || lower.includes("collaboration")) return Users;
        if (lower.includes("problem") || lower.includes("solving")) return Lightbulb;
        if (lower.includes("time") || lower.includes("management")) return Clock;
        if (lower.includes("critical") || lower.includes("thinking") || lower.includes("learning")) return Brain;
        if (lower.includes("leadership") || lower.includes("management")) return Crown;

        return Code;
    };

    const iconOrComponent = getSkillIcon(name);
    const isUrl = typeof iconOrComponent === "string";

    if (large) {
        return (
            <div className="flex flex-col items-center justify-center p-4 md:p-8 transition-all group w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64">
                {isUrl ? (
                    <img src={iconOrComponent as string} alt={name} className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain group-hover:scale-125 transition-all duration-500 mb-2 md:mb-4" />
                ) : (
                    React.createElement(iconOrComponent as React.ElementType, {
                        className: "w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 text-accent group-hover:scale-125 transition-all duration-500 mb-2 md:mb-4"
                    })
                )}
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-muted-foreground group-hover:text-foreground transition-colors tracking-widest uppercase text-center line-clamp-1">{name}</span>
            </div>
        );
    }

    return (
        <span className="flex items-center gap-2.5 px-4 py-2 bg-glass-bg text-muted-foreground border border-glass-border rounded-xl text-sm font-medium transition-all hover:bg-glass-bg-hover hover:text-foreground group">
            {isUrl ? (
                <img src={iconOrComponent as string} alt={name} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
            ) : (
                React.createElement(iconOrComponent as React.ElementType, {
                    className: "w-4 h-4 text-accent group-hover:scale-110 transition-transform"
                })
            )}
            {name}
        </span>
    );
};

export default SkillBadge;
