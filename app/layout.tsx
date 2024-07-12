import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({ subsets: ["latin"], weight: ['400', '600'] });

const clashDisplay = localFont({
  src: [
    {
      path: 'fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
})

const gulfDisplay = localFont({
  src: [
    {
      path: 'fonts/Gulfs-Display-Normal.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Gulfs-Display-Normal-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-gulf-display',
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
      <body className={`${ibmPlex.className} ${clashDisplay.variable} ${gulfDisplay.variable} text-beige relative`}>{children}</body>
    </html>
  );
}