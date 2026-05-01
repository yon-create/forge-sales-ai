import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Perfect Pitch — the sales coach with perfect pitch",
  description:
    "Perfect Pitch is the AI in every closer's ear — an always-on conductor that listens to the call, hears what your buyer means, and feeds your rep the right note at the right tempo.",
  keywords: "sales AI, AI sales coaching, sales performance, pipeline intelligence, conversation intelligence",
  openGraph: {
    title: "Perfect Pitch — the sales coach with perfect pitch",
    description: "AI-powered sales coaching that listens, conducts, and harmonizes every call.",
    url: "https://salesaidemo.com",
    siteName: "Perfect Pitch",
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
      <body className={`${instrumentSerif.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
