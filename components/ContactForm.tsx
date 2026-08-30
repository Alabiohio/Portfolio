"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions";

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await sendContactEmail(formData);
            setStatus({ type: response.type as "success" | "error", message: response.message });
            if (response.type === "success") {
                form.reset();
            }
        } catch (error: unknown) {
            setStatus({ type: "error", message: "Failed to send message." });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                        Let&apos;s Start a <span className="text-foreground italic" style={{ fontFamily: 'var(--font-familyIII)' }}>Conversation</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Interested in collaborating or have a question? Kindly send a message.
                    </p>
                </motion.div>

                <motion.div
                    className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-glass-border bg-glass-bg backdrop-blur-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-muted-foreground ml-1 uppercase tracking-widest">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Write a Message..."
                                className="w-full px-6 py-4 bg-glass-bg border border-glass-border rounded-2xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/50 focus:bg-glass-bg-hover transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full py-5 bg-accent text-accent-foreground rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Send Message
                                </>
                            )}
                        </button>

                        {status && (
                            <div
                                className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium animate-fade-in ${status.type === "success"
                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                    : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                                    }`}
                            >
                                {status.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                {status.message}
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default ContactForm;
