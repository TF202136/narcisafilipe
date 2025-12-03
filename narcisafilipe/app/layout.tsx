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
  metadataBase: new URL("https://narcisafilipe.com"),

  title: {
    default: "Narcisa Filipe – Certified Scalp & Hair Therapy Specialist",
    template: "%s | Narcisa Filipe",
  },

  description:
    "Professional scalp therapy, hair loss treatment, dandruff control, and personalized hair care plans by certified specialist Narcisa Filipe. Helping clients restore hair health with science-based methods.",

  keywords: [
    "scalp therapist",
    "hair therapist",
    "hair loss treatment Angola",
    "scalp treatment Luanda",
    "hair care specialist",
    "dandruff treatment",
    "alopecia treatment",
    "itchy scalp treatment",
    "dry scalp specialist",
    "hair growth therapy",
    "trichology Angola",
    "capillary therapy",
    "professional hair treatment",
  ],

  openGraph: {
    title: "Narcisa Filipe – Expert Scalp Therapy & Hair Loss Treatment",
    description:
      "Restore your hair health with professional scalp therapy, advanced diagnostics and personalized treatment plans.",
    url: "https://narcisafilipe.com",
    siteName: "Narcisa Filipe – Scalp Therapist",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Narcisa Filipe – Scalp Therapist",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Narcisa Filipe – Scalp Therapy & Hair Loss Treatment Specialist",
    description:
      "Certified expert in scalp treatment, hair loss solutions and personalized hair health care.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://narcisafilipe.com",
  },

  authors: [
    {
      name: "Narcisa Filipe",
      url: "https://narcisafilipe.com",
    },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        {/* LocalBusiness Schema — Google SEO Local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Narcisa Filipe – Scalp & Hair Therapy",
              "image": "https://narcisafilipe.com/og-image.jpg",
              "url": "https://narcisafilipe.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit 8a Berking Avenue",
                "addressLocality": "Leeds",
                "postalCode": "LS9",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.8067,
                "longitude": -1.5037
              },
              "description": "Professional scalp therapy, hair loss treatment, dandruff control and protective braids in Leeds.",
              "priceRange": "$$"
            }
            `,
          }}
        />

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

