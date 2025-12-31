'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

type Language = 'bn' | 'en';

export function ActivitiesUpcomingSection({
  language,
}: {
  language: Language;
}) {
  const upcomingActivities = [
    {
      title:
        language === 'bn'
          ? 'প্রোডাক্টিভ রমাদান'
          : 'Productive Ramadan',
      date: language === 'bn' ? 'রমজান মাস' : 'Ramadan Month',
      time: language === 'bn' ? 'সম্পূর্ণ মাস' : 'Full Month',
      location: language === 'bn' ? 'আল-খিদমাহ সেন্টার' : 'Al-Khidmah Center',
    },
    {
      title:
        language === 'bn' 
          ? 'মুক্ত বাতাসের খোঁজে লিফলেটিং ক্যাম্পেইন' 
          : 'Leafleting Campaign in Search of Free Air',
      date: language === 'bn' ? 'শীঘ্রই' : 'Coming Soon',
      time: language === 'bn' ? 'সম্পূর্ণ দিন' : 'Full Day',
      location: language === 'bn' ? 'বিভিন্ন স্থান' : 'Various Locations',
    },
    {
      title:
        language === 'bn' ? 'দার আল-আরকাম' : 'Dar al-Arqam',
      date: language === 'bn' ? 'নিয়মিত' : 'Regular',
      time: language === 'bn' ? 'সাপ্তাহিক' : 'Weekly',
      location: language === 'bn' ? 'আল-খিদমাহ সেন্টার' : 'Al-Khidmah Center',
    },
    {
      title:
        language === 'bn' ? 'সুফফাহ' : 'Suffah',
      date: language === 'bn' ? 'নিয়মিত' : 'Regular',
      time: language === 'bn' ? 'মাসিক' : 'Monthly',
      location: language === 'bn' ? 'আল-খিদমাহ সেন্টার' : 'Al-Khidmah Center',
    },
  ];

  return (
    <section className='py-24 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4'>
            {language === 'bn' ? 'আসন্ন কার্যক্রম' : 'Upcoming Activities'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {language === 'bn'
              ? 'শীঘ্রই আসছে যেসব বিশেষ কার্যক্রম'
              : 'Special activities coming soon'}
          </p>
        </div>

        <div className='max-w-4xl mx-auto space-y-6'>
          {upcomingActivities.map((activity, index) => (
            <Card
              key={index}
              className='hover:shadow-lg transition-shadow duration-300'
            >
              <CardContent className='p-6'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                  <div className='flex-1'>
                    <h3 className='font-serif text-xl font-bold text-foreground mb-3'>
                      {activity.title}
                    </h3>
                    <div className='flex flex-wrap gap-4 text-sm text-muted-foreground'>
                      <div className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4 text-primary' />
                        <span>{activity.date}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Clock className='w-4 h-4 text-primary' />
                        <span>{activity.time}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <MapPin className='w-4 h-4 text-primary' />
                        <span>{activity.location}</span>
                      </div>
                    </div>
                  </div>
                  {/* <Button className='bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap'>
                    {language === 'bn' ? 'নিবন্ধন করুন' : 'Register Now'}
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

