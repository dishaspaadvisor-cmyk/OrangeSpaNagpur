import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import { SITE } from "../lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: SITE.title || "Orange Spa",
  description: "Orange Spa Nagpur - Relaxation & Wellness",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="LrGNuKxSj2_7Jl6gWSrQ362tS4ZYZU-j0nfPaanKaDk"
        />
      </head>

      <body className="min-h-full flex flex-col">
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18253370063"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18253370063');
          `}
        </Script>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}