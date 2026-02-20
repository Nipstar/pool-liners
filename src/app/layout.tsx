import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bespoke Pool Liners | Custom Pool Liner Installation Hampshire",
  description: "Expert bespoke pool liner installation across Hampshire & the South of England. Reinforced Renolit liners, 10-year watertight guarantee. Free quote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bespoke Pool Liners",
              "image": "https://bespoke-pool-liners.co.uk/images/hero.png",
              "url": "https://bespoke-pool-liners.co.uk",
              "telephone": "07442986034",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Romsey",
                "addressRegion": "Hampshire",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.9893,
                "longitude": -1.4981
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
