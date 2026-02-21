import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyRealProduct | Build an End-to-end AI Product in 4 Weeks",
  description: "Build Products, Not Just Projects. Join our 4-week cohort-based program and learn AI by building and shipping real products with expert mentorship.",
  keywords: ["AI", "product development", "cohort", "workshop", "AI engineering", "startup"],
  authors: [{ name: "Hari Prasad" }],
  openGraph: {
    title: "MyRealProduct | Build an AI Product in 4 Weeks",
    description: "Build Products, Not Just Projects. Learn AI by building real products.",
    type: "website",
    locale: "en_US",
    siteName: "MyRealProduct",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyRealProduct | Build an AI Product in 4 Weeks",
    description: "Build Products, Not Just Projects. Learn AI by building real products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
