'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

type Language = 'bn' | 'en';

export function ActivitiesGridSection({ language }: { language: Language }) {
  const activities = [
    {
      id: 1,
      title: language === 'bn' ? 'দার-আল-আরকাম' : 'Dar al-Arqam',
      description:
        language === 'bn'
          ? 'ইসলামী শিক্ষা ও প্রশিক্ষণের জন্য বিশেষ কর্মসূচি। কুরআন, হাদীস এবং ইসলামী জ্ঞানের বিভিন্ন বিষয়ে শিক্ষা প্রদান করা হয়।'
          : 'Special program for Islamic education and training. Education is provided on various topics including Quran, Hadith, and Islamic knowledge.',
      image: '/placeholder.svg',
      category: language === 'bn' ? 'যুব উন্নয়ন' : 'Youth Development',
      schedule: language === 'bn' ? 'সাপ্তাহিক' : 'Weekly',
      location: language === 'bn' ? 'আল-খিদমাহ সেন্টার' : 'Al-Khidmah Center',
      participants: '50+',
    },
    {
      id: 2,
      title: language === 'bn' ? 'সুফফাহ' : 'Suffah',
      description:
        language === 'bn'
          ? 'তরুণদের জন্য ইসলামী শিক্ষা ও প্রশিক্ষণ কর্মসূচি। ইসলামের মৌলিক শিক্ষা এবং সমসাময়িক বিষয়ে আলোচনা করা হয়।'
          : 'Islamic education and training program for youth. Discussion on fundamental Islamic teachings and contemporary issues.',
      image: '/placeholder.svg',
      category: language === 'bn' ? 'দাওয়াহ' : 'Dawah',
      schedule: language === 'bn' ? 'মাসিক' : 'Monthly',
      location: language === 'bn' ? 'আল-খিদমাহ সেন্টার' : 'Al-Khidmah Center',
      participants: '40+',
    },
    {
      id: 3,
      title: language === 'bn' ? 'সাপ্তাহিক ক্যাম্পেইন' : 'Weekly Campaign',
      description:
        language === 'bn'
          ? 'সমাজে ইসলামের বার্তা পৌঁছে দেওয়ার জন্য সাপ্তাহিক ক্যাম্পেইন। বিভিন্ন স্থানে দাওয়াতি কার্যক্রম পরিচালনা করা হয়।'
          : 'Weekly campaign to spread the message of Islam in society. Dawah activities are conducted at various locations.',
      image: '/placeholder.svg',
      category: language === 'bn' ? 'দাওয়াহ' : 'Dawah',
      schedule: language === 'bn' ? 'প্রতি সপ্তাহ' : 'Every Week',
      location: language === 'bn' ? 'বিভিন্ন স্থান' : 'Various Locations',
      participants: '30+',
    },
    {
      id: 4,
      title: language === 'bn' ? 'সাপ্তাহিক হালাকাহ' : 'Weekly Halaqah',
      description:
        language === 'bn'
          ? 'ইসলামী জ্ঞান বৃদ্ধি এবং আত্মিক উন্নয়নের জন্য সাপ্তাহিক হালাকাহ। কুরআন, হাদীস এবং ইসলামী চিন্তাধারা নিয়ে আলোচনা করা হয়।'
          : 'Weekly Halaqah for increasing Islamic knowledge and spiritual development. Discussion on Quran, Hadith, and Islamic thought.',
      image: '/placeholder.svg',
      category: language === 'bn' ? 'ধর্মীয় শিক্ষা' : 'Religious Education',
      schedule: language === 'bn' ? 'সাপ্তাহিক' : 'Weekly',
      location: language === 'bn' ? 'আল-খিদমাহ সেন্টার' : 'Al-Khidmah Center',
      participants: '35+',
    },
  ];

  return (
    <section className='py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4'>
            {language === 'bn' ? 'চলমান কার্যক্রম' : 'Ongoing Activities'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {language === 'bn'
              ? 'আমাদের নিয়মিত কার্যক্রমগুলো যেখানে আপনি অংশগ্রহণ করতে পারেন'
              : 'Our regular activities where you can participate'}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className='overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50'
            >
              <div className='relative h-56 overflow-hidden'>
                <Image
                  src={activity.image || '/placeholder.svg'}
                  alt={activity.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full'>
                    {activity.category}
                  </span>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4 text-white'>
                  <div className='flex items-center gap-2 text-sm'>
                    <Users className='w-4 h-4' />
                    <span>{activity.participants}</span>
                  </div>
                </div>
              </div>
              <CardContent className='p-6 space-y-4'>
                <h3 className='font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors'>
                  {activity.title}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {activity.description}
                </p>

                <div className='space-y-2 pt-4 border-t border-border'>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Clock className='w-4 h-4 text-primary' />
                    <span>{activity.schedule}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <MapPin className='w-4 h-4 text-primary' />
                    <span>{activity.location}</span>
                  </div>
                </div>

                {/* <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground'>
                  {language === 'bn' ? 'অংশগ্রহণ করুন' : 'Join Activity'}
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

