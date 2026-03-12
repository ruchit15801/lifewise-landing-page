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
  metadataBase: new URL("https://www.lifewiseee.com"),
  applicationName: "LifeWise",
  title: "LifeWise – AI Life Assistant for Reminders, Bills, Family & Daily Life",
  description:
    "LifeWise is an AI-powered reminder and life assistant app that helps you manage bills, medicines, family tasks and daily reminders.",
  alternates: {
    canonical: "https://www.lifewiseee.com/"
  },
  keywords: [
    "AI life assistant",
    "smart reminder app",
    "bill reminder app",
    "medicine reminder app",
    "family reminder app",
    "AI personal assistant app",
    "daily life organizer app",
    "smart life management app",
    "UPI bill reminder",
    "voice reminder app",
    "AI life manager",
    "personal reminder assistant",
    "family health reminder",
    "automatic bill reminder",
    "smart daily planner",
    "life organization app",
    "smart memory assistant",
    "AI productivity assistant",
    "habit reminder app",
    "best AI reminder app",
    "AI assistant for daily life"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "LifeWise – Smart AI Life Assistant",
    description:
      "LifeWise helps you manage reminders, bills, family health and daily tasks with AI automation.",
    url: "https://www.lifewiseee.com",
    siteName: "LifeWise",
    images: [
      {
        url: "https://www.lifewiseee.com/og-image.svg",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeWise – Smart AI Reminder App",
    description:
      "Your AI life assistant for reminders, family care and bill alerts.",
    images: ["https://www.lifewiseee.com/og-image.svg"]
  },
  icons: {
    icon: [{ url: "/icon.png" }],
    apple: [{ url: "/icon.png" }]
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
      <Script
        id="adsense-script"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5431367793480852"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        id="lifewise-ld-json"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "LifeWise",
            operatingSystem: "Android",
            applicationCategory: "ProductivityApplication",
            url: "https://www.lifewiseee.com",
            description:
              "LifeWise is an AI-powered reminder and life assistant app that helps users manage bills, medicines, family tasks and daily life reminders."
          })
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
