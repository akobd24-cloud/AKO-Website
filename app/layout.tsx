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
  title: "Al-Khidmah Organization",
  description:
    "A religious, youth, and community organization dedicated to serving humanity through Islamic values and social responsibility.",
  keywords: [
    "Al-Khidmah",
    "Islamic Organization",
    "Community Service",
    "Youth Organization",
    "Religious Organization",
    "Bangladesh",
  ],
  authors: [{ name: "Al-Khidmah Organization" }],
  creator: "Al-Khidmah Organization",
  publisher: "Al-Khidmah Organization",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://al-khidmah.org",
    siteName: "Al-Khidmah Organization",
    title: "Al-Khidmah Organization",
    description: "A religious, youth, and community organization dedicated to serving humanity through Islamic values.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Al-Khidmah Organization Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Khidmah Organization",
    description: "A religious, youth, and community organization dedicated to serving humanity.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
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
