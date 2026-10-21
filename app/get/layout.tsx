import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download LifeWise – AI Family Hub",
  description:
    "Download LifeWise on iPhone or Android. Your AI-powered family hub for health, schedules and memories.",
  robots: { index: false, follow: false },
};

/**
 * Standalone layout for /get — inherits <html> + theme-init script from the
 * root layout automatically (Next.js App Router nesting), but skips Navbar
 * and Footer so mobile users never see any flash before being redirected.
 */
export default function GetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
