<div align="center">
  <h1>Ohiocheoya Isaac Alabi - Personal Portfolio</h1>
  <p>A modern, highly interactive, and visually stunning personal portfolio built with React and Next.js.</p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 About the Project

This is my personal portfolio website, designed to showcase my projects, skills, and experience as a Full-Stack Developer. The focus of this project is on high performance, SEO best practices, and a premium "glassmorphism" aesthetic with smooth scroll animations. 

While this serves as my personal site, it is open-sourced under the MIT License, meaning you can fork it and use it as a template for your own portfolio.

## 🔗 Live Demo

You can view the live version of the portfolio here:
👉 **[Your Portfolio URL Here]** (e.g., https://ohio-portfolio.vercel.app)

## 🚀 Features

- **Next-Gen Tech**: Built using the latest Next.js 16 App Router and React 19.
- **Premium UI/UX**: Custom dark-mode UI with sleek glassmorphism panels, gradients, and micro-interactions.
- **Bento Grid Layout**: A responsive bento-box design that naturally adapts to mobile, tablet, and desktop screens.
- **Fluid Animations**: Smooth page transitions, scroll-reveals, and hover effects powered by Framer Motion.
- **Working Contact Form**: Secure, server-side email processing integrated with the Resend API.
- **SEO Optimized**: Dynamic meta tags, Open Graph images, and semantic HTML structure.
- **Fully Typed**: Written in strict TypeScript to ensure type safety and developer experience.

## 🛠️ Tech Stack

- **Framework**: [Next.js (v16)](https://nextjs.org/)
- **UI Library**: [React (v19)](https://react.dev/)
- **Styling**: [Tailwind CSS (v4)](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Email Service**: [Resend](https://resend.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

```text
portfolio/
├── app/                  # Next.js App Router (Pages, Layouts, API routes)
├── assets/               # Static assets like images and PDFs
├── components/           # Reusable React components (UI, Layouts, Forms)
├── data/                 # JSON/TS data files (Projects, Skills, Experience)
├── public/               # Publicly accessible static files (Favicon, OG images)
├── styles/               # Global CSS and Tailwind configurations
├── types/                # TypeScript type definitions and interfaces
└── ...                   # Config files (package.json, next.config, etc.)
```

## 💻 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You will need the following installed:
- [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy the example environment file or create a new `.env.local` file in the root directory:
   ```env
   # Used for the contact form email service
   RESEND_API_KEY=your_resend_api_key_here
   ```
   *(You can get a free API key from [Resend.com](https://resend.com/))*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Customization Guide

Want to use this portfolio for yourself? Here is how to quickly customize it:

1. **Update Data files**: Edit the files in the `data/` directory to update the list of your projects, skills, and work experience.
2. **Change Assets**: Swap out the images in the `assets/` and `public/` directories with your own headshots and project screenshots.
3. **Update Text content**: Modify text in `components/PortfolioClient.tsx` to reflect your own name and bio.
4. **Change Colors**: You can modify the primary/secondary gradient colors and glassmorphism styling inside `app/globals.css`.

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Go to Vercel and import your repository.
3. Add your `RESEND_API_KEY` to the Environment Variables section in Vercel before deploying.
4. Click **Deploy**.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check out the [issues page](https://github.com/yourusername/portfolio/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 

*Note: The personal content, images, logo, and resume within this portfolio are copyrighted by Ohiocheoya Isaac Alabi and may not be reused without explicit permission. Only the source code itself is licensed under MIT.*

## 📬 Contact

**Ohiocheoya Isaac Alabi** 
- LinkedIn: [Your LinkedIn Profile URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---
*Built with ❤️ by Ohiocheoya Isaac Alabi.*
