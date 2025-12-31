"use client"

import { useLanguage } from "@/lib/language-context"
import { Shield, Eye, Lock, UserCheck, Database, FileText, AlertCircle, Mail } from "lucide-react"

export function PrivacyPageContent() {
  const { language } = useLanguage()

  const content = {
    bn: {
      title: "গোপনীয়তা নীতি",
      subtitle: "আপনার তথ্যের সুরক্ষায় আমাদের প্রতিশ্রুতি",
      lastUpdated: "সর্বশেষ আপডেট: জানুয়ারি ২০২৫",
      introduction: {
        title: "১. ভূমিকা",
        description:
          "আল-খিদমাহ অরগানাইজেশন আপনার গোপনীয়তাকে সম্মান করে এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করি।",
      },
      collection: {
        title: "২. তথ্য সংগ্রহ",
        description: "আমরা নিম্নলিখিত ধরনের তথ্য সংগ্রহ করতে পারি:",
        points: [
          "ব্যক্তিগত তথ্য: নাম, ইমেইল, ফোন নম্বর, ঠিকানা",
          "দান সংক্রান্ত তথ্য: দানের পরিমাণ, লেনদেনের বিবরণ",
          "স্বেচ্ছাসেবক তথ্য: দক্ষতা, আগ্রহ, উপলব্ধতা",
          "ওয়েবসাইট ব্যবহারের তথ্য: IP ঠিকানা, ব্রাউজার তথ্য, পৃষ্ঠা দর্শন",
        ],
      },
      usage: {
        title: "৩. তথ্যের ব্যবহার",
        description: "আমরা আপনার তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:",
        points: [
          "সেবা প্রদান এবং যোগাযোগ রক্ষা",
          "দান প্রক্রিয়াকরণ এবং রসিদ প্রদান",
          "স্বেচ্ছাসেবক কার্যক্রম সমন্বয়",
          "নিউজলেটার এবং আপডেট পাঠানো",
          "ওয়েবসাইট উন্নত করা",
          "আইনি বাধ্যবাধকতা পূরণ",
        ],
      },
      sharing: {
        title: "৪. তথ্য শেয়ারিং",
        description: "আমরা আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না, তবে নিম্নলিখিত ক্ষেত্রে ব্যতিক্রম:",
        points: [
          "পেমেন্ট প্রসেসর (দান প্রক্রিয়াকরণের জন্য)",
          "আইনি বাধ্যবাধকতা (আদালতের আদেশ অনুযায়ী)",
          "আপনার সম্মতিতে (আপনি যখন অনুমতি দেন)",
          "সেবা প্রদানকারী (যারা আমাদের হয়ে কাজ করে এবং গোপনীয়তার চুক্তিতে আবদ্ধ)",
        ],
      },
      security: {
        title: "৫. তথ্য সুরক্ষা",
        description: "আপনার তথ্য সুরক্ষিত রাখতে আমরা নিম্নলিখিত ব্যবস্থা নিয়েছি:",
        points: [
          "SSL এনক্রিপশন ব্যবহার করে ডেটা ট্রান্সফার সুরক্ষিত",
          "নিরাপদ সার্ভারে তথ্য সংরক্ষণ",
          "সীমিত অ্যাক্সেস: শুধুমাত্র অনুমোদিত কর্মীরা তথ্য দেখতে পারে",
          "নিয়মিত নিরাপত্তা অডিট এবং আপডেট",
        ],
      },
      rights: {
        title: "৬. আপনার অধিকার",
        description: "আপনার ব্যক্তিগত তথ্য সম্পর্কে আপনার নিম্নলিখিত অধিকার রয়েছে:",
        points: [
          "অ্যাক্সেস: আপনার তথ্য দেখার অধিকার",
          "সংশোধন: ভুল তথ্য সংশোধনের অধিকার",
          "মুছে ফেলা: আপনার তথ্য মুছে ফেলার অনুরোধের অধিকার",
          "আপত্তি: তথ্য প্রক্রিয়াকরণে আপত্তি জানানোর অধিকার",
          "তথ্য স্থানান্তর: আপনার তথ্য অন্য সংস্থায় স্থানান্তরের অধিকার",
        ],
      },
      cookies: {
        title: "৭. কুকিজ",
        description:
          "আমাদের ওয়েবসাইট কুকিজ ব্যবহার করে আপনার অভিজ্ঞতা উন্নত করতে। কুকিজ হল ছোট ফাইল যা আপনার ব্রাউজারে সংরক্ষিত হয়। আপনি ব্রাউজার সেটিংস থেকে কুকিজ নিষ্ক্রিয় করতে পারেন, তবে এটি ওয়েবসাইটের কিছু বৈশিষ্ট্য প্রভাবিত করতে পারে।",
      },
      children: {
        title: "৮. শিশুদের গোপনীয়তা",
        description:
          "আমাদের সেবা ১৩ বছরের কম বয়সী শিশুদের জন্য নয়। আমরা জেনেশুনে ১৩ বছরের কম বয়সী শিশুদের থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না। যদি আপনি মনে করেন একটি শিশু আমাদের তথ্য প্রদান করেছে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।",
      },
      changes: {
        title: "৯. নীতি পরিবর্তন",
        description:
          "আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। পরিবর্তনগুলি এই পৃষ্ঠায় পোস্ট করা হবে এবং 'সর্বশেষ আপডেট' তারিখ পরিবর্তিত হবে। গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে, আমরা ইমেইলের মাধ্যমে আপনাকে অবহিত করব।",
      },
      contact: {
        title: "১০. যোগাযোগ",
        description:
          "এই গোপনীয়তা নীতি সম্পর্কে বা আপনার তথ্য সম্পর্কে আপনার যদি কোনো প্রশ্ন বা উদ্বেগ থাকে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:",
        email: "privacy@alkhidmah.org",
        phone: "+৮৮০ ১২৩৪-৫৬৭৮৯০",
        address: "আল-খিদমাহ অরগানাইজেশন, ঢাকা, বাংলাদেশ",
      },
    },
    en: {
      title: "Privacy Policy",
      subtitle: "Our Commitment to Protecting Your Information",
      lastUpdated: "Last Updated: January 2025",
      introduction: {
        title: "1. Introduction",
        description:
          "Al-Khidmah Organization respects your privacy and is committed to protecting your personal information. This privacy policy explains how we collect, use, and protect your information.",
      },
      collection: {
        title: "2. Information Collection",
        description: "We may collect the following types of information:",
        points: [
          "Personal information: Name, email, phone number, address",
          "Donation information: Donation amount, transaction details",
          "Volunteer information: Skills, interests, availability",
          "Website usage information: IP address, browser information, page views",
        ],
      },
      usage: {
        title: "3. Information Usage",
        description: "We use your information for the following purposes:",
        points: [
          "Provide services and maintain communication",
          "Process donations and provide receipts",
          "Coordinate volunteer activities",
          "Send newsletters and updates",
          "Improve the website",
          "Fulfill legal obligations",
        ],
      },
      sharing: {
        title: "4. Information Sharing",
        description: "We do not share your information with third parties, except in the following cases:",
        points: [
          "Payment processors (for donation processing)",
          "Legal obligations (according to court orders)",
          "With your consent (when you give permission)",
          "Service providers (who work on our behalf and are bound by confidentiality agreements)",
        ],
      },
      security: {
        title: "5. Information Security",
        description: "We have taken the following measures to protect your information:",
        points: [
          "Secure data transfer using SSL encryption",
          "Store information on secure servers",
          "Limited access: Only authorized staff can view information",
          "Regular security audits and updates",
        ],
      },
      rights: {
        title: "6. Your Rights",
        description: "You have the following rights regarding your personal information:",
        points: [
          "Access: Right to view your information",
          "Correction: Right to correct incorrect information",
          "Deletion: Right to request deletion of your information",
          "Objection: Right to object to information processing",
          "Data portability: Right to transfer your information to another organization",
        ],
      },
      cookies: {
        title: "7. Cookies",
        description:
          "Our website uses cookies to improve your experience. Cookies are small files stored in your browser. You can disable cookies from browser settings, but this may affect some features of the website.",
      },
      children: {
        title: "8. Children's Privacy",
        description:
          "Our service is not for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with information, please contact us.",
      },
      changes: {
        title: "9. Policy Changes",
        description:
          "We may update this privacy policy from time to time. Changes will be posted on this page and the 'Last Updated' date will be changed. In case of significant changes, we will notify you via email.",
      },
      contact: {
        title: "10. Contact",
        description:
          "If you have any questions or concerns about this privacy policy or your information, please contact us:",
        email: "privacy@alkhidmah.org",
        phone: "+880 1234-567890",
        address: "Al-Khidmah Organization, Dhaka, Bangladesh",
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
              <Shield className="w-10 h-10" />
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
            {/* Introduction */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.introduction.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t.introduction.description}</p>
                </div>
              </div>
            </div>

            {/* Information Collection */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.collection.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t.collection.description}</p>
                  <ul className="space-y-3">
                    {t.collection.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Usage */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.usage.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t.usage.description}</p>
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

            {/* Information Sharing */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.sharing.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t.sharing.description}</p>
                  <ul className="space-y-3">
                    {t.sharing.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Security */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.security.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t.security.description}</p>
                  <ul className="space-y-3">
                    {t.security.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.rights.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t.rights.description}</p>
                  <ul className="space-y-3">
                    {t.rights.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.cookies.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t.cookies.description}</p>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.children.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t.children.description}</p>
                </div>
              </div>
            </div>

            {/* Policy Changes */}
            <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.changes.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{t.changes.description}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-secondary/5 rounded-lg p-8 border-2 border-secondary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{t.contact.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t.contact.description}</p>
                  <div className="space-y-2">
                    <p className="text-foreground">
                      <span className="font-medium">Email:</span>{" "}
                      <a href="mailto:privacy@alkhidmah.org" className="text-secondary hover:underline">
                        {t.contact.email}
                      </a>
                    </p>
                    <p className="text-foreground">
                      <span className="font-medium">Phone:</span>{" "}
                      <a href="tel:+8801234567890" className="text-secondary hover:underline">
                        {t.contact.phone}
                      </a>
                    </p>
                    <p className="text-foreground">
                      <span className="font-medium">Address:</span> {t.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
