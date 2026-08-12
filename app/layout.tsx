import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SkipToContent } from "@/components/SkipToContent";
import { JsonLd } from "@/components/JsonLd";
import dynamic from "next/dynamic";
import { organizationSchema, websiteSchema } from "@/lib/json-ld";
import { buildRootMetadata, SITE_URL } from "@/lib/seo";

const SupportChatbot = dynamic(
  () => import("@/components/SupportChatbot").then((m) => m.SupportChatbot),
  { ssr: false }
);

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
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
      <Script
        id="adsense"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5431367793480852"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <Script
        id="gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=G-HKH8RSGWT1"
        strategy="lazyOnload"
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HKH8RSGWT1');
          `
        }}
      />
      <body className={`${plusJakarta.variable} ${sora.variable} font-sans`}>
        <SkipToContent />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <SupportChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
