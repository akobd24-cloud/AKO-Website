'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useJoinForm } from '@/lib/join-form-context';
import { useLanguage } from '@/lib/language-context';
import { Building, HandHeart, Heart, Users } from 'lucide-react';

export function DonationSection() {
  const { language } = useLanguage();
  const { setShowJoinForm } = useJoinForm();

  const handleBecomeMember = () => {
    // Scroll to hero section
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Set showJoinForm to true after a small delay to ensure scroll has started
      setTimeout(() => {
        setShowJoinForm(true);
      }, 300);
    }
  };

  const handleDonateNow = () => {
    // Scroll to donation form section
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
      donationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const content = {
    bn: {
      title: 'আমাদের ভাই হোন',
      description:
        "বাংলার যমীনের মুসলিম কওমের নবজাগরণের পথচলায় আপনার দু'আ, ভালোবাসা, সহযোগিতা ও পরামর্শ প্রদান করে আপনিও হোন এই অভিযাত্রার  অংশ।",
      options: [
        {
          title: 'সাধারণ তহবিল',
          description: 'আমাদের সকল উদ্যোগ ও কার্যক্রম পরিচালনার জন্য',
        },
        {
          title: 'দাতব্য তহবিল',
          description: 'অসহায়, দরিদ্র, ভুক্তভোগী ব্যক্তি ও পরিবারের জন্য',
        },
        {
          title: 'যুব কর্মসূচি',
          description: 'কুরআনি প্রজন্ম গঠনের জন্য',
        },
        {
          title: 'অবকাঠামো',
          description:
            'অফিস, লাইব্রেরী, গবেষণাকেন্দ্র ও শিক্ষা প্রতিষ্ঠান পরিচালনা ও রক্ষণাবেক্ষণের জন্য',
        },
      ],
      makeaDifference: 'পরিবর্তনের জন্য',
      donationHelp:
        'দ্বীন ইসলামের দাওয়াহ, শিক্ষা ও সংস্কৃতির প্রচার প্রসার এবং আদর্শ সমাজ বিনির্মাণে আপনার আর্থিক ও সার্বিক সহযোগিতা আমাদের একান্ত প্রয়োজন। জাযাকাল্লাহু খাইরান।',
      donateNow: 'এখনই দান করুন',
      becomeMember: 'আমাদের ভাই হোন',
    },
    en: {
      title: 'Be our Brother',
      description:
        'Your generous contributions help us continue serving the community and making a positive impact. Every donation counts.',
      options: [
        {
          title: 'General Fund',
          description: 'Support all our programs and initiatives',
        },
        {
          title: 'Charity Fund',
          description: 'Help families and individuals in need',
        },
        {
          title: 'Youth Programs',
          description: 'Invest in the future generation',
        },
        {
          title: 'Infrastructure',
          description: 'Build and maintain community spaces',
        },
      ],
      makeaDifference: 'Make a Difference Today',
      donationHelp:
        'Your donation helps us continue our mission of serving the community through faith-based programs and charitable initiatives.',
      donateNow: 'Donate Now',
      becomeMember: 'Be our Brother',
    },
  };

  const t = content[language];

  const donationIcons = [Heart, HandHeart, Users, Building];

  return (
    <section className='py-24 relative overflow-hidden'>
      <div className='absolute inset-0 bg-primary/5 islamic-pattern' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
              {t.title}
            </h2>
            <div className='w-24 h-1 bg-primary mx-auto mb-6' />
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
              {t.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {t.options.map((option, index) => {
              const Icon = donationIcons[index];
              return (
                <Card
                  key={index}
                  className='text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group'
                >
                  <CardContent className='pt-8 pb-6 space-y-3'>
                    <div className='w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <Icon className='w-8 h-8 text-primary' />
                    </div>
                    <h3 className='font-serif text-lg font-bold text-foreground'>
                      {option.title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className='bg-card border-2 border-primary/20'>
            <CardContent className='p-8 md:p-12 text-center space-y-6'>
              <div className='space-y-4'>
                <h3 className='font-serif text-2xl font-bold text-foreground'>
                  {t.makeaDifference}
                </h3>
                <p className='text-muted-foreground text-balance max-w-xl mx-auto'>
                  {t.donationHelp}
                </p>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'>
                <Button
                  size='lg'
                  className='bg-primary hover:bg-primary/90 text-primary-foreground min-w-[200px]'
                  onClick={handleDonateNow}
                >
                  {t.donateNow}
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-2 min-w-[200px] bg-transparent'
                  onClick={handleBecomeMember}
                >
                  {t.becomeMember}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
