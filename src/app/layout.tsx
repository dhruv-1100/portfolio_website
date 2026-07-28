import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Dhruv Patel — CS Graduate Student & ML Researcher",
  description:
    "Personal portfolio of Dhruv Patel, MS Computer Science student at Stony Brook University. Specializing in Software Engineering, Machine Learning, and High-Performance Computing.",
  openGraph: {
    title: "Dhruv Patel — CS Graduate Student & ML Researcher",
    description:
      "Personal portfolio of Dhruv Patel, MS Computer Science student at Stony Brook University.",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
