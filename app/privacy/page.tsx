import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Ohio Alabi",
    description: "Privacy policy for Ohio Alabi's portfolio website.",
};

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen py-24 px-4 relative overflow-hidden bg-background">
            <div className="max-w-3xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <div className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-glass-border bg-glass-bg backdrop-blur-xl space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                            Privacy <span className="text-foreground italic" style={{ fontFamily: 'var(--font-familyIII)' }}>Policy</span>
                        </h1>
                        <p className="text-muted-foreground text-sm">Last updated: August 30, 2026</p>
                    </div>

                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                            <p>
                                When you use the contact form on this website, we collect the following personal information that you voluntarily provide:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Your Name</li>
                                <li>Your Email Address</li>
                                <li>The content of your message</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
                            <p>
                                The information you provide is used solely for the purpose of responding to your inquiries, questions, or collaboration requests. We do not use your information for marketing purposes, and we do not sell or rent your personal information to third parties.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">3. Third-Party Services</h2>
                            <p>
                                We use Resend, a third-party email delivery service, to securely process and deliver the messages submitted through our contact form. By using the contact form, you acknowledge that your information will be transferred to Resend for processing in accordance with their privacy policy and terms of service.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">4. Data Retention</h2>
                            <p>
                                We retain the information you provide via the contact form only for as long as is necessary to fulfill the purposes for which it was collected, such as to respond to your inquiry and maintain a record of our correspondence.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">5. Your Rights</h2>
                            <p>
                                You have the right to request access to, correction of, or deletion of any personal information that we hold about you. If you wish to exercise these rights, please contact us using the email addresses provided below.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-2xl font-bold text-foreground">6. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <ul className="list-none space-y-1">
                                <li><a href="mailto:ohioalabi@gmail.com" className="text-accent hover:underline">ohioalabi@gmail.com</a></li>
                                <li><a href="mailto:ohioalabi1@gmail.com" className="text-accent hover:underline">ohioalabi1@gmail.com</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
        </main>
    );
};

export default PrivacyPolicy;
