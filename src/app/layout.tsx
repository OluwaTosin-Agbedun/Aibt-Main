import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIBT — Athena Institute of Business & Technology",
  description:
    "AIBT delivers certificate courses, executive education and institutional training for professionals, public servants, organisations and emerging leaders across Nigeria and Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col bg-white font-sans text-charcoal antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
