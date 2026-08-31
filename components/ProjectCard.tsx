"use client";

import React from "react";
import SkillBadge from "./SkillBadge";
import { ExternalLink, Briefcase, Zap, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
    skillsUsed?: string[];
    keyFeatures?: string[];
    images?: string[];
    status?: "ongoing" | "completed";
    liveUrl?: string;
    githubUrl?: string;
    role?: string;
    impact?: string;
    category?: string;
    date?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title, description, imgUrl, skillsUsed, keyFeatures, images, status,
    liveUrl, githubUrl, role, impact, category, date
}) => {
    const [activeImage, setActiveImage] = React.useState(imgUrl);

    React.useEffect(() => {
        setActiveImage(imgUrl);
    }, [imgUrl]);

    const displayImages = images && images.length > 0 ? images : [imgUrl];

    React.useEffect(() => {
        if (displayImages.length <= 1) return;
        const interval = setInterval(() => {
            setActiveImage((prev) => {
                const currentIndex = displayImages.indexOf(prev);
                const nextIndex = (currentIndex + 1) % displayImages.length;
                return displayImages[nextIndex];
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [displayImages]);

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveImage((prev) => {
            const currentIndex = displayImages.indexOf(prev);
            const nextIndex = (currentIndex + 1) % displayImages.length;
            return displayImages[nextIndex];
        });
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveImage((prev) => {
            const currentIndex = displayImages.indexOf(prev);
            const prevIndex = (currentIndex - 1 + displayImages.length) % displayImages.length;
            return displayImages[prevIndex];
        });
    };

    return (
        <article className="group relative w-full my-20 lg:my-12 flex flex-col items-center">
            
            {/* ── BACKGROUND LAYER (Image Stack) ── */}
            <div className="w-full relative z-0">
                <div className="aspect-[4/3] md:aspect-[16/9] relative">
                    {displayImages.map((img, idx) => {
                        const activeIndex = displayImages.indexOf(activeImage);
                        const total = displayImages.length;
                        const diff = (idx - activeIndex + total) % total;
                        
                        let stackClass = "";
                        let zIndex = 0;
                        
                        if (diff === 0) {
                            stackClass = "opacity-100 translate-y-0 scale-100 blur-0 group-hover:scale-105";
                            zIndex = 30;
                        } else if (diff === 1) {
                            stackClass = "opacity-80 -translate-y-6 md:-translate-y-8 scale-[0.95] blur-0";
                            zIndex = 20;
                        } else if (diff === 2 && total > 2) {
                            stackClass = "opacity-50 -translate-y-12 md:-translate-y-16 scale-[0.90] blur-[1px]";
                            zIndex = 10;
                        } else {
                            stackClass = "opacity-0 translate-y-0 scale-[0.85] blur-[5px]";
                            zIndex = 0;
                        }

                        return (
                            <img
                                key={idx}
                                src={img}
                                alt={title}
                                style={{ zIndex }}
                                className={`absolute inset-0 w-full h-full object-cover rounded-[2rem] shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${stackClass}`}
                            />
                        );
                    })}
                    {/* Navigation Buttons */}
                    {displayImages.length > 1 && (
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-4 z-50 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <button
                                onClick={handlePrev}
                                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-xl border border-white/20 text-foreground hover:bg-accent hover:text-accent-foreground hover:scale-110 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-xl border border-white/20 text-foreground hover:bg-accent hover:text-accent-foreground hover:scale-110 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* ── FOREGROUND LAYER (Content Block) ── */}
            {/* Mobile uses -mt-16, Desktop uses -mt-20 to pull the content card up over the image bottom */}
            <div className="z-10 w-[96%] md:w-[85%] lg:w-[90%] mx-auto -mt-16 lg:-mt-20">
                
                {/* The Content Card */}
                <div className="bg-background/80 backdrop-blur-3xl border border-glass-border px-5 py-8 md:p-10 lg:p-10 xl:p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-15px_rgba(var(--color-accent-rgb),0.2)] flex flex-col gap-6 relative overflow-hidden">
                    
                    {/* Decorative glow inside card */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 relative z-10">
                        <span className="text-accent font-bold text-xs uppercase tracking-[0.25em]">
                            {category || "Project"}
                        </span>
                        {date && (
                            <span className="text-muted-foreground/60 font-mono text-xs tracking-tight">
                                {date}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tighter relative z-10 group-hover:bg-gradient-to-br group-hover:from-foreground group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground/90 leading-relaxed text-base md:text-lg font-light relative z-10">
                        {description}
                    </p>

                    {/* Roles & Tech Stack */}
                    <div className="mt-2 flex flex-col gap-4 lg:gap-5 relative z-10">
                        {role && (
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-4 h-4 text-accent shrink-0" />
                                <span className="text-sm font-bold uppercase tracking-wider text-foreground/80">{role}</span>
                            </div>
                        )}
                        {skillsUsed && skillsUsed.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {skillsUsed.map((skill, i) => (
                                    <SkillBadge key={`${skill}-${i}`} name={skill} />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Actions */}
                    {((liveUrl && liveUrl.trim() !== "") || (githubUrl && githubUrl.trim() !== "")) && (
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-2 lg:mt-4 border-t border-glass-border relative z-10">
                            {liveUrl && liveUrl.trim() !== "" && (
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.4)] transition-all">
                                    <ExternalLink className="w-4 h-4" /> View Live
                                </a>
                            )}
                            {githubUrl && githubUrl.trim() !== "" && (
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 py-4 bg-transparent border-2 border-foreground/10 text-foreground rounded-2xl font-bold text-sm hover:border-foreground/30 hover:bg-foreground/5 transition-colors">
                                    <GitBranch className="w-4 h-4" /> Source
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Status indicator absolute positioned on the image */}
            {status === "ongoing" && (
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground font-bold text-[10px] uppercase tracking-widest shadow-lg">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-background"></span>
                    </span>
                    In Progress
                </div>
            )}
        </article>
    );
};

export default ProjectCard;
