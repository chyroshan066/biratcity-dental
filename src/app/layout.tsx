import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import IonicScripts from "@/utils/IonicScripts";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";

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
  title: "Basuki Dental - Advanced Dental Care in Biratnagar, Nepal",
  description: "Basuki Dental offers comprehensive dental care in Biratnagar, Nepal. Expert dentists providing treatments such as dental implants, braces, root canal therapy, cosmetic dentistry, teeth whitening, and preventive oral care in a modern, comfortable clinic.",
  keywords: [
    "Basuki Dental",
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
    "Basuki Dental Nepal"
  ],
  authors: [{ name: "Basuki Dental" }],
  creator: "Basuki Dental",
  publisher: "Basuki Dental",
  // metadataBase: new URL("https://www.rathidental.com/"),
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
    title: "Basuki Dental - Advanced Dental Care in Biratnagar, Nepal",
    description: "Expert dentists in Biratnagar offering dental implants, braces, root canals, cosmetic dentistry, and preventive care in a modern, patient-friendly clinic.",
    type: "website",
    locale: "en_US",
    // url: "https://www.rathidental.com/",
    siteName: "Basuki Dental",
    // images: [
    //   {
    //     url: "/images/preview.webp",
    //     width: 1200,
    //     height: 630,
    //     alt: "Basuki Dental Clinic Preview",
    //   }
    // ],
  },
  category: "health",
  classification: "Dental Clinic",
  referrer: "origin-when-cross-origin",
  applicationName: "Basuki Dental",
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
      <body
        className={`${roboto.variable} ${poppins.variable}`}
        suppressHydrationWarning={true}
        id="top"
      >
        {children}
        <IonicScripts />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
