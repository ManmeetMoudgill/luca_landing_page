import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/index";
import Header from "@/components/shared/header/index";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Cupellaro - Top-Rated MetaTrader 4/5 (MQL) Expert Advisors",
  description: "Top-Rated MetaTrader 4/5 (MQL) Expert Advisors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image" href="/assets/images/icon.jpg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
