import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/shahadathkx"),
  title: {
    default: "Mr Khan | Md Shahadat Hossain Khan — CSE Engineer & Full Stack Developer",
    template: "%s | Mr Khan",
  },
  description:
    "Portfolio of Md Shahadat Hossain Khan — Computer Science Engineer & Full Stack Web Developer specializing in Next.js, React, TypeScript, Node.js, and MongoDB. Actively seeking software engineering & web development internships.",
  applicationName: "Shahadat Khan Portfolio",
  authors: [{ name: "Md Shahadat Hossain Khan", url: "https://github.com/shahadathkx" }],
  generator: "Next.js",
  keywords: [
    "Md Shahadat Hossain Khan",
    "shahadathkx",
    "Full Stack Developer",
    "Computer Science Engineer",
    "CSE Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Software Engineering Internship",
    "Web Developer Portfolio",
    "MERN Stack Developer",
    "Dhaka Bangladesh Developer",
  ],
  creator: "Md Shahadat Hossain Khan",
  publisher: "Md Shahadat Hossain Khan",
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
  openGraph: {
    title: "Md Shahadat Hossain Khan | CSE Engineer & Full Stack Web Developer",
    description:
      "Explore full-stack web applications, open-source projects, and technical skills built with Next.js, React, TypeScript, and Node.js.",
    url: "https://github.com/shahadathkx",
    siteName: "Md Shahadat Hossain Khan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Md Shahadat Hossain Khan - CSE Engineer & Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Shahadat Hossain Khan | CSE Engineer & Full Stack Developer",
    description:
      "Computer Science Engineer & Full Stack Web Developer crafting high-performance web applications with Next.js & MERN.",
    images: ["/profile.jpg"],
    creator: "@shahadathkx",
  },
  alternates: {
    canonical: "https://github.com/shahadathkx",
  },
  icons: {
    icon: [{ url: "/profile.jpg", type: "image/jpeg" }],
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md Shahadat Hossain Khan",
    alternateName: "shahadathkx",
    jobTitle: "Computer Science Engineer & Full Stack Web Developer",
    url: "https://github.com/shahadathkx",
    image: "/profile.jpg",
    sameAs: [
      "https://github.com/shahadathkx",
      "https://linkedin.com/in/shahadathkx",
      "mailto:shahadathkx@gmail.com",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Data Structures and Algorithms",
      "Tailwind CSS",
      "REST APIs",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300`}
      >
        {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
