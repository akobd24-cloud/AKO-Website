'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target } from 'lucide-react';

type Language = 'bn' | 'en';

export function AboutMissionVisionSection({
  language,
}: {
  language: Language;
}) {
  return (
    <section className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          <Card className='border-2 border-primary/20'>
            <CardContent className='pt-12 pb-8 space-y-6'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                <Target className='w-8 h-8 text-primary' />
              </div>
              <h3 className='font-serif text-3xl font-bold text-foreground'>
                {language === 'bn' ? 'আমাদের লক্ষ্য' : 'Our Mission'}
              </h3>
              <p className='text-muted-foreground leading-relaxed text-pretty'>
                {language === 'bn'
                  ? 'ইসলামিক শিক্ষা, যুব উন্নয়ন এবং সামাজিক কল্যাণের মাধ্যমে একটি ন্যায়ভিত্তিক ও সমৃদ্ধ সমাজ গড়ে তোলা। আমরা প্রতিটি মানুষের মাঝে ঈমানের আলো জ্বালাতে এবং তাদের জীবনমান উন্নত করতে প্রতিশ্রুতিবদ্ধ।'
                  : 'To build a just and prosperous society through Islamic education, youth development, and social welfare. We are committed to igniting the light of faith in every person and improving their quality of life.'}
              </p>
            </CardContent>
          </Card>

          <Card className='border-2 border-primary/20'>
            <CardContent className='pt-12 pb-8 space-y-6'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                <Eye className='w-8 h-8 text-primary' />
              </div>
              <h3 className='font-serif text-3xl font-bold text-foreground'>
                {language === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি' : 'Our Vision'}
              </h3>
              <p className='text-muted-foreground leading-relaxed text-pretty'>
                {language === 'bn'
                  ? 'এমন একটি সমাজ দেখতে চাই যেখানে প্রতিটি মানুষ ইসলামিক মূল্যবোধে বিশ্বাসী এবং সামাজিক দায়বদ্ধতায় সচেতন। যেখানে শিক্ষা, স্বাস্থ্য এবং মৌলিক অধিকার সকলের জন্য নিশ্চিত।'
                  : 'We envision a society where every person believes in Islamic values and is conscious of social responsibility. Where education, health, and basic rights are ensured for all.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

