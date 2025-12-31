"use client"

import { Calendar, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function EventsSection() {
  const { language } = useLanguage()

  const content = {
    bn: {
      title: "আসন্ন ইভেন্ট",
      description: "আসন্ন ইভেন্ট, কর্মসূচি এবং সমাবেশের মাধ্যমে আমাদের সম্প্রদায়ের সাথে সংযুক্ত থাকুন।",
      events: [
        {
          title: "প্রোডাক্টিভ রমাদান",
          date: "রমজান মাস",
          time: "সম্পূর্ণ মাস",
          location: "আল-খিদমাহ সেন্টার",
          description: "রমজান মাসকে উৎপাদনশীলভাবে কাটানোর জন্য বিশেষ কর্মসূচি।",
        },
        {
          title: "মুক্ত বাতাসের খোঁজে লিফলেটিং ক্যাম্পেইন",
          date: "শীঘ্রই",
          time: "সম্পূর্ণ দিন",
          location: "বিভিন্ন স্থান",
          description: "সমাজে ইসলামের বার্তা পৌঁছে দেওয়ার জন্য লিফলেটিং ক্যাম্পেইন।",
        },
        {
          title: "দার আল-আরকাম",
          date: "নিয়মিত",
          time: "সাপ্তাহিক",
          location: "আল-খিদমাহ সেন্টার",
          description: "ইসলামী শিক্ষা ও প্রশিক্ষণের জন্য বিশেষ কর্মসূচি।",
        },
        {
          title: "সুফফাহ",
          date: "নিয়মিত",
          time: "মাসিক",
          location: "আল-খিদমাহ সেন্টার",
          description: "তরুণদের জন্য ইসলামী শিক্ষা ও প্রশিক্ষণ কর্মসূচি।",
        },
      ],
      registerNow: "এখনই নিবন্ধন করুন",
    },
    en: {
      title: "Upcoming Events",
      description: "Stay connected with our community through upcoming events, programs, and gatherings.",
      events: [
        {
          title: "Productive Ramadan",
          date: "Ramadan Month",
          time: "Full Month",
          location: "Al-Khidmah Center",
          description: "Special program to make the most of Ramadan month productively.",
        },
        {
          title: "Leafleting Campaign in Search of Free Air",
          date: "Coming Soon",
          time: "Full Day",
          location: "Various Locations",
          description: "Leafleting campaign to spread the message of Islam in society.",
        },
        {
          title: "Dar al-Arqam",
          date: "Regular",
          time: "Weekly",
          location: "Al-Khidmah Center",
          description: "Special program for Islamic education and training.",
        },
        {
          title: "Suffah",
          date: "Regular",
          time: "Monthly",
          location: "Al-Khidmah Center",
          description: "Islamic education and training program for youth.",
        },
      ],
      registerNow: "Register Now",
    },
  }

  const t = content[language]

  const eventImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ]

  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={eventImages[index] || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-bold text-foreground">{event.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                {/* <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t.registerNow}
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
