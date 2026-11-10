import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vavaka Ratafika — Shopify Designer & Assistant virtuel",
  description:
    "Portfolio de Vavaka Ratafika : création de boutiques Shopify, assistance digitale et développement web à Antsirabe, Madagascar.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
