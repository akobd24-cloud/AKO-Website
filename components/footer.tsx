"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  const content = {
    bn: {
      organization: "সংস্থা",
      description: "\'আল-খিদমাহ অর্গানাইজেশন\' দ্বীন ইসলাম, মুসলিম কওম ও বাংলার যমীনের খিদমাহ (সেবা) এর জন্য এবং ইসলামী আদর্শ সমাজ বিনির্মাণে নিবেদিত একটি ধর্মীয় সামাজিক সংগঠন",
      quickLinks: "দ্রুত লিংক",
      aboutUs: "আমাদের সম্পর্কে",
      programs: "আমাদের কর্মসূচি",
      events: "ইভেন্ট",
      gallery: "গ্যালারি",
      blog: "ব্লগ",
      contact: "যোগাযোগ",
      getInvolved: "যুক্ত হন",
      volunteer: "স্বেচ্ছাসেবক",
      donate: "দান করুন",
      membership: "সদস্যপদ",
      partner: "আমাদের সাথে অংশীদার",
      legal: "আইনি",
      terms: "শর্তাবলী",
      privacy: "গোপনীয়তা নীতি",
      stayUpdated: "আপডেট থাকুন",
      newsletter: "আপডেট এবং ইভেন্টের জন্য আমাদের নিউজলেটার সাবস্ক্রাইব করুন।",
      emailPlaceholder: "আপনার ইমেইল",
      join: "যোগদান",
      rights: "সমস্ত অধিকার সংরক্ষিত।",
    },
    en: {
      organization: "Organization",
      description:
        "Al-Khidmah Organization is a religious social organization dedicated to the service of Islam, the Muslim community, and the land of Bengal, and to the building of an ideal Islamic society.",
      quickLinks: "Quick Links",
      aboutUs: "About Us",
      programs: "Our Programs",
      events: "Events",
      gallery: "Gallery",
      blog: "Blog",
      contact: "Contact",
      getInvolved: "Get Involved",
      volunteer: "Volunteer",
      donate: "Donate",
      membership: "Membership",
      partner: "Partner With Us",
      legal: "Legal",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      stayUpdated: "Stay Updated",
      newsletter: "Subscribe to our newsletter for updates and events.",
      emailPlaceholder: "Your email",
      join: "Join",
      rights: "All rights reserved.",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/al-khidmah-logo.png"
                alt="Al-Khidmah"
                width={120}
                height={60}
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">{t.description}</p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/ako.kst.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@AlKhidmahOrganization"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/activities" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.programs}
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved & Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.getInvolved}</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.volunteer}
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.donate}
                </a>
              </li>
              <li>
                <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.membership}
                </a>
              </li>
            </ul>
            <h4 className="font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="opacity-90 hover:opacity-100 transition-opacity">
                  {t.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{t.stayUpdated}</h4>
            <p className="text-sm opacity-90 mb-4">{t.newsletter}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-1 px-3 py-2 rounded-md text-sm bg-primary-foreground/10 border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground/40"
              />
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/90 transition-colors">
                {t.join}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-90">{`© ${currentYear} আল-খিদমাহ সংস্থা। ${t.rights}`}</p>
        </div>
      </div>
    </footer>
  )
}
