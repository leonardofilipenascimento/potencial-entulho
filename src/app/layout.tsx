import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteInfo } from "@/lib/site-data";
import { getLocalBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd/JsonLd";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const title = "Locação de Caçamba de Entulho em Salvador | Potencial Entulho";

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: title,
    template: `%s | ${siteInfo.name}`,
  },
  description: siteInfo.description,
  keywords: [
    "aluguel de caçamba em Salvador",
    "caçamba de entulho Salvador",
    "locação de caçamba estacionária",
    "caçamba de entulho Lauro de Freitas",
    "remoção de entulho Salvador",
    "empresa de caçamba Salvador",
  ],
  authors: [{ name: siteInfo.name }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteInfo.url,
    siteName: siteInfo.name,
    title,
    description: siteInfo.description,
    images: [
      {
        url: siteInfo.ogImage,
        width: 1200,
        height: 900,
        alt: "Caçamba estacionária da Potencial Entulho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteInfo.description,
    images: [siteInfo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <JsonLd data={getLocalBusinessSchema()} />
        {children}
      </body>
      <GoogleAnalytics gaId="G-DL3B9QNTYW" />
    </html>
  );
}
