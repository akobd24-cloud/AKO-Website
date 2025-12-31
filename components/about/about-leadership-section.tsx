'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

type Language = 'bn' | 'en';

export function AboutLeadershipSection({ language }: { language: Language }) {
  const team = [
    {
      name:
        language === 'bn' ? 'মুহাম্মাদ হৃদয় হাসান' : 'Muhammad Hridoy Hasan',
      role: language === 'bn' ? 'প্রতিষ্ঠাতা সভাপতি' : 'Founding Chairman',
      image: '/middle-aged-muslim-man-with-beard-in-formal-dress.jpg',
    },
    {
      name:
        language === 'bn'
          ? 'মাওলানা মাহবুবুর রহমান'
          : 'Mawlana Mahbubur Rahman',
      role: language === 'bn' ? 'চেয়ারম্যান' : 'Chairman',
      image: '/middle-aged-muslim-man-with-beard-in-formal-dress.jpg',
    },
    {
      name:
        language === 'bn'
          ? 'মুহাম্মাদ রাকিবুল ইসলাম'
          : 'Muhammad Rakibul Islam',
      role: language === 'bn' ? 'সহ-সভাপতি' : 'Vice Chairman',
      image: '/young-muslim-man-with-glasses-in-professional-atti.jpg',
    },
    {
      name:
        language === 'bn' ? 'মুহাম্মাদ রিফাত আবরার' : 'Muhammad Rifat Abrar',
      role: language === 'bn' ? 'সাধারণ সম্পাদক' : 'General Secretary',
      image: '/young-muslim-man-with-short-beard-smiling.jpg',
    },
    {
      name: language === 'bn' ? 'শাহরিয়ার সৌহার্দ্য' : 'Sahariar Souhardo',
      role: language === 'bn' ? 'সাংগঠনিক সম্পাদক' : 'Organizational Secretary',
      image: '/young-muslim-man-with-short-beard-smiling.jpg',
    },
    {
      name:
        language === 'bn' ? 'মোছাদ্দিক হাবিব তালহা' : 'Musaddique Habib Talha',
      role: language === 'bn' ? 'প্রজেক্ট ম্যানেজার' : 'Project Manager',
      image: '/young-muslim-man-with-short-beard-smiling.jpg',
    },
    {
      name: language === 'bn' ? 'ইকরামুল মুজাহিদ' : 'Ikramul Mujahid',
      role:
        language === 'bn'
          ? 'হিউম্যান রিসোর্স ম্যানেজার'
          : 'Human Resource Manager',
      image: '/young-muslim-man-with-short-beard-smiling.jpg',
    },
    {
      name:
        language === 'bn' ? 'মুহাম্মাদ শিহাব উদ্দিন' : 'Musaddique Habib Talha',
      role: language === 'bn' ? 'কোষাধ্যক্ষ' : 'Cashier',
      image: '/young-muslim-man-with-short-beard-smiling.jpg',
    },
    {
      name: language === 'bn' ? 'মাহবুব সিয়াম' : 'Mahbub Siam',
      role: language === 'bn' ? 'মিডিয়া বিভাগ' : 'Media Section',
      image: '/young-muslim-man-with-short-beard-smiling.jpg',
    },
    {
      name: language === 'bn' ? 'রেদুইন রহমান' : 'Raduin Rahman',
      role: language === 'bn' ? 'মিডিয়া বিভাগ' : 'Media Section',
      image: '/young-muslim-man-with-short-beard-smiling.jpg',
    },
  ];

  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {language === 'bn' ? 'আমাদের নেতৃত্ব' : 'Our Leadership'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {language === 'bn'
              ? 'যারা আল-খিদমাহকে এগিয়ে নিয়ে যাচ্ছেন'
              : 'Those who are leading Al-Khidmah forward'}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          {team.map((member, index) => (
            <Card
              key={index}
              className='border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden group'
            >
              <CardContent className='p-0'>
                <div className='relative aspect-square overflow-hidden'>
                  <Image
                    // src={member.image || '/placeholder.svg'}
                    src={'/icons/muslim.png'}
                    alt={member.name}
                    width={300}
                    height={300}
                    className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                </div>
                <div className='p-6 text-center space-y-2'>
                  <h3 className='font-serif text-xl font-bold text-foreground'>
                    {member.name}
                  </h3>
                  <p className='text-sm text-primary font-medium'>
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
