import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Shravani Sirsat | Computer Science Engineer & Full Stack Developer",
  description:
    "Pre-final year Computer Science Engineering student with CGPA 10, 2nd University Rank. Full Stack Developer, UI Designer, and President of Computer Science Student Association.",
  keywords: [
    "Shravani Sirsat",
    "Computer Science Engineer",
    "Full Stack Developer",
    "React Developer",
    "Portfolio",
    "Web Developer",
    "India",
  ],
  authors: [{ name: "Shravani Sirsat" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shravani Sirsat | Computer Science Engineer & Full Stack Developer",
    description:
      "Pre-final year Computer Science Engineering student with CGPA 10, 2nd University Rank. Full Stack Developer, UI Designer, and Leader.",
    type: "website",
    locale: "en_US",
    siteName: "Shravani Sirsat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shravani Sirsat | Computer Science Engineer & Full Stack Developer",
    description:
      "Pre-final year Computer Science Engineering student with CGPA 10, 2nd University Rank.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
