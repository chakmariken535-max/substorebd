import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://substorebd.com"), // canonical: non-WWW
  title: {
    default: "Buy Netflix & Game Credits | SubStoreBD",
    template: "%s | SubStoreBD",
  },
  description:
    "Bangladesh's #1 digital subscription store. Buy Netflix, YouTube, Game Credits & Social Coins at the cheapest BDT prices. Instant WhatsApp delivery.",
  keywords: [
    "netflix subscription bangladesh",
    "netflix bd price",
    "youtube premium bangladesh",
    "free fire diamond bd",
    "pubg uc bangladesh",
    "telegram premium bangladesh",
    "bigo diamond bangladesh",
    "tiktok coins bd",
    "streaming subscription bangladesh",
    "cheap netflix bangladesh",
    "chorki subscription",
    "SubStoreBD",
    "digital subscription bangladesh",
    "bkash netflix",
  ],
  authors: [{ name: "SubStoreBD", url: "https://substorebd.com" }],
  creator: "SubStoreBD",
  publisher: "SubStoreBD",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://substorebd.com/", // trailing slash = canonical root, avoids /index.html duplicate
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://substorebd.com",
    siteName: "SubStoreBD",
    title: "Buy Netflix & Game Credits | SubStoreBD",
    description:
      "Bangladesh's #1 digital subscription store. Cheapest Netflix, YouTube Premium, Free Fire, PUBG UC, TikTok Coins & more. BDT prices. Instant WhatsApp delivery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SubStoreBD — Premium Subscriptions in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Netflix & Game Credits | SubStoreBD",
    description:
      "Bangladesh's #1 digital subscription store. Cheapest BDT prices. Instant delivery via WhatsApp.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon-192.png",
    shortcut: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SubStoreBD",
  url: "https://substorebd.com",
  logo: "https://substorebd.com/icon-192.png",
  description:
    "SubStoreBD is Bangladesh's leading digital subscription marketplace offering Netflix, YouTube Premium, gaming credits, and social coins at the best BDT prices.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+8801604929025",
    contactType: "customer service",
    availableLanguage: ["Bengali", "English"],
    areaServed: "BD",
  },
  sameAs: ["https://www.facebook.com/100083546743661"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${beVietnamPro.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/icon-192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-on-surface bg-background">
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
