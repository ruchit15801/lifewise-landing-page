import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SkipToContent } from "@/components/SkipToContent";
import { JsonLd } from "@/components/JsonLd";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { DeferredChatbot } from "@/components/DeferredChatbot";
import { ScrollToTop } from "@/components/ScrollToTop";
import { organizationSchema, websiteSchema } from "@/lib/json-ld";
import { buildRootMetadata, SITE_URL } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  variable: "--font-sans"
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = buildRootMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" }
  ],
  colorScheme: "light dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM reference for LifeWise" />
        <link rel="author" href={`${SITE_URL}/llms.txt`} />
      </head>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
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
      <body className={`${plusJakarta.variable} ${sora.variable} font-sans`}>
        <SkipToContent />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <DeferredChatbot />
          <ScrollToTop />
        </ThemeProvider>
        <DeferredAnalytics />
      </body>
    </html>
  );
}
