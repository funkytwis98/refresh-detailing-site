import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Refresh Detailing Service | Mobile Auto Detailing in Chattanooga, TN",
  description:
    "Premium mobile detailing for autos, RVs, and boats in Chattanooga, TN and surrounding areas. We come to you. Book your detail today.",
  keywords: [
    "mobile detailing",
    "auto detailing",
    "Chattanooga",
    "car wash",
    "RV detailing",
    "boat detailing",
  ],
  openGraph: {
    title: "Refresh Detailing Service",
    description:
      "Premium mobile detailing for autos, RVs, and boats in Chattanooga, TN.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ background: "#0a0a0a", backgroundImage: "none" }}>{children}</body>
    </html>
  );
}
