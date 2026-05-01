import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "FORGE — AI That Closes",
  description:
    "FORGE uses AI to supercharge your sales team's performance. Close more deals, forecast smarter, and win faster.",
  keywords: "sales AI, AI sales coaching, sales performance, pipeline intelligence",
  openGraph: {
    title: "FORGE — AI That Closes",
    description: "AI-powered sales performance platform for elite teams.",
    url: "https://salesaidemo.com",
    siteName: "FORGE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${ibmPlexMono.variable} ${dmSans.variable} bg-bg text-[#F5F4F0] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
