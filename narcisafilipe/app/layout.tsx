
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Narcisa Filipe – Terapeuta Capilar",
  description: "Especialista em saúde capilar, tratamentos personalizados e diagnóstico profissional.",
  keywords: ["terapeuta capilar", "saúde capilar", "queda de cabelo", "tratamento capilar Luanda"],
  openGraph: {
    title: "Narcisa Filipe – Terapeuta Capilar",
    description: "Transformando vidas através da saúde capilar.",
    url: "https://narcisafilipe.com",
    siteName: "Narcisa Filipe",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
