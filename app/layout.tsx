import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SkipToContent } from "@/components/SkipToContent";
import { JsonLd } from "@/components/JsonLd";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { DeferredChatbot } from "@/components/DeferredChatbot";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WebMcpProvider } from "@/components/WebMcpProvider";
import { organizationSchema, websiteSchema } from "@/lib/json-ld";
import { buildRootMetadata, SITE_URL } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
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
    <html lang="en-IN" className={`${plusJakarta.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM reference for LifeWise" />
        <link rel="alternate" type="text/markdown" href="/?format=markdown" title="Markdown for Agents" />
        <link rel="api-catalog" type="application/linkset+json" href="/.well-known/api-catalog" />
        <link rel="ai-catalog" type="application/json" href="/.well-known/ai-catalog.json" />
        <link rel="service-desc" type="application/openapi+json" href="/openapi.json" />
        <link rel="service-doc" href="/docs" />
        <link rel="author" href={`${SITE_URL}/llms.txt`} />
        <script
          id="lifewise-theme-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('lifewise-theme');document.documentElement.classList.toggle('dark',(t||'light')==='dark');}catch(e){}})();`
          }}
        />
        <script
          id="webmcp-sync-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){function r(c){if(!c||typeof c.registerTool!=='function')return;try{c.registerTool({name:'search_lifewise_features',description:'Search LifeWise features, Family Hub, medicine reminders, and bills',inputSchema:{type:'object',properties:{query:{type:'string'}},required:['query']},execute:function(a){return{result:'LifeWise features matching '+(a&&a.query||'')};}});c.registerTool({name:'get_subscription_pricing',description:'Retrieve LifeWise subscription plan prices (Free, Starter, Family, Pro)',inputSchema:{type:'object',properties:{plan:{type:'string'}}},execute:function(){return{plans:{free:0,starter:99,family:199,pro:499}};}});}if(typeof navigator!=='undefined'&&navigator.modelContext)r(navigator.modelContext);if(typeof document!=='undefined'&&document.modelContext)r(document.modelContext);if(typeof window!=='undefined'){window.addEventListener('DOMContentLoaded',function(){if(typeof navigator!=='undefined'&&navigator.modelContext)r(navigator.modelContext);if(typeof document!=='undefined'&&document.modelContext)r(document.modelContext);});}})();`
          }}
        />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className={`${plusJakarta.className} font-sans`}>
        <WebMcpProvider />
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
