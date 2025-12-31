import { BlogPostDetail } from "@/components/blog-post-detail"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <BlogPostDetail />
      <Footer />
    </div>
  )
}

