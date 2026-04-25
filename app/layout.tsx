import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Parallax Technologies";

export const metadata: Metadata = {
  metadataBase: new URL("https://parallax.tech"),
  title: {
    default: `${siteName} | Digital Solutions`,
    template: `%s | ${siteName}`,
  },
  description:
    "Parallax Technologies is your partner for intelligent digital solutions—AI, cloud, web applications, and DevOps—for modern businesses.",
  applicationName: siteName,
  keywords: [
    "Parallax Technologies",
    "software development",
    "web applications",
    "AI",
    "cloud",
    "DevOps",
    "digital agency",
  ],
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | Digital Solutions`,
    description:
      "We build intelligent digital solutions—web, cloud, AI, and DevOps—for teams that need reliable delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Digital Solutions`,
    description:
      "Intelligent digital solutions for modern businesses—web, cloud, AI, and DevOps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pt-navy">{children}</body>
    </html>
  );
}
