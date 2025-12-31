"use client"

import { useLanguage } from "@/lib/language-context"
import { FileText, Scale, Shield, UserCheck, AlertCircle, BookOpen } from "lucide-react"

export function TermsPageContent() {
  const { language } = useLanguage()

  const content = {
    bn: {
      title: "শর্তাবলী",
      subtitle: "আল-খিদমাহ অরগানাইজেশন ব্যবহারের শর্তাবলী",
      lastUpdated: "সর্বশেষ আপডেট: জানুয়ারি ২০২৫",
      acceptance: {
        title: "১. শর্তাবলী গ্রহণ",
        description:
          "আল-খিদমাহ অরগানাইজেশনের ওয়েবসাইট ব্যবহার করে, আপনি এই শর্তাবলী মেনে নিতে সম্মত হচ্ছেন। আপনি যদি এই শর্তাবলীর সাথে একমত না হন, অনুগ্রহ করে এই ওয়েবসাইট ব্যবহার করবেন না।",
      },
      usage: {
        title: "২. ওয়েবসাইট ব্যবহার",
        points: [
          "আপনি এই ওয়েবসাইট শুধুমাত্র বৈধ উদ্দেশ্যে ব্যবহার করতে পারবেন",
          "কোনো অবৈধ কার্যকলাপের জন্য এই ওয়েবসাইট ব্যবহার করা যাবে না",
          "আপনি অন্য ব্যবহারকারীদের ক্ষতি করতে পারে এমন কোনো কন্টেন্ট পোস্ট করতে পারবেন না",
          "আপনি ওয়েবসাইটের নিরাপত্তা বা কার্যকারিতা ব্যাহত করতে পারবেন না",
        ],
      },
      donations: {
        title: "৩. দান ও অনুদান",
        points: [
          "সমস্ত দান স্বেচ্ছামূলক এবং ফেরতযোগ্য নয়",
          "দানকৃত অর্থ সংস্থার কার্যক্রমে স্বচ্ছভাবে ব্যয় করা হবে",
          "দাতারা তাদের দানের রসিদ পাবেন",
          "যাকাতের অর্থ শরিয়া অনুযায়ী বিতরণ করা হবে",
        ],
      },
      privacy: {
        title: "৪. গোপনীয়তা",
        points: [
          "আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ",
          "আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হবে না",
          "আমরা আপনার অনুমতি ছাড়া আপনাকে মার্কেটিং ইমেইল পাঠাব না",
          "আপনি যেকোনো সময় আপনার তথ্য মুছে ফেলার অনুরোধ করতে পারেন",
        ],
      },
      intellectual: {
        title: "৫. বুদ্ধিবৃত্তিক সম্পত্তি",
        points: [
          "এই ওয়েবসাইটের সমস্ত কন্টেন্ট আল-খিদমাহ অরগানাইজেশনের সম্পত্তি",
          "আপনি আমাদের লিখিত অনুমতি ছাড়া কোনো কন্টেন্ট ব্যবহার করতে পারবেন না",
          "আমাদের লোগো এবং ট্রেডমার্ক সুরক্ষিত",
          "শিক্ষামূলক উদ্দেশ্যে কন্টেন্ট শেয়ার করার সময় উৎস উল্লেখ করতে হবে",
        ],
      },
      liability: {
        title: "৬. দায়বদ্ধতার সীমাবদ্ধতা",
        points: [
          "ওয়েবসাইটের তথ্য 'যেমন আছে' ভিত্তিতে প্রদান করা হয়",
          "আমরা ওয়েবসাইটের ত্রুটি বা বাদ পড়ার জন্য দায়ী নই",
          "আমরা তৃতীয় পক্ষের ওয়েবসাইটের জন্য দায়ী নই",
          "আমরা যেকোনো সময় ওয়েবসাইট পরিবর্তন বা বন্ধ করার অধিকার সংরক্ষণ করি",
        ],
      },
      changes: {
        title: "৭. শর্তাবলী পরিবর্তন",
        description:
          "আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি। পরিবর্তনগুলি এই পৃষ্ঠায় পোস্ট করা হবে এবং তাৎক্ষণিকভাবে কার্যকর হবে। আপনার দায়িত্ব নিয়মিত এই শর্তাবলী পর্যালোচনা করা।",
      },
      contact: {
        title: "৮. যোগাযোগ",
        description: "এই শর্তাবলী সম্পর্কে আপনার যদি কোনো প্রশ্ন থাকে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:",
        email: "info@alkhidmah.org",
        phone: "+৮৮০ ১২৩৪-৫৬৭৮৯০",
      },
    },
    en: {
      title: "Terms and Conditions",
      subtitle: "Terms and Conditions for Using Al-Khidmah Organization",
      lastUpdated: "Last Updated: January 2025",
      acceptance: {
        title: "1. Acceptance of Terms",
        description:
          "By using the Al-Khidmah Organization website, you agree to comply with these terms and conditions. If you do not agree with these terms, please do not use this website.",
      },
      usage: {
        title: "2. Website Usage",
        points: [
          "You may use this website only for legitimate purposes",
          "This website may not be used for any illegal activities",
          "You may not post any content that may harm other users",
          "You may not disrupt the security or functionality of the website",
        ],
      },
      donations: {
        title: "3. Donations and Contributions",
        points: [
          "All donations are voluntary and non-refundable",
          "Donated funds will be transparently spent on organizational programs",
          "Donors will receive receipts for their donations",
          "Zakat funds will be distributed according to Shariah",
        ],
      },
      privacy: {
        title: "4. Privacy",
        points: [
          "We are committed to protecting your personal information",
          "Your information will not be shared with third parties",
          "We will not send you marketing emails without your permission",
          "You may request deletion of your information at any time",
        ],
      },
      intellectual: {
        title: "5. Intellectual Property",
        points: [
          "All content on this website is the property of Al-Khidmah Organization",
          "You may not use any content without our written permission",
          "Our logo and trademarks are protected",
          "When sharing content for educational purposes, you must cite the source",
        ],
      },
      liability: {
        title: "6. Limitation of Liability",
        points: [
          "Website information is provided on an 'as is' basis",
          "We are not responsible for errors or omissions on the website",
          "We are not responsible for third-party websites",
          "We reserve the right to change or discontinue the website at any time",
        ],
      },
      changes: {
        title: "7. Changes to Terms",
        description:
          "We reserve the right to change these terms at any time. Changes will be posted on this page and will be effective immediately. It is your responsibility to review these terms regularly.",
      },
      contact: {
        title: "8. Contact",
        description: "If you have any questions about these terms, please contact us:",
        email: "info@alkhidmah.org",
        phone: "+880 1234-567890",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-lg opacity-90 mb-2">{t.subtitle}</p>
            <p className="text-sm opacity-75">{t.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Acceptance of Terms */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.acceptance.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t.acceptance.description}</p>
                </div>
              </div>
            </div>

            {/* Website Usage */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.usage.title}</h2>
                  <ul className="space-y-3">
                    {t.usage.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Donations */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.donations.title}</h2>
                  <ul className="space-y-3">
                    {t.donations.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.privacy.title}</h2>
                  <ul className="space-y-3">
                    {t.privacy.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.intellectual.title}</h2>
                  <ul className="space-y-3">
                    {t.intellectual.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.liability.title}</h2>
                  <ul className="space-y-3">
                    {t.liability.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.changes.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t.changes.description}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-secondary/5 rounded-lg p-8 border-2 border-secondary/20">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.contact.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.contact.description}</p>
              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:info@alkhidmah.org" className="text-secondary hover:underline">
                    {t.contact.email}
                  </a>
                </p>
                <p className="text-foreground">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+8801234567890" className="text-secondary hover:underline">
                    {t.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
