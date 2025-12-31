'use client';

import { Button } from '@/components/ui/button';
import { HandHeart } from 'lucide-react';
import { useJoinForm } from '@/lib/join-form-context';
import { useRouter } from 'next/navigation';

type Language = 'bn' | 'en';

export function ActivitiesCTASection({ language }: { language: Language }) {
  const router = useRouter();
  const { setShowJoinForm } = useJoinForm();

  const handleBecomeVolunteer = () => {
    router.push('/?join=true');
  };

  const handleContact = () => {
    router.push('/contact');
  };

  return (
    <section className='py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <div
          className='absolute inset-0'
          style={{ backgroundImage: "url('/islamic-pattern.svg')" }}
        />
      </div>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl mx-auto text-center'>
          <HandHeart className='w-16 h-16 mx-auto mb-6 opacity-90' />
          <h2 className='font-serif text-4xl md:text-5xl font-bold mb-6'>
            {language === 'bn' ? 'আমাদের সাথে যুক্ত হন' : 'Join Us'}
          </h2>
          <p className='text-xl mb-8 opacity-90 leading-relaxed'>
            {language === 'bn'
              ? 'আপনার সময়, দক্ষতা এবং অবদান দিয়ে সমাজের উন্নয়নে অংশীদার হন। একসাথে আমরা পরিবর্তন আনতে পারি।'
              : 'Be a partner in community development with your time, skills, and contributions. Together we can bring change.'}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              onClick={handleBecomeVolunteer}
              className='bg-background text-foreground hover:bg-background/90 text-lg px-8'
            >
              {language === 'bn' ? 'আমাদের ভাই হোন' : 'Be our Brother'}
            </Button>
            <Button
              size='lg'
              onClick={handleContact}
              variant='outline'
              className='border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 bg-transparent'
            >
              {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

