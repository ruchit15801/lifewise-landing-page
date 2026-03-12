import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "LifeWise — Your Smart AI Life Assistant",
  description:
    "LifeWise is your AI-powered life assistant that remembers what you forget — bills, medicines, family tasks, and daily life reminders.",
  openGraph: {
    title: "LifeWise — Your Smart AI Life Assistant",
    description:
      "AI-powered reminders, family care, bill alerts, and smart life insights — in a premium, privacy-first assistant.",
    url: "https://lifewise.app",
    siteName: "LifeWise",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeWise — Your Smart AI Life Assistant",
    description:
      "AI-powered reminders, family care, bill alerts, and smart life insights."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        id="lifewise-theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              try {
                var t = localStorage.getItem('lifewise-theme');
                var theme = t ? t : 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            })();
          `
        }}
      />
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
