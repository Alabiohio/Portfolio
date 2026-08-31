"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import { getSkillIcon } from "@/components/SkillBadge";
import { Mail, Download, ArrowRight, MapPin, Briefcase, Code } from "lucide-react";
import { FaXTwitter, FaTiktok, FaLinkedinIn, FaInstagram, FaThreads, FaSnapchat, FaGithub } from "react-icons/fa6";
import profilePic from "../assets/img/profileImg.png";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface PortfolioClientProps {
    projects: Project[];
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.65, ease: "easeOut", delay },
} as any);

const PortfolioClient: React.FC<PortfolioClientProps> = ({ projects }) => {
    const featured = projects.filter((p) => p.isFeatured);
    const others = projects.filter((p) => !p.isFeatured);

    const skillGroups = [
        {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
        },
        {
            title: "Backend & Data",
            skills: ["Node.js", "Python", "PostgreSQL", "Supabase", "Firebase", "Cloudflare", "APIs", "REST", "Neon", "Sanity CMS"],
        },
        {
            title: "Design & Product",
            skills: ["UI/UX", "Figma", "Adobe Illustrator", "Adobe Photoshop", "Responsive Design", "SEO", "Google Analytics", "Search Console"],
        },
        {
            title: "Strengths",
            skills: ["Problem Solving", "Communication", "Teamwork", "Leadership", "Performance Tuning", "Critical Thinking"],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground relative overflow-x-hidden">


            <header className="z-50 relative">
                <Navbar />
            </header>

            <main className="flex-grow relative z-10">
                <section className="relative min-h-screen pt-32 pb-16 px-4 md:px-8 max-w-8xl mx-auto flex flex-col justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                        {/* Bento Item 1: Intro (Spans 2 cols, 2 rows) */}
                        <motion.div {...fadeUp(0.1)} className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-glass-bg border border-glass-border p-8 md:p-14 relative overflow-hidden flex flex-col justify-end group hover:border-accent/40 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="relative z-10">
                                <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-black leading-[1.05] tracking-tighter mb-6">
                                    Ohiocheoya <br className="hidden md:block" />
                                    Alabi Isaac
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                                    Full-Stack Developer specializing in Next.js and modern web
                                    technologies, with experience developing scalable web
                                    applications. Skilled in translating
                                    complex requirements into reliable, user-focused digital
                                    products, with growing expertise in machine learning,
                                    software engineering, and intelligent systems
                                </p>
                            </div>
                        </motion.div>

                        {/* Bento Item 2: Profile Pic */}
                        <motion.div {...fadeUp(0.2)} className="md:col-span-1 md:row-span-1 rounded-[2.5rem] border border-glass-border overflow-hidden relative group">
                            <Image src="/assets/images/profile.jpg" alt="Ohiocheoya Alabi" width={400} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>

                        {/* Bento Item 3: Quick Links */}
                        <motion.div {...fadeUp(0.3)} className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-glass-bg border border-glass-border p-6 flex flex-col justify-center gap-4 group hover:border-accent/40 transition-all duration-500">
                            <a href="#projects" className="w-full py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2">
                                View Projects <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="/assets/docs/Ohiocheoya_Alabi_CV.pdf" download className="w-full py-4 bg-foreground/5 border border-foreground/15 text-foreground rounded-2xl font-bold text-sm hover:bg-foreground/10 transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm">
                                <Download className="w-4 h-4 text-accent" /> Download CV
                            </a>
                        </motion.div>

                        {/* Bento Item 4: Stats */}
                        <motion.div {...fadeUp(0.4)} className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-glass-bg border border-glass-border px-3 py-8 flex items-center justify-between group hover:border-accent/40 transition-all duration-500">
                            <div className="text-center w-full">
                                <h3 className="text-5xl font-black text-foreground mb-1">3+</h3>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Years Exp</p>
                            </div>
                            <div className="w-[1px] h-16 bg-glass-border mx-4" />
                            <div className="text-center w-full">
                                <h3 className="text-5xl font-black text-accent mb-1">15+</h3>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest">Projects</p>
                            </div>
                        </motion.div>

                        {/* Bento Item 5: Location & Contact */}
                        <motion.div {...fadeUp(0.5)} className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-glass-bg border border-glass-border px-3 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/15 transition-colors duration-500" />
                            <div className="flex items-center gap-5 relative z-10">
                                <div className="w-16 h-16 rounded-3xl bg-foreground/5 flex items-center justify-center border border-glass-border">
                                    <MapPin className="text-accent w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">Lagos State, Nigeria</h3>
                                    <p className="text-sm text-muted-foreground">Remote Worldwide</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 relative z-10 justify-center mt-4 sm:mt-0">
                                <a href="https://www.linkedin.com/in/ohiocheoya" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-3xl bg-foreground/5 border border-glass-border flex items-center justify-center text-foreground hover:bg-foreground/10 hover:-translate-y-1 transition-all">
                                    <FaLinkedinIn className="w-6 h-6" />
                                </a>
                                <a href="https://github.com/Alabiohio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-3xl bg-foreground/5 border border-glass-border flex items-center justify-center text-foreground hover:bg-foreground/10 hover:-translate-y-1 transition-all">
                                    <FaGithub className="w-6 h-6" />
                                </a>
                                <a href="https://x.com/ohioalabi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-3xl bg-foreground/5 border border-glass-border flex items-center justify-center text-foreground hover:bg-foreground/10 hover:-translate-y-1 transition-all">
                                    <FaXTwitter className="w-6 h-6" />
                                </a>
                                <a href="https://www.tiktok.com/@ohioalabi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-3xl bg-foreground/5 border border-glass-border flex items-center justify-center text-foreground hover:bg-foreground/10 hover:-translate-y-1 transition-all">
                                    <FaTiktok className="w-6 h-6" />
                                </a>
                                <a href="https://www.instagram.com/ohioalabi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-3xl bg-foreground/5 border border-glass-border flex items-center justify-center text-foreground hover:bg-foreground/10 hover:-translate-y-1 transition-all">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a href="https://www.threads.com/@ohioalabi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-3xl bg-foreground/5 border border-glass-border flex items-center justify-center text-foreground hover:bg-foreground/10 hover:-translate-y-1 transition-all">
                                    <FaThreads className="w-6 h-6" />
                                </a>
                                <a href="https://www.snapchat.com/add/ohioalabi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-3xl bg-foreground/5 border border-glass-border flex items-center justify-center text-foreground hover:bg-foreground/10 hover:-translate-y-1 transition-all">
                                    <FaSnapchat className="w-6 h-6" />
                                </a>
                                <a href="mailto:ohioalabi@gmail.com" className="w-12 h-12 rounded-3xl bg-accent flex items-center justify-center text-accent-foreground hover:bg-accent/90 hover:-translate-y-1 transition-all">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>



                {/* ─── SKILLS ───────────────────────────────────────────── */}
                <section id="skills" className="py-24 px-4 mx-auto relative bg-muted-foreground overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">

                        <motion.div {...fadeUp(0)} className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">Skills & Tools</h2>
                            </div>
                            <p className="text-white/80 text-lg max-w-md leading-relaxed">
                                I build products with a blend of engineering, product thinking, and visual craft to ship polished, user-first experiences.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-12 md:gap-16">
                            {skillGroups.map((group, index) => (
                                <motion.div
                                    key={group.title}
                                    {...fadeUp(index * 0.1)}
                                    className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-b border-white/10 pb-12 last:border-0 last:pb-0"
                                >
                                    <div className="w-full md:w-1/3 flex-shrink-0 sticky top-24">
                                        <h3 className="text-2xl font-black text-white">{group.title}</h3>
                                        <div className="w-12 h-1 bg-accent mt-4 rounded-full" />
                                    </div>

                                    <div className="w-full md:w-2/3 flex flex-wrap gap-4">
                                        {group.skills.map((skill) => {
                                            const IconOrUrl = getSkillIcon(skill);
                                            const isUrl = typeof IconOrUrl === "string";

                                            return (
                                                <div key={skill} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 group/skill shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)]">
                                                    <div className="flex-shrink-0 bg-black/20 p-2 rounded-xl border border-white/5 group-hover/skill:border-accent/30 transition-colors">
                                                        {isUrl ? (
                                                            <img src={IconOrUrl as string} alt={skill} className="w-10 h-10 object-contain group-hover/skill:scale-110 transition-transform" />
                                                        ) : (
                                                            <IconOrUrl className="w-10 h-10 text-accent group-hover/skill:scale-110 transition-transform" />
                                                        )}
                                                    </div>
                                                    <span className="text-white/90 text-sm font-semibold tracking-wide group-hover/skill:text-white transition-colors">{skill}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── PROJECTS ─────────────────────────────────────────── */}
                <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

                    <motion.div {...fadeUp(0)} className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Featured Projects</h2>
                        </div>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            A showcase of production applications built end-to-end, focusing on performance, design, and user experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {featured.map((project, index) => (
                            <motion.div key={project.id} {...fadeUp(index * 0.1)}>
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>

                    {others.length > 0 && (
                        <div className="mt-32">
                            <motion.div {...fadeUp(0)} className="mb-12 flex items-center gap-6">
                                <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap">More Projects</h3>
                                <div className="h-[1px] w-full bg-glass-border" />
                            </motion.div>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                                {others.map((project, index) => (
                                    <motion.div key={project.id} {...fadeUp(index * 0.1)}>
                                        <ProjectCard {...project} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                <ContactForm />
            </main>

            <Footer />
        </div>
    );
};

export default PortfolioClient;
