import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Do I Love My Job? - The Workplace Vibe Check",
  description: "Take the quiz your HR department hopes you never find. 5 questions. 2 minutes. The truth about your workplace survival level.",
  keywords: ["workplace humor", "office quiz", "work life balance", "corporate satire", "funny quiz", "do i love my job"],
  authors: [{ name: "Do I Love My Job?" }],
  openGraph: {
    title: "Do I Love My Job? - The Workplace Vibe Check",
    description: "Let's find out if you love your job... or if you're just really good at pretending.",
    url: "https://doilovemyjob.com",
    siteName: "Do I Love My Job?",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do I Love My Job? - The Workplace Vibe Check",
    description: "Take the quiz your HR department hopes you never find.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
