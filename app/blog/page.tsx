import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPageContent } from "@/components/blog-page-content"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BlogPageContent />
      <Footer />
    </div>
  )
}
