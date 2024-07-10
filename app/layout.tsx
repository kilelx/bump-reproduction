import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ['400', '600'] });
const clashDisplay = localFont({
  src: 'fonts/ClashDisplay-Medium.woff2',
  variable: '--font-clash-display',
})

export const metadata: Metadata = {
  title: "bump.",
  description: "bump. propose une alternative ambitieuse dans le monde des agences d'artistes et de marketing digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${ibmPlex.className} ${clashDisplay.variable} text-beige`}>{children}</body>
    </html>
  );
}