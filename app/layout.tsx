import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "LifeWise – Your Smart AI Life Assistant",
  description:
    "LifeWise is an AI-powered life assistant for bills, medicines, family care, and life memories. Live smarter with automatic reminders and insights.",
  openGraph: {
    title: "LifeWise – Your Smart AI Life Assistant",
    description:
      "AI-powered reminders, family care, bill alerts, and smart life memory.",
    url: "https://lifewise.app",
    siteName: "LifeWise",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

