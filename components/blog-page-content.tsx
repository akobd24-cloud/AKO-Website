"use client"

import { Card, CardContent } from "@/components/ui/card"
import { getAllBlogPosts } from "@/lib/blog-data"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, BookOpen, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogPageContent() {
  const { language } = useLanguage()
  const posts = getAllBlogPosts()

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section with Pattern */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-background/80 backdrop-blur-sm border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === "bn" ? "আল-খিদমাহ ব্লগ" : "Al-Khidmah Blog"}
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-balance md:text-5xl lg:text-6xl font-serif text-foreground">
              {language === "bn" ? "জ্ঞান ও সেবার আলো" : "Light of Knowledge and Service"}
            </h1>
            <p className="mb-8 text-lg text-balance text-muted-foreground">
              {language === "bn"
                ? "ইসলামিক শিক্ষা, যুব উন্নয়ন এবং সামাজিক কল্যাণ সংক্রান্ত নিবন্ধ ও আপডেট"
                : "Articles and updates on Islamic education, youth development and social welfare"}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <div className="container px-4 mx-auto py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">
              {language === "bn" ? "কোন ব্লগ পোস্ট পাওয়া যায়নি" : "No blog posts found"}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer h-full flex flex-col">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title[language]}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-medium rounded bg-primary text-primary-foreground">
                        {post.category[language]}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title[language]}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {post.excerpt[language]}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span className="text-primary hover:underline flex items-center gap-1">
                        {language === "bn" ? "পড়ুন" : "Read More"}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
