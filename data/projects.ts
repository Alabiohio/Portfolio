import { Project } from "@/types";
import lizzysunique from '@/assets/img/lizzysunique.png';
import lexa from '@/assets/img/lexa.png';
import unibenClearance from '@/assets/img/uniben-clearance.png';
import destinyArt from '@/assets/img/destiny-art.png';
import engineBlog from '@/assets/img/engineBlog.png';
import creativeGene from '@/assets/img/creativegene.png';
import oheoHero from '@/assets/img/oheo/hero.png';
import oheoCta from '@/assets/img/oheo/cta.png';
import loggedHero from '@/assets/img/logged/hero.png';
import loggedDashboard from '@/assets/img/logged/dashboard.png';
import loggedLogs from '@/assets/img/logged/logs.png';
import loggedSettings from '@/assets/img/logged/settings.png';
import cblHero from '@/assets/img/cbl/hero.png';
import cblGallery from '@/assets/img/cbl/gallery.png';
import cblFooter from '@/assets/img/cbl/footer.png';
import cblAbout from '@/assets/img/cbl/about.png';
import cblSocial from '@/assets/img/cbl/social.png';
import cblSpe from '@/assets/img/cbl/spe.png';
import ccbHero from '@/assets/img/ccb/hero.png';
import ccbDashboard from '@/assets/img/ccb/ccbDashboard.png';
import ccbComp from '@/assets/img/ccb/comp1.png';
import bciHero from '@/assets/img/bci/hero.png';
import bciFooter from '@/assets/img/bci/footer.png';
import bciPrograms from '@/assets/img/bci/programs.png';
import bciDashboard from '@/assets/img/bci/dashboard.png';
import bciEdit from '@/assets/img/bci/edit.png';


