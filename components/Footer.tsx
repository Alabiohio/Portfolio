import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
    linkTo?: string;
    linkText?: string;
}

const Footer: React.FC<FooterProps> = ({ linkTo = "/business", linkText = "Business" }) => {
    return (
        <footer className="py-20" id="footer" style={{ backgroundColor: "#252627" }}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-4 text-xl">
                            <li><Link href="/" className="text-white/60 hover:text-accent transition-colors">Home</Link></li>
                        </ul>
                    </div>

                    {/* Resources & Legal */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Legal</h4>
                        <ul className="space-y-4 text-xl">
                            <li><Link href="#" className="text-white/60 hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-white/60 hover:text-accent transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Get in Touch</h4>
                        <a
                            href="mailto:ohioalabi@gmail.com"
                            className="flex items-center gap-3 text-white/60 hover:text-accent transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="font-medium">ohioalabi@gmail.com</span>
                        </a>
                    </div>
                </div>

                {/* Brand Section */}
                <div className="space-y-6 justify-center items-center text-center">
                    <div className="flex items-center justify-center gap-3">
                        <div className="flex items-center">
                            <span className="text-3xl font-bold text-white tracking-widest">Oheo</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-center text-center items-center gap-4">
                    <p className="text-white/40 text-sm">
                        &copy; {new Date().getFullYear()} Oheo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
