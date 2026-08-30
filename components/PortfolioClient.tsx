"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
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
            {/* Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="bg-noise" />
                <div className="glow-spot glow-accent top-[20%] right-[-10%]" />
                <div className="glow-spot glow-secondary bottom-[20%] left-[-10%]" />
                <div className="background-beams">
                    <div className="beam left-[15%] animation-delay-1" style={{ animationDuration: "11s" }} />
                    <div className="beam left-[45%] animation-delay-3" style={{ animationDuration: "13s" }} />
                    <div className="beam left-[75%] animation-delay-5" style={{ animationDuration: "16s" }} />
                </div>
            </div>

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
                                    <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                                        Alabi
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                                    Full-Stack Developer crafting fast, scalable, and visually stunning web experiences with React & Next.js.
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
                <section id="skills" className="py-24 px-4 max-w-7xl mx-auto relative">
                    <motion.div {...fadeUp(0)} className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Skills & Tools</h2>
                        </div>
                        <p className="text-muted-foreground max-w-md leading-relaxed">
                            I build products with a blend of engineering, product thinking, and visual craft to ship polished, user-first experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillGroups.map((group, index) => (
                            <motion.div
                                key={group.title}
                                {...fadeUp(index * 0.08)}
                                className="rounded-[2rem] border border-glass-border bg-glass-bg p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                            >
                                <h3 className="text-xl font-bold mb-5 text-foreground">{group.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map((skill) => (
                                        <SkillBadge key={skill} name={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ─── PROJECTS ─────────────────────────────────────────── */}
                <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />

                    <motion.div {...fadeUp(0)} className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-accent font-bold tracking-widest uppercase text-xs block mb-4">Selected Work</span>
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
