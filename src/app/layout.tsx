import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MARUYAMA - Cool Life, Better Work",
  description: "まるやまの公式サイト兼ブログ。Cool Life, Better Work - クールで洗練されたライフスタイル、自己成長、効率的な生き方の最適化を発信します。",
  keywords: "ブログ,ライフハック,キャリア,自己成長,海外生活,クリエイティブ",
  authors: [{ name: "Maruyama" }],
  metadataBase: new URL('https://maruyama.net'),
  openGraph: {
    title: "MARUYAMA - Cool Life, Better Work",
    description: "クールで洗練されたライフスタイル、自己成長、効率的な生き方の最適化を発信。",
    url: "https://maruyama.net",
    siteName: "MARUYAMA",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARUYAMA - Cool Life, Better Work",
    description: "クールで洗練されたライフスタイル、自己成長、効率的な生き方の最適化を発信。",
    site: "@maruyama",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${playfairDisplay.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
