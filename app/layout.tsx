import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins, Lexend, Playfair_Display } from 'next/font/google'

const poppins = Poppins({subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins"})
const lexend = Lexend({subsets: ["latin"], weight: "400", variable: "--font-lexend"})
const playfair = Playfair_Display({subsets: ["latin"], weight: "600", variable: "--font-playfair"})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const aammufk = localFont({
  src: "./fonts/aammufkF.ttf",
  variable: "--font-aammufk",
})

export const metadata: Metadata = {
  title: "Prototype Launching",
  description: "Digital Preservation System - Prototype Launching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lexend.variable} ${playfair.variable} ${aammufk.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
