'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useJoinForm } from '@/lib/join-form-context';
import { useRouter } from 'next/navigation';

type Language = 'bn' | 'en';

export function AboutCTASection({ language }: { language: Language }) {
  const { setShowJoinForm } = useJoinForm();
  const router = useRouter();

  const handleBecomeMember = () => {
    // Navigate to homepage with join parameter
    router.push('/?join=true');
  };

  const handleDonateNow = () => {
    // Navigate to homepage with donation hash
    window.location.href = '/#donation-form';
  };

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10' />
      <div className='absolute inset-0 islamic-pattern opacity-10' />

      <div className='container mx-auto px-4 relative z-10'>
        <Card className='max-w-4xl mx-auto border-2 border-primary/30 bg-background/80 backdrop-blur'>
          <CardContent className='p-12 text-center space-y-8'>
            <h2 className='font-serif text-3xl md:text-4xl font-bold text-foreground text-balance'>
              {language === 'bn' ? 'আমাদের ভাই হোন' : 'Join Us in Our Mission'}
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty'>
              {language === 'bn'
                ? 'দ্বীন ইসলামের দাওয়াহ, শিক্ষা ও সংস্কৃতির প্রচার প্রসার এবং আদর্শ সমাজ বিনির্মাণে আপনার আর্থিক ও সার্বিক সহযোগিতা আমাদের একান্ত প্রয়োজন। জাযাকাল্লাহু খাইরান।'
                : 'Your financial and overall cooperation is essential to promote the Dawah, education, and culture of Islam, and to build an ideal society. Jazakallahu Khairan.'}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button
                onClick={handleBecomeMember}
                className='px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors'
              >
                {language === 'bn' ? 'আমাদের ভাই হোন' : 'Be our Brother'}
              </button>
              <button
                onClick={handleDonateNow}
                className='px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors'
              >
                {language === 'bn' ? 'দান করুন' : 'Donate Now'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