export const projects: Project[] = [
    {
        id: 10,
        title: "Biome Conserve Initiative",
        slug: "biome-conserve-initiative",
        description: "A professional NGO platform for environmental conservation and sustainable ecosystem management.",
        role: "Full-Stack Developer",
        impact: "Built a production-ready NGO platform that expanded the organization's global digital presence and community engagement channels.",
        category: "NGO / Non-Profit",
        date: "Apr 2026 - May 2026",
        keyFeatures: [
            "Designed and developed the responsive NGO website",
            "Integrated dynamic pages to showcase conservation field work",
            "Built a custom administrative dashboard for real-time project updates and impact tracking",
            "Optimized performance and SEO for global environmental advocacy"
        ],
        imgUrl: bciHero.src,
        images: [bciHero.src, bciPrograms.src, bciFooter.src, bciDashboard.src, bciEdit.src],
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX"],
        liveUrl: "",
        isFeatured: true,
    },
    {
        id: 9,
        title: "CCB Farms",
        slug: "ccb-farms",
        description: "A premium agricultural e-commerce platform with a sophisticated international booking engine and a comprehensive admin management system.",
        role: "Full-Stack Developer",
        impact: "Delivered a complete business system — from customer-facing storefront to a full admin dashboard — enabling the client to manage orders, pricing, and inventory end-to-end.",
        category: "E-Commerce / Admin Dashboard",
        date: "Feb 2025 - Present",
        keyFeatures: [
            "Designed and developed a premium, mobile-first storefront with high-end visual aesthetics",
            "Connected the frontend to a PostgreSQL database for real-time product management and order storage",
            "Engineered a robust admin dashboard for managing orders, products, and price catalogs",
            "Implemented automated professional email communication pipelines for order confirmations"
        ],
        imgUrl: ccbHero.src,
        images: [ccbHero.src, ccbDashboard.src, ccbComp.src],
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Responsive Design", "UI/UX"],
        liveUrl: "",
        isFeatured: true,
    },
    {
        id: 8,
        title: "Chops by Lizee",
        slug: "chops-by-lizee",
        description: "A premium culinary and catering website showcasing handcrafted pastries, custom cakes, authentic African and Continental dishes, and event catering services based in Lagos, Nigeria.",
        role: "Full-Stack Developer",
        impact: "Built a high-end, visually immersive brand website from scratch — complete with animated galleries, contact forms, social integrations, and SEO optimization — driving customer engagement and catering inquiries.",
        category: "Brand / Portfolio Website",
        date: "2025 - Present",
        keyFeatures: [
            "Designed and developed a premium, split-screen hero with animated image collage using Next.js & React",
            "Implemented a dynamic image gallery with lightbox modal and category filtering",
            "Built a validated contact form with spam protection (honeypot) and email integration via Resend",
            "Integrated social media platforms (Instagram, TikTok, WhatsApp) with custom SVG icons",
            "Created an animated, responsive navigation with mobile menu and scroll-based styling",
            "Applied scroll-triggered animations using AOS (Animate On Scroll) library",
            "Built bento-grid layouts and asymmetric editorial sections for visual storytelling",
            "Implemented SEO best practices with dynamic metadata, Open Graph, and Twitter cards",
            "Developed custom color system and typography using Tailwind CSS v4 CSS variables",
            "Added a proxy for legacy domain redirects (301) from former brand identity",
            "Created a custom error boundary page with retry functionality"
        ],
        imgUrl: cblHero.src,
        images: [cblHero.src, cblGallery.src, cblFooter.src, cblAbout.src, cblSocial.src, cblSpe.src],
        skillsUsed: ["React", "Next.js 16", "TypeScript", "Tailwind CSS v4", "AOS", "Resend", "Lucide React", "Responsive Design", "UI/UX", "SEO", "Form Validation"],
        liveUrl: "https://chopsbylizee.oheo.site",
        isFeatured: true,
    },
    {
        id: 7,
        title: "Logged",
        slug: "logged",
        description: "A lightweight, centralized logging platform that helps developers collect, monitor, and analyze logs from websites, APIs, and applications in one beautiful dashboard.",
        role: "Full-Stack Developer",
        impact: "Designed and built a developer-focused logging platform from scratch — complete with authentication, project management, API key generation, real-time log ingestion via REST API, a custom TypeScript SDK, and a searchable dashboard — enabling developers to monitor applications and debug issues faster without SSH access or scattered server logs.",
        category: "Developer Tool / Full-Stack Web App",
        date: "Aug 2026 - Present",
        keyFeatures: [
            "Designed and built a responsive SaaS landing page and dashboard using Next.js 16, React 19, and Tailwind CSS v4",
            "Implemented secure user authentication and session management with Better Auth and JWT",
            "Built project management system with unique API key generation for secure log ingestion",
            "Developed REST API log ingestion endpoint with request validation, rate limiting, and CORS handling",
            "Created a custom TypeScript SDK with multiple log levels (info, warn, error, debug), browser context capture, console interception, and automatic error tracking",
            "Built a real-time dashboard UI with live log streaming, search, and filtering by level, environment, and project",
            "Implemented rich log metadata enrichment including URL, pathname, browser, OS, device, IP address, and stack traces",
            "Designed PostgreSQL database schema with Drizzle ORM using Neon serverless, including proper indexes for performance",
            "Integrated Resend for transactional email (password reset, etc.)",
            "Ensured mobile-first, accessible UI with glassmorphism design system using Tailwind CSS and next-themes"
        ],
       imgUrl: loggedHero.src,
       images: [loggedHero.src, loggedDashboard.src, loggedLogs.src, loggedSettings.src],
        skillsUsed: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Drizzle ORM",
            "Better Auth",
            "REST API",
            "Resend",
            "Lucide React",
            "SDK Development",
            "Responsive Design",
            "UI/UX"
        ],
        liveUrl: "In Development",
        isFeatured: true,
    },

    {
        id: 6,
        title: "Oheo — Digital Studio Website",
        slug: "oheo",
        description: "A modern, high-performance digital studio portfolio website built with Next.js 16, showcasing web development, e-commerce, AI automation, graphic design, and SEO services. Features animated UI, responsive design, project portfolio, dynamic routing, server-side contact forms with email automation, PostgreSQL integration, and full SEO optimization.",
        role: "Full-Stack Developer",
        impact: "Built and shipped a complete portfolio and business website from scratch — with a dynamic project showcase, service pages, contact system, SEO infrastructure, and performance optimizations — representing the studio's brand and capabilities online.",
        category: "Portfolio / Business Website",
        date: "V2.7.1 — Aug 2024 – Aug 2026",
        keyFeatures: [
            "Built a responsive marketing and portfolio platform using Next.js 16 (App Router) with React 19 and TypeScript",
            "Implemented dynamic routing for projects (`/projects/[slug]`) and services (`/services/[slug]`) with static param generation for optimal performance",
            "Designed and deployed a structured project portfolio with image galleries, category filtering, and adjacent project navigation",
            "Integrated PostgreSQL database (via `postgres` package) for storing contact messages with server-side validation",
            "Built a contact form with rate limiting, dual email delivery (admin + user confirmation) via Resend API, and XSS-safe HTML templates",
            "Implemented comprehensive SEO: programmatic sitemap.xml, robots.txt, dynamic metadata per route, Open Graph tags, Twitter cards, and structured JSON-LD-style metadata",
            "Applied security-focused HTTP headers (X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy) via Next.js headers config",
            "Optimized Next.js Image component with WebP/AVIF formats, responsive sizes, and priority loading for hero assets",
            "Designed a custom Tailwind CSS v4 theme with CSS variables, glass-morphism card styles, animated gradient glows, and Framer Motion entrance/stagger animations",
            "Built a responsive mobile-first navigation with desktop mega-menu for services, mobile drawer with submenus, and scroll-triggered transparency",
            "Implemented lazy-loaded components (dynamic imports for ContactForm, Footer) and IntersectionObserver-based video loading for performance",
            "Created a 7-step process showcase page with animated step-by-step workflow visualization",
            "Developed an about page with layered card design, philosophy grid, and brand positioning messaging",
            "Integrated a public JSON API (`/api/ohio`) serving studio metadata (ohio.json) for external consumption",
            "Designed a services section with 9 service areas (Websites, E-commerce, SEO, AI Automation, Dashboards, Graphic Design, Media Production, etc.), each with dedicated detail pages"
        ],
        imgUrl: oheoHero.src,
        images: [oheoHero.src, oheoCta.src],
        skillsUsed: [
            "Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4",
            "Framer Motion", "PostgreSQL", "Resend API", "Server Actions",
            "FontAwesome", "Node.js Image Optimization", "SEO/Sitemap",
            "Responsive Design", "CSS Variables", "Vercel"
        ],
        liveUrl: "https://oheo.site",
        isFeatured: true,
    },
    {
        id: 5,
        title: "Creative Gene",
        slug: "creative-gene",
        description: "A professional landing page with a custom registration dashboard and Supabase integration.",
        role: "Frontend Developer & Backend Integrator",
        impact: "Replaced a manual registration process with a fully automated, database-backed system that streamlined participant management.",
        category: "Landing Page / Dashboard",
        date: "Jan 2026 - Feb 2026",
        keyFeatures: [
            "Designed and developed the responsive landing page",
            "Connected the frontend to Supabase for registration and data storage",
            "Built a custom dashboard for viewing and managing registrations",
            "Implemented full CRUD functionality, making the page fully interactive"
        ],
        imgUrl: creativeGene.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Responsive Design", "UI/UX"],
        liveUrl: "https://creativefestcon.vercel.app",
        isFeatured: true,
    },
    {
        id: 4,
        title: "Engine Blog",
        slug: "engine-blog",
        description: "A modern, dynamic web platform designed to keep engineering students updated with campus news, academic resources, and opportunities.",
        role: "Full-Stack Developer",
        impact: "Built a fully-featured community blogging platform from scratch — complete with auth, CMS, comments, and search — serving an active student community.",
        category: "Full-Stack Web App",
        date: "Dec 2025 - Jan 2026",
        keyFeatures: [
            "Designed and built a responsive blog platform using Next.js & React",
            "Implemented authentication and user management with Clerk",
            "Integrated Sanity CMS for dynamic content management",
            "Built comments and reactions system using Supabase (PostgreSQL & RLS)",
            "Implemented search, categories, and filtering for posts",
            "Optimized pages for SEO (metadata, slugs, performance)",
            "Developed profile management with image upload",
            "Applied secure access control using database policies (RLS)",
            "Ensured mobile-first, accessible UI with Tailwind CSS"
        ],
        imgUrl: engineBlog.src,
        skillsUsed: ["React", "Next.js", "Typescript", "Tailwind CSS", "PostgreSQL", "Sanity CMS", "Clerk", "Responsive Design", "UI/UX"],
        liveUrl: "https://engineblog.live",
        isFeatured: true,
    },
    {
        id: 3,
        title: "UNIBEN Clearance Assistant",
        slug: "uniben-clearance-assistant",
        description: "Web platform designed to assist 100-level UNIBEN students with the clearance process, offering user-friendly navigation, responsive design, and simplified administrative steps.",
        role: "Developer",
        impact: "Simplified a complex administrative process for hundreds of incoming university students with clear, step-by-step digital guidance.",
        category: "Educational Tool",
        date: "June 2025 - Aug 2025",
        imgUrl: unibenClearance.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "Responsive Design", "UI/UX"],
        isFeatured: false,
    },
    {
        id: 2,
        title: "Lexa",
        slug: "lexa",
        description: "AI-powered chatbot web app built with React and Node.js, featuring text & image inputs, real-time responses, web search integration, and interactive user interface.",
        role: "Full-Stack Developer",
        impact: "Delivered a functional AI assistant with real-time search grounding and image input capabilities, demonstrating end-to-end API integration skills.",
        category: "AI / Web App",
        date: "March 2025 - May 2025",
        imgUrl: lexa.src,
        skillsUsed: ["React", "JavaScript", "PostgreSQL", "Node.js", "Foundation 6", "CSS", "APIs", "Web Search Integration"],
        isFeatured: false,
    },
    {
        id: 1,
        title: "Destiny Art Website",
        slug: "destiny-art-website",
        description: "Foundation 6 website for an art business, featuring a responsive portfolio gallery, smooth image animations, SEO optimization, and fast page load performance.",
        role: "Frontend Developer",
        impact: "Established an artist's online portfolio, resulting in improved discoverability and client inquiries.",
        category: "Business Website",
        date: "Jan 2025",
        imgUrl: destinyArt.src,
        skillsUsed: ["HTML", "CSS", "Foundation 6", "JavaScript", "SEO"],
        isFeatured: false,
    }
];
