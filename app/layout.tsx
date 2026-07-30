import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maark.ru"),
  title: {
    default: "MAARK — AI-разработчик и DevOps",
    template: "%s — MAARK",
  },
  description:
    "Марк Пивоваров — AI-разработчик, DevOps и product engineer. Создаю веб-продукты целиком: от архитектуры и кода до production-сервера.",
  keywords: [
    "MAARK",
    "Марк Пивоваров",
    "AI разработчик",
    "DevOps",
    "Python",
    "React",
    "разработка веб-продуктов",
  ],
  authors: [{ name: "Mark Pivovarov", url: "https://maark.ru" }],
  creator: "Mark Pivovarov",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "128x128" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MAARK",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    title: "MAARK — AI developer + DevOps",
    description:
      "I build complete products: architecture, code, infrastructure, and production.",
    images: [
      {
        url: "/og-telegram-v2.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "MAARK — Mark Pivovarov, AI engineer and DevOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAARK — AI developer + DevOps",
    description:
      "I build complete products: architecture, code, infrastructure, and production.",
    images: [
      {
        url: "/og-telegram-v2.jpg",
        alt: "MAARK — Mark Pivovarov, AI engineer and DevOps",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta
          property="og:image:secure_url"
          content="https://maark.ru/og-telegram-v2.jpg"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
