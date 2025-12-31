"use client"

import { Card, CardContent } from "@/components/ui/card"
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export function BlogPostDetail() {
  const { language } = useLanguage()
  const params = useParams()
  const slug = params?.slug as string

  // Get the current blog post
  const blogPost = getBlogPostBySlug(slug)
  
  // Get all posts for related posts (excluding current)
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .slice(0, 2)

  // If blog post not found, show error
  if (!blogPost) {
    return (
      <main className="pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {language === "bn" ? "ব্লগ পোস্ট পাওয়া যায়নি" : "Blog post not found"}
            </h1>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === "bn" ? "ব্লগে ফিরে যান" : "Back to Blog"}</span>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back to Blog Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "bn" ? "ব্লগে ফিরে যান" : "Back to Blog"}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 text-balance">
              {blogPost.title[language]}
            </h1>

            {/* Author and Date */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-border">
                <Image
                  src={blogPost.author.image}
                  alt={blogPost.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{blogPost.author.name}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden border border-border">
              <Image
                src={blogPost.featuredImage}
                alt={blogPost.title[language]}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed whitespace-pre-wrap">
                {blogPost.content[language] || (
                  <p className="text-muted-foreground italic">
                    {language === "bn" 
                      ? "কনটেন্ট যোগ করা হয়নি। lib/blog-data.ts ফাইলে কনটেন্ট যোগ করুন।"
                      : "Content not added. Please add content in lib/blog-data.ts file."}
                  </p>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar - Related Posts */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">
                {language === "bn" ? "সম্পর্কিত পোস্ট" : "Related Posts"}
              </h2>

              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-border p-0">
                      <div className="relative w-full h-48 overflow-hidden">
                        <Image
                          src={post.featuredImage}
                          alt={post.title[language]}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 text-xs font-medium rounded bg-primary text-primary-foreground">
                            {post.category[language]}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                          {post.title[language]}
                        </h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <span className="text-primary hover:underline">
                            {language === "bn" ? "বিস্তারিত →" : "Details →"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

