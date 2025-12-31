import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/contact-page-content"

export const metadata = {
  title: "যোগাযোগ করুন | আল-খিদমাহ অরগানাইজেশন",
  description: "আল-খিদমাহ অরগানাইজেশনের সাথে যোগাযোগ করুন। আমরা আপনার সেবায় প্রস্তুত।",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
