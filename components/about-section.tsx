'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language-context';
import { BookOpen, Heart, Users } from 'lucide-react';
import { PiMosque } from 'react-icons/pi';

export function AboutSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: BookOpen,
      title: t('about.pillar1.title'),
      description: t('about.pillar1.description'),
    },
    {
      icon: Users,
      title: t('about.pillar2.title'),
      description: t('about.pillar2.description'),
    },
    {
      icon: Heart,
      title: t('about.pillar3.title'),
      description: t('about.pillar3.description'),
    },
    {
      icon: PiMosque,
      title: t('about.pillar4.title'),
      description: t('about.pillar4.description'),
    },
  ];

  return (
    <section id='about' className='py-24 relative overflow-hidden'>
      <div className='absolute inset-0 islamic-pattern opacity-20' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {t('about.title')}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          {/* <p className='text-xl text-primary font-semibold mb-4'>
            {t('about.subtitle')}
          </p> */}
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {t('about.description')}
          </p>
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
