import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ActivitiesPageContent } from "@/components/activities-page-content"

export const metadata = {
  title: "কার্যক্রম | আল-খিদমাহ অরগানাইজেশন",
  description: "আল-খিদমাহ অরগানাইজেশনের চলমান ও আসন্ন কার্যক্রম। ইসলামিক শিক্ষা, যুব উন্নয়ন এবং সামাজিক সেবা।",
}

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ActivitiesPageContent />
      <Footer />
    </div>
  )
}
