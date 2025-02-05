import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const NotoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ブラウザメモ帳",
  description: "ブラウザで動作する最も軽快なメモ帳アプリです。（当社比）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={NotoSansJP.className}
      >
        {children}
      </body>
    </html>
  );
}
