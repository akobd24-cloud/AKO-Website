'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  BookOpen,
  GraduationCap,
  HandHeart,
  Heart,
  Shield,
  Target,
  Users,
} from 'lucide-react';

type Language = 'bn' | 'en';

export function AboutGoalsObjectivesSection({
  language,
}: {
  language: Language;
}) {
  const goals = [
    {
      icon: Target,
      title:
        language === 'bn'
          ? 'তাওহীদ বা একত্ববাদের দাওয়াহ'
          : 'Call to Tawheed (Monotheism)',
      description:
        language === 'bn'
          ? 'তাওহীদ বা একত্ববাদের দাওয়াত দেওয়া অর্থাৎ ইবাদাত থেকে শুরু করে শাসনব্যবস্থা পর্যন্ত আল্লাহ তাআলার জন্য খাঁটি করার ডাক দেওয়া।'
          : 'Calling to Tawheed (monotheism), meaning calling for the purification of everything from worship to governance system exclusively for Allah the Almighty.',
    },
    {
      icon: BookOpen,
      title:
        language === 'bn'
          ? 'কুরআন ও সুন্নাহভিত্তিক জ্ঞানের প্রসার'
          : 'Spreading Knowledge Based on Quran and Sunnah',
      description:
        language === 'bn'
          ? 'কুরআন ও সুন্নাহভিত্তিক বিশুদ্ধ ইসলামী জ্ঞানের প্রসার এবং কুরআন-সুন্নাহভিত্তিক যুগোপযোগী শিক্ষা গবেষণাকেন্দ্র স্থাপন ও শিক্ষাপ্রতিষ্ঠান প্রতিষ্ঠা ও পরিচালনা করা।'
          : 'Spreading pure Islamic knowledge based on Quran and Sunnah, and establishing and operating contemporary educational research centers and educational institutions based on Quran and Sunnah.',
    },
    {
      icon: Users,
      title:
        language === 'bn'
          ? 'সৎ কাজে আদেশ ও অসৎ কাজে নিষেধ'
          : 'Guiding Youth to the Straight Path',
      description:
        language === 'bn'
          ? 'অনৈসলামিক সংস্কৃতির সংকীর্ণতা ও অন্ধকার থেকে মুসলিম কিশোর-তরুণ-যুবকদেরকে দ্বীন ইসলামের কল্যাণময় সিরাতুল মুস্তাকিমে ফিরিয়ে আনার লক্ষ্যে এবং সৎকাজে উৎসাহ দান ও অসৎকাজ থেকে বিরত রাখার লক্ষ্যে সুপরিকল্পিত দাওয়াহি কার্যক্রম পরিচালনা।'
          : 'Conducting well-planned dawah activities to bring Muslim adolescents, youth, and young adults back from the narrowness and darkness of un-Islamic culture to the blessed straight path of Islam, encouraging good deeds and preventing evil deeds.',
    },
    {
      icon: HandHeart,
      title:
        language === 'bn'
          ? 'সামাজিক কার্যক্রম পরিচালনা'
          : 'Conducting Social Activities',
      description:
        language === 'bn'
          ? 'দ্বীন, কওম (জাতি) ও যমীনের (দেশের) স্বার্থে বিভিন্ন জনসচেতনতা ও জনকল্যাণমূলক সামাজিক কার্যক্রম পরিচালনা করা।'
          : 'Conducting various awareness and welfare-oriented social activities for the benefit of Deen (religion), Qawm (nation), and Zameen (country).',
    },
    {
      icon: Heart,
      title:
        language === 'bn'
          ? 'আদর্শ সমাজ বিনির্মাণ'
          : 'Building an Ideal Society',
      description:
        language === 'bn'
          ? 'ওহীর আলোকে মাসজিদকেন্দ্রিক আদর্শ সমাজ বিনির্মাণ করা যেখানে শান্তি ও নিরাপত্তা, ন্যায়পরায়নতা ও কল্যাণ সর্বত্র ছড়িয়ে থাকে এবং অত্যাচার, অধিকার হনন ও শোষণের রাস্তা বন্ধ করা।'
          : 'Building an ideal mosque-centered society based on the light of revelation where peace and security, justice and welfare spread everywhere, and stopping the path of oppression, deprivation of rights, and exploitation.',
    },
    {
      icon: Shield,
      title:
        language === 'bn'
          ? 'মুসলিম কওমের হেফাজত'
          : 'Protection of Muslim Community',
      description:
        language === 'bn'
          ? 'বাংলার যমীনের মুসলিম কওমের দ্বীন, জান, ইজ্জত ও সম্পদের হেফাজত ও রক্ষা করা। একইভাবে এই বাংলার যমীনের সমস্ত মাজলুমদেরকে সাহায্য করা।'
          : 'Protecting and preserving the Deen (religion), life, honor, and wealth of the Muslim community of the land of Bengal. Similarly, helping all the oppressed of this land of Bengal.',
    },
    {
      icon: GraduationCap,
      title:
        language === 'bn'
          ? 'মহান আল্লাহর সন্তুষ্টি অর্জন'
          : 'Seeking the pleasure of Allah Almighty.',
      description:
        language === 'bn'
          ? 'সর্বক্ষেত্রে সর্বাবস্থায় মহান আল্লাহর সন্তুষ্টি অর্জনের চেস্টা, অনুকরণ ও অনুশীলনের মাধ্যমে একমাত্র মহান আল্লাহর সন্তুষ্টি ও আল্লাহ তাআলার সৃষ্ট জান্নাত অর্জন করা।'
          : 'Following, emulating, and practicing the boundaries of Deen Islam in all fields and all circumstances to achieve the pleasure of the Great Allah alone and the Paradise created by Allah the Almighty.',
    },
  ];

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5' />
      <div className='absolute inset-0 islamic-pattern opacity-10' />
      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {language === 'bn' ? 'লক্ষ্য-উদ্দেশ্য' : 'Goals & Objectives'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto'>
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <Card
                key={index}
                className='border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group'
              >
                <CardContent className='pt-8 pb-6 space-y-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                    <Icon className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='font-serif text-xl font-bold text-foreground'>
                    {goal.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed text-pretty'>
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
