"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Languages, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const handleDonateClick = () => {
    if (pathname === '/') {
      // If on homepage, scroll to donation section
      const donationForm = document.getElementById('donation-form')
      if (donationForm) {
        donationForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = '/#donation-form'
    }
  }

  const navLinks = [
    { name: t("nav.home"), href: "/#home", isHash: true },
    { name: t("nav.about"), href: "/about", isHash: false },
    { name: language === "bn" ? "কার্যক্রম" : "Activities", href: "/activities", isHash: false },
    { name: t("nav.gallery"), href: "/#gallery", isHash: true },
    { name: language === "bn" ? "ব্লগ" : "Blog", href: "/blog", isHash: false },
    { name: t("nav.contact"), href: "/contact", isHash: false },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/al-khidmah-logo.png"
              alt="Al-Khidmah Organization"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
              className="gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "bn" ? "EN" : "বাং"}
            </Button>
            <Button 
              onClick={handleDonateClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t("nav.donate")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <Button
                variant="outline"
                onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
                className="gap-2 w-full"
              >
                <Languages className="w-4 h-4" />
                {language === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
              </Button>
              <Button 
                onClick={() => {
                  handleDonateClick()
                  setIsMenuOpen(false)
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                {t("nav.donate")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
