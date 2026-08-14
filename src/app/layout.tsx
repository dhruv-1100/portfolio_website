import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { EMAIL, GITHUB, LINKEDIN, NAME, SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const TITLE = `${NAME} — Software Engineer & MS CS @ Stony Brook`;
const DESCRIPTION =
  "Portfolio of Dhruv Patel — software engineer and MS Computer Science candidate at Stony Brook University, working across distributed systems, applied machine learning, and high-performance computing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Dhruv Patel",
    "software engineer",
    "distributed systems",
    "machine learning",
    "Stony Brook University",
    "portfolio",
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    url: SITE_URL,
    siteName: `${NAME} — Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${NAME} — Software Engineer & MS CS @ Stony Brook`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  jobTitle: "Software Engineer",
  description: DESCRIPTION,
  sameAs: [GITHUB, LINKEDIN],
  worksFor: {
    "@type": "Organization",
    name: "Aaron Technologies Inc.",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Stony Brook University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Dhirubhai Ambani University",
    },
  ],
  knowsAbout: [
    "Distributed Systems",
    "Machine Learning",
    "High-Performance Computing",
    "Software Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Scroll-reveal is progressive enhancement: without JS the content
            must not stay stuck at opacity 0. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.name-text{transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
