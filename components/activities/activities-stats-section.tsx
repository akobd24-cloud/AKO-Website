'use client';

import { Calendar, Heart, Star, Users } from 'lucide-react';

type Language = 'bn' | 'en';

export function ActivitiesStatsSection({ language }: { language: Language }) {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: language === 'bn' ? 'মোট অংশগ্রহণকারী' : 'Total Participants',
    },
    {
      icon: Calendar,
      value: '50+',
      label: language === 'bn' ? 'মাসিক কার্যক্রম' : 'Monthly Activities',
    },
    {
      icon: Heart,
      value: '10,000+',
      label: language === 'bn' ? 'উপকৃত মানুষ' : 'People Helped',
    },
    {
      icon: Star,
      value: '15+',
      label: language === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years of Experience',
    },
  ];

  return (
    <section className='py-16 bg-primary text-primary-foreground'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className='text-center'>
                <Icon className='w-12 h-12 mx-auto mb-4 opacity-80' />
                <div className='text-4xl font-bold mb-2'>{stat.value}</div>
                <div className='text-sm opacity-90'>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

