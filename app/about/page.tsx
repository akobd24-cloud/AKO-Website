import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/about-page-content"

export const metadata = {
  title: "আমাদের সম্পর্কে | আল-খিদমাহ অরগানাইজেশন",
  description: "আল-খিদমাহ অরগানাইজেশন সম্পর্কে জানুন। আমাদের লক্ষ্য, দৃষ্টিভঙ্গি এবং ইসলামিক মূল্যবোধের মাধ্যমে সমাজসেবার প্রতিশ্রুতি।",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutPageContent />
      <Footer />
    </div>
  )
}
