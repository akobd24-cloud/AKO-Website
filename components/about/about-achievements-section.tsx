'use client';

import { TrendingUp } from 'lucide-react';

type Language = 'bn' | 'en';

export function AboutAchievementsSection({
  language,
}: {
  language: Language;
}) {
  const achievements = [
    {
      number: '5000+',
      label: language === 'bn' ? 'সেবা প্রাপ্ত মানুষ' : 'People Served',
    },
    {
      number: '200+',
      label: language === 'bn' ? 'স্বেচ্ছাসেবক' : 'Volunteers',
    },
    {
      number: '70+',
      label: language === 'bn' ? 'কার্যক্রম' : 'Programs',
    },
    {
      number: '7+',
      label: language === 'bn' ? 'বছরের অভিজ্ঞতা' : 'Years of Service',
    },
  ];

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5' />
      <div className='absolute inset-0 islamic-pattern opacity-10' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {language === 'bn' ? 'আমাদের অর্জন' : 'Our Achievements'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
          {achievements.map((achievement, index) => (
            <div key={index} className='text-center space-y-3'>
              <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-2'>
                <TrendingUp className='w-10 h-10 text-primary' />
              </div>
              <div className='font-serif text-4xl md:text-5xl font-bold text-primary'>
                {achievement.number}
              </div>
              <div className='text-muted-foreground font-medium'>
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

