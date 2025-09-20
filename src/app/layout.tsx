import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import IonicScripts from "@/utils/IonicScripts";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { dentalClinicStructuredData, dentalServicesStructuredData, dentalSpecialtiesStructuredData } from "@/constants";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto/Roboto-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-roboto'
});

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "BiratCity Dental - Advanced Dental Care in Biratnagar, Nepal",
  description: "BiratCity Dental offers comprehensive dental care in Biratnagar, Nepal. Expert dentists providing treatments such as dental implants, braces, root canal therapy, cosmetic dentistry, teeth whitening, and preventive oral care in a modern, comfortable clinic.",
  keywords: [
    "BiratCity Dental",
    "dental clinic",
    "dentist Biratnagar",
    "dental implants Biratnagar",
    "braces Biratnagar",
    "cosmetic dentistry Biratnagar",
    "root canal Biratnagar",
    "teeth whitening Biratnagar",
    "orthodontics Biratnagar",
    "best dentist Biratnagar",
    "dental care Nepal",
    "oral surgery Biratnagar",
    "family dentist Biratnagar",
    "tooth extraction Biratnagar",
    "dental checkup Biratnagar",
    "gum treatment Biratnagar",
    "pediatric dentist Biratnagar",
    "affordable dental care Biratnagar",
    "emergency dental Biratnagar",
    "dental hygiene Biratnagar",
    "BiratCity Dental Nepal"
  ],
  authors: [{ name: "BiratCity Dental" }],
  creator: "BiratCity Dental",
  publisher: "BiratCity Dental",
  metadataBase: new URL("https://biratcitydental.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "BiratCity Dental - Advanced Dental Care in Biratnagar, Nepal",
    description: "Expert dentists in Biratnagar offering dental implants, braces, root canals, cosmetic dentistry, and preventive care in a modern, patient-friendly clinic.",
    type: "website",
    locale: "en_US",
    url: "https://biratcitydental.vercel.app/",
    siteName: "BiratCity Dental",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "BiratCity Dental Clinic Preview",
      }
    ],
  },
  category: "health",
  classification: "Dental Clinic",
  referrer: "origin-when-cross-origin",
  applicationName: "BiratCity Dental",
  generator: "Next.js",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <head>
          <script
            type="application/ld+json"
            // "dangerouslySetInnerHTML" is a way to inject raw HTML content into a React component.
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(dentalClinicStructuredData),  // "__html" property accepts raw HTML/text
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(dentalServicesStructuredData),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(dentalSpecialtiesStructuredData),
            }}
          />
          {/* Verification tags if needed */}
          <meta name="google-site-verification" content="PWqpvd61tdTZrjmxDtf0Ag7Yt3br6aIqDHIBth35n-w" />
          {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
        </head>
      </head>

      <body
        className={`${roboto.variable} ${poppins.variable}`}
        suppressHydrationWarning={true}
        id="top"
      >
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <IonicScripts />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
