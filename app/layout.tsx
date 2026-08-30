import type { Metadata } from "next";
import "./globals.css";
import "@/styles/App.css";
import { Righteous, Exo_2, Bree_Serif, Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ohiocheoya Alabi — Portfolio",
  description: "Full-Stack Developer specializing in React & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${righteous.variable} ${exo2.variable} ${breeSerif.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
