'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Handshake, Heart } from 'lucide-react';

type Language = 'bn' | 'en';

export function AboutValuesSection({ language }: { language: Language }) {
  const values = [
    {
      icon: Heart,
      title: language === 'bn' ? 'ঐকান্তিকতা' : 'Sincerity',
      description:
        language === 'bn'
          ? 'আল্লাহর সন্তুষ্টির জন্য নিঃস্বার্থভাবে সেবা করা'
          : 'Serving selflessly for the pleasure of Allah',
    },
    {
      icon: Handshake,
      title: language === 'bn' ? 'স্বচ্ছতা' : 'Transparency',
      description:
        language === 'bn'
          ? 'সকল কার্যক্রমে জবাবদিহিতা ও স্বচ্ছতা নিশ্চিত করা'
          : 'Ensuring accountability and transparency in all activities',
    },
    {
      icon: Award,
      title: language === 'bn' ? 'উৎকর্ষতা' : 'Excellence',
      description:
        language === 'bn'
          ? 'প্রতিটি কাজে সর্বোচ্চ মান বজায় রাখা'
          : 'Maintaining the highest standards in every task',
    },
    {
      icon: Globe,
      title: language === 'bn' ? 'সামগ্রিকতা' : 'Inclusivity',
      description:
        language === 'bn'
          ? 'সকলের জন্য সমান সুযোগ ও সেবা প্রদান'
          : 'Providing equal opportunities and services for all',
    },
  ];

  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {language === 'bn' ? 'আমাদের মূল্যবোধ' : 'Our Values'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {language === 'bn'
              ? 'যে নীতিমালার ওপর আমাদের সংগঠন প্রতিষ্ঠিত'
              : 'The principles on which our organization is founded'}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className='border-2 hover:border-primary/50 transition-all duration-300'
              >
                <CardContent className='pt-8 pb-6 text-center space-y-4'>
                  <div className='w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center'>
                    <Icon className='w-8 h-8 text-primary' />
                  </div>
                  <h3 className='font-serif text-xl font-bold text-foreground'>
                    {value.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {value.description}
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

