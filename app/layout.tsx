import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/JsonLTD";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://soumyadip.ucoder.in/"),
  title: {
    default: "Soumyadip Maity | Full Stack Developer & AI Enthusiast",
    template: "%s | Soumyadip Maity",
  },

  description:
    "Soumyadip Maity - Full Stack Developer crafting scalable web applications with MERN Stack, Next.js & AI. Available for freelance projects.",

  keywords: [
    "Soumyadip Maity",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer Kolkata",
    "Full Stack Developer India",
    "Developer West Bengal",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Typescript Developer",
    "Freelance Web Developer",
    "AI Solutions Developer",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Soumyadip Maity",
      url: "https://soumyadip.ucoder.in/",
    },
  ],
  creator: "Soumyadip Maity",
  publisher: "Soumyadip Maity",

  category: "Technology",
  classification: "Portfolio Website",

  verification: {
    google: "HYXriKdykPP32qy8gCqvx2KmooO1bm2eJusZn9YilmM",
    other: {
      "msvalidate.01": ["63ED4C20ECAC42E69729460CD00EBD3F"],
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: { canonical: "https://soumyadip.ucoder.in/" },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Soumyadip Maity | Full Stack Developer",
    description:
      "Crafting scalable web applications with MERN Stack, Next.js & Typescript.",
    url: "https://soumyadip.ucoder.in/",
    siteName: "Soumyadip Maity Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dkqi9h8yw/image/upload/v1768277924/qcywx8qervf0iirwbmvu.png",
        width: 1200,
        height: 630,
        alt: "Soumyadip Maity - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Soumyadip Maity | Full Stack Developer",
    description:
      "Crafting scalable web apps with MERN Stack, Next.js & Typescript. View my projects →",
    images: [
      "https://res.cloudinary.com/dkqi9h8yw/image/upload/v1768277924/qcywx8qervf0iirwbmvu.png",
    ],
    creator: "@soumyadip2maity",
    site: "@soumyadip2maity",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.className} antialiased selection:bg-purple-500/30 selection:text-purple-600 dark:selection:text-purple-400`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
