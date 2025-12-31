import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TermsPageContent } from "@/components/terms-page-content"

export const metadata = {
  title: "Terms and Conditions - Al-Khidmah Organization",
  description: "Terms and Conditions for Al-Khidmah Organization",
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <TermsPageContent />
      <Footer />
    </>
  )
}
