"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()

  const content = {
    bn: {
      organization: "সংস্থা",
      description: "ইসলামিক মূল্যবোধ, যুব উন্নয়ন এবং সম্প্রদায় ক্ষমতায়নের মাধ্যমে মানবতার সেবায় নিবেদিত।",
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
        "Dedicated to serving humanity through Islamic values, youth development, and community empowerment.",
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
