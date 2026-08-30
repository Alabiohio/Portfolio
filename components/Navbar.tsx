"use client";
import React, { useState, useEffect } from "react";
import NavLink from "@/components/NavLink";
import { Menu, X, Home, ArrowRight } from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 px-6 transition-all duration-300
        ${scrolled ? "bg-background py-6" : "bg-transparent py-8"}`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold tracking-widest text-foreground">Oheo</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-8 items-center">
                    <NavLink
                        href="/"
                        className="text-muted-foreground hover:text-accent font-medium transition-colors px-3 py-1.5 rounded-lg"
                        activeClassName="!text-accent font-bold !bg-accent/20"
                    >
                        Portfolio
                    </NavLink>

                    <a
                        href="mailto:ohioalabi@gmail.com"
                        className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 px-4 py-2 rounded-lg font-bold transition-all text-sm"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Button */}
                <div className="lg:hidden">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="focus:outline-none transition-transform duration-300 bg-glass-bg p-2 rounded-lg border border-glass-border text-foreground"
                    >
                        {isOpen ? <X className="w-6 h-6 text-accent" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-background/60 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                />

                {/* Drawer */}
                <div
                    className={`absolute top-0 right-0 h-screen w-[85%] sm:w-[400px] bg-background border-l border-glass-border shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col h-full p-8">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-12">
                            <span className="text-xl font-bold">Oheo</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-xl bg-foreground/5 text-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-grow space-y-4">
                            <NavLink
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-transparent hover:border-accent/20 hover:bg-accent/5 transition-all"
                                activeClassName="!bg-accent/10 !border-accent/30 !text-accent"
                            >
                                <div className="w-12 h-12 rounded-xl bg-background border border-glass-border flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Home className="w-5 h-5 group-hover:text-accent" />
                                </div>
                                <div>
                                    <div className="font-bold text-lg">Portfolio</div>
                                    <div className="text-xs text-muted-foreground">My recent work</div>
                                </div>
                                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </NavLink>
                        </div>

                        {/* Footer */}
                        <div className="pt-8 border-t border-glass-border">
                            <a
                                href="mailto:ohioalabi@gmail.com"
                                className="block w-full py-4 bg-accent text-accent-foreground rounded-2xl font-bold text-center shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all active:scale-95"
                            >
                                Start a Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
