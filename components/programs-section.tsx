'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/lib/language-context';

export function ProgramsSection() {
  const { t } = useLanguage();

  const programs = [
    {
      title: t('programs.ramadanSchedule.title'),
      description: t('programs.ramadanSchedule.description'),
      image: '/programs/ramadan_26.jpg',
      category: t('about.pillar4.title'),
    },
    {
      title: t('programs.halalLoveCampaign.title'),
      description: t('programs.halalLoveCampaign.description'),
      image: '/programs/tomake_valobashi_bole.jpg',
      category: t('about.pillar4.title'),
    },
    {
      title: t('programs.antiThirteenth.title'),
      description: t('programs.antiThirteenth.description'),
      image: '/31st-2025.jpg',
      category: t('about.pillar1.title'),
    },
    {
      title: t('programs.protest.title'),
      description: t('programs.protest.description'),
      image: '/programs/muslim-unity-protest.jpeg',
      category: t('about.pillar2.title'),
    },
    {
      title: t('programs.posterCampaign.title'),
      description: t('programs.posterCampaign.description'),
      image: '/programs/postering-campeign.jpeg',
      category: t('about.pillar2.title'),
    },
    {
      title: t('programs.humanChain.title'),
      description: t('programs.humanChain.description'),
      image: '/programs/human-chain.jpeg',
      category: t('about.pillar2.title'),
    },
    {
      title: t('programs.protestMarch.title'),
      description: t('programs.protestMarch.description'),
      image: '/programs/protest-march.jpeg',
      category: t('about.pillar2.title'),
    },
    {
      title: t('programs.quran.title'),
      description: t('programs.quran.description'),
      image: '/programs/tafsirul-quran-mahfil.jpg',
      category: t('about.pillar1.title'),
    },
    {
      title: t('programs.scholarship.title'),
      description: t('programs.scholarship.description'),
      image: '/programs/seminars-conferences.jpg',
      category: t('about.pillar2.title'),
    },
    {
      title: t('programs.health.title'),
      description: t('programs.health.description'),
      image: '/programs/sports-day.jpg',
      category: t('about.pillar3.title'),
    },
    {
      title: t('programs.food.title'),
      description: t('programs.food.description'),
      image: '/programs/iftar-mahfil.jpg',
      category: t('about.pillar3.title'),
    },
    {
      title: t('programs.skills.title'),
      description: t('programs.skills.description'),
      image: '/programs/tree-plantation.jpg',
      category: t('about.pillar2.title'),
    },
    {
      title: t('programs.orphan.title'),
      description: t('programs.orphan.description'),
      image: '/programs/july-fighters.jpg',
      category: t('about.pillar3.title'),
    },
  ];

  return (
    <section id='programs' className='py-24 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {t('programs.title')}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {t('programs.subtitle')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {programs.map((program, index) => (
            <Card
              key={index}
              className='overflow-hidden group hover:shadow-xl transition-all duration-300'
            >
              <div className='relative h-56 overflow-hidden'>
                <img
                  src={program.image || '/placeholder.svg'}
                  alt={program.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full'>
                    {program.category}
                  </span>
                </div>
              </div>
              <CardContent className='p-6 space-y-3'>
                <h3 className='font-serif text-xl font-bold text-foreground'>
                  {program.title}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {program.description}
                </p>
                <Button
                  variant='ghost'
                  className='w-full text-primary hover:text-primary hover:bg-primary/10'
                >
                  {t('programs.learnMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
