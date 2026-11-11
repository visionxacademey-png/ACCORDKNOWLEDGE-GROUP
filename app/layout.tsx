import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#0B1A2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://accordknowledgegroup.com"),
  title: {
    default: "Accord Knowledge Group | Tax & Management Consultants | Payangadi",
    template: "%s | Accord Knowledge Group",
  },
  description:
    "Accord Knowledge Group provides accounting, GST, income tax, TDS, business formation, internal audit and management consultancy services in Payangadi, Kerala.",
  keywords: [
    "Tax consultants in Payangadi",
    "Accounting services in Payangadi",
    "GST consultants in Payangadi",
    "Income tax filing Payangadi",
    "Tax consultants in Kannur",
    "Accounting consultants in Kannur",
    "Company registration Payangadi",
    "LLP formation Payangadi",
    "TDS filing Kannur",
    "Project report for bank finance Payangadi",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Accord Knowledge Group | Tax & Management Consultants",
    description:
      "One stop solutions to all your Financial Accounting & Taxation Needs in Payangadi, Kerala.",
    url: "https://accordknowledgegroup.com",
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo/accord-logo.svg",
        width: 400,
        height: 96,
        alt: "Accord Knowledge Group - Tax & Management Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accord Knowledge Group | Tax & Management Consultants",
    description:
      "One stop solutions to all your Financial Accounting & Taxation Needs in Payangadi, Kerala.",
    images: ["/logo/accord-logo.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: COMPANY.name,
    alternateName: "Accord Knowledge Group",
    description:
      "Professional accounting, taxation, GST, TDS, company formation, and management consultancy firm located in Eripuram, Payangadi, Kerala.",
    telephone: ["+91-8547045170", "+91-9446489607", "0497-2985517"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Writer's Building, Near Police Station",
      addressLocality: "Eripuram, Payangadi",
      addressRegion: "Kerala",
      postalCode: "670303",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.0152",
      longitude: "75.2758",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "17:30",
      },
    ],
    priceRange: "$$",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Payangadi" },
      { "@type": "AdministrativeArea", name: "Kannur" },
      { "@type": "AdministrativeArea", name: "Kerala" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Financial and Taxation Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounts" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Registration and Returns" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Income Tax Return" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "TDS Filing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Signature" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Report for Bank Finance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Partnership Deed" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Company & LLP Formation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Internal Audit & Consultancy Services" } },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans bg-slate-50 text-slate-900">
        {/* Skip to main content for screen readers and keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy-900 focus:text-white focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

