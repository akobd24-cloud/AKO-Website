import { JoinFormProvider } from "@/lib/join-form-context"
import { LanguageProvider } from "@/lib/language-context"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Hind_Siliguri, Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bangla",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://al-khidmah.org"),
  title: {
    default: "Al-Khidmah Organization | Serving Humanity Through Islamic Values",
    template: "%s | Al-Khidmah Organization",
  },
  description:
    "Al-Khidmah Organization is a religious and social organization dedicated to the service of Deen Islam, the Muslim community, and the land of Bengal. Founded in 2018, we work towards building an ideal Islamic society through education, youth development, social welfare, and community service based on Quran and Sunnah.",
  keywords: [
    "Al-Khidmah",
    "Al-Khidmah Organization",
    "Islamic Organization",
    "Islamic Education",
    "Community Service",
    "Youth Development",
    "Religious Organization",
    "Bangladesh",
    "Kushtia",
    "Islamic Society",
    "Quran and Sunnah",
    "Social Welfare",
    "Muslim Community",
    "Islamic Da'wah",
    "Youth Organization",
    "Charity",
    "Social Reform",
  ],
  authors: [{ name: "Al-Khidmah Organization" }],
  creator: "Al-Khidmah Organization",
  publisher: "Al-Khidmah Organization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://al-khidmah.org",
    siteName: "Al-Khidmah Organization",
    title: "Al-Khidmah Organization | Serving Humanity Through Islamic Values",
    description:
      "A religious and social organization dedicated to building an ideal Islamic society through education, youth development, and community service. Founded in 2018 in Kushtia, Bangladesh, following the path of Quran and Sunnah.",
    images: [
      {
        url: "https://al-khidmah.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al-Khidmah Organization - Serving Humanity Through Islamic Values",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Khidmah Organization | Serving Humanity Through Islamic Values",
    description:
      "A religious and social organization dedicated to building an ideal Islamic society through education, youth development, and community service based on Quran and Sunnah.",
    images: ["https://al-khidmah.org/og-image.png"],
    creator: "@alkhidmah",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://al-khidmah.org",
    languages: {
      "en-US": "https://al-khidmah.org",
      "bn-BD": "https://al-khidmah.org",
    },
  },
  category: "Social Organization",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/png" },
      { url: "/favicon.svg", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/al-khidmah-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body className={`${inter.variable} ${hindSiliguri.variable} font-bangla antialiased`}>
        <LanguageProvider>
          <JoinFormProvider>{children}</JoinFormProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
