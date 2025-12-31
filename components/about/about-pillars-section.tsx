'use client';

import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Users } from 'lucide-react';
import { PiMosque } from 'react-icons/pi';

type Language = 'bn' | 'en';

export function AboutPillarsSection({ language }: { language: Language }) {
  const pillars = [
    {
      icon: BookOpen,
      title: language === 'bn' ? 'দাওয়াহ ও শিক্ষা' : 'Dawah & Education',
      description:
        language === 'bn'
          ? 'কুরআন ও সুন্নাহভিত্তিক বিশুদ্ধ ইসলামের দাওয়াহ, শিক্ষা, সংস্কৃতি ও মূল্যবোধের প্রচার প্রসার করা'
          : 'Dawah and Teaching Quran and Hadith and practicing Islamic values',
    },
    {
      icon: Heart,
      title: language === 'bn' ? 'সামাজিক সেবা' : 'Social Service',
      description:
        language === 'bn'
          ? 'দ্বীন, কওম (জাতি) ও যমীনের (দেশের) স্বার্থে বিভিন্ন জনসচেতনতা ও জনকল্যাণে সামাজিক সেবামূলক কার্যক্রম পরিচালনা করা'
          : 'Providing humanitarian assistance to the poor and helpless',
    },
    {
      icon: Users,
      title: language === 'bn' ? 'যুব উন্নয়ন' : 'Youth Development',
      description:
        language === 'bn'
          ? 'আধুনিক নানাবিধ কঠিন চ্যালেঞ্জ মোকাবিলায় তরুণদের দক্ষতা বৃদ্ধি ও নেতৃত্ব বিকাশে প্রশিক্ষণ'
          : 'Training to enhance skills and develop leadership among youth',
    },
    {
      icon: PiMosque,
      title: language === 'bn' ? 'আদর্শ সমাজ বিনির্মাণ' : 'Reconstruction',
      description:
        language === 'bn'
          ? 'ওহীর আলোকে মাসজিদকেন্দ্রিক আদর্শ সমাজ বিনির্মাণ করা যেখানে শান্তি ও নিরাপত্তা, ন্যায়পরায়নতা ও কল্যাণ সর্বত্র ছড়িয়ে থাকে।'
          : 'Reconstruction of Islamic Civilization',
    },
  ];

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='absolute inset-0 islamic-pattern opacity-10' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {language === 'bn' ? 'কাজের খাতসমূহ' : 'Sectors of work'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
        </div>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className='border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group'
              >
                <CardContent className='pt-12 pb-8 text-center space-y-4'>
                  <div className='w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                    <Icon className='w-10 h-10 text-primary' />
                  </div>
                  <h3 className='font-serif text-2xl font-bold text-foreground'>
                    {pillar.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {pillar.description}
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
