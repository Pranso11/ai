import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import BackgroundGradients from "./components/BackgroundGradients";

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta'
});

export const metadata: Metadata = {
  title: "Pranso AI - Transforming Businesses with AI Solutions",
  description: "Pranso AI helps businesses leverage artificial intelligence to automate processes, gain insights, and drive growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${jakarta.variable} ${manrope.className}`}>
        <BackgroundGradients />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
} 