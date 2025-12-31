import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DonationCard } from "@/components/donation-card"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"
import { DonationSection } from "@/components/donation-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { HomePageHandler } from "@/components/home-page-handler"
import { Suspense } from "react"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Suspense fallback={null}>
        <HomePageHandler />
      </Suspense>
      <HeroSection />
      <DonationCard />
      <AboutSection />
      <ProgramsSection />
      <EventsSection />
      <GallerySection />
      <DonationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
