import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Ohiocheoya Alabi - Portfolio",
    description:
        "Full-Stack Developer specializing in React & Next.js — building fast, scalable websites that drives growth.",
    keywords: [
        "Ohiocheoya Alabi",
        "Frontend Developer",
        "React Developer",
        "Full-Stack Web Developer",
        "Portfolio Website",
    ],
    authors: [{ name: "Ohiocheoya Alabi" }],
    creator: "Ohiocheoya Alabi",
};

export default function Home() {
    return <PortfolioClient projects={projects} />;
}
