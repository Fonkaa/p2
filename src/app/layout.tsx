import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioContext";
import Navbar from "@/components/Navbar";
import AdminModal from "@/components/AdminModal";
import AIAssistant from "@/components/AIAssistant";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://abdulbasitylkal.com");

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Abdulbasit Ylkal Abate | Full-Stack Software Engineer & Systems Architect",
    template: "%s | Abdulbasit Ylkal",
  },
  description:
    "Official digital portfolio of Abdulbasit Ylkal Abate. Specializing in resilient software architecture, high-throughput microservices, Next.js, FastAPI, PostgreSQL, and scalable distributed systems.",
  verification: {
    google: "R1TXvgqXYAIoPTKxNQkkeTNA3uT_qxwaVXIczd5UvCc",
  },
  keywords: [
    "Abdulbasit Ylkal",
    "Abdulbasit Ylkal Abate",
    "Fonkaa",
    "Full-Stack Software Engineer",
    "Systems Architect",
    "Software Engineer Ethiopia",
    "FastAPI",
    "Next.js",
    "PostgreSQL",
    "Smart Internship & Job Matching System",
    "HomeRentalPro",
  ],
  authors: [{ name: "Abdulbasit Ylkal Abate", url: SITE_URL }],
  creator: "Abdulbasit Ylkal Abate",
  publisher: "Abdulbasit Ylkal Abate",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    firstName: "Abdulbasit",
    lastName: "Ylkal Abate",
    username: "Fonkaa",
    gender: "male",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Abdulbasit Ylkal | Engineering Atelier",
    title: "Abdulbasit Ylkal Abate | Full-Stack Software Engineer & Systems Architect",
    description:
      "Interactive 360° engineering showcase, production deployments, and systems architecture by Abdulbasit Ylkal Abate.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Abdulbasit Ylkal Abate - Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulbasit Ylkal Abate | Systems Architect",
    description:
      "Full-Stack Software Engineer specializing in scalable backends and reactive web platforms.",
    images: [`${SITE_URL}/og-image.png`],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD graph for Google Knowledge Panels & Rich Results
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdulbasit Ylkal Abate",
    alternateName: ["Abdulbasit Ylkal", "Fonkaa"],
    url: SITE_URL,
    jobTitle: "Full-Stack Software Engineer & Systems Architect",
    email: "mailto:fikiylkal@gmail.com",
    telephone: "+251900000000",
    description:
      "Specializing in high-throughput backend services, modern reactive web interfaces, database optimization, and automated machine learning scoring microservices.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    sameAs: [
      "https://github.com/Fonkaa",
      "https://t.me/Commecii_commeca",
      "https://instagram.com/Fonkaa",
    ],
    knowsAbout: [
      "Software Architecture",
      "Distributed Systems",
      "FastAPI",
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Docker",
    ],
  };

  return (
    <html lang="en" data-theme="obsidian-gold" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="R1TXvgqXYAIoPTKxNQkkeTNA3uT_qxwaVXIczd5UvCc"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased min-h-screen selection:bg-[var(--color-primary)] selection:text-[var(--color-bg)]"
      >
        <PortfolioProvider>
          <Navbar />
          <main>{children}</main>
          <AdminModal />
          <AIAssistant />
        </PortfolioProvider>
      </body>
    </html>
  );
}