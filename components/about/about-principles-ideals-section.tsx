'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  BookOpen,
  CheckCircle,
  Eye,
  FileCheck,
  Globe,
  Handshake,
  Heart,
  Scale,
  Shield,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react';

type Language = 'bn' | 'en';

export function AboutPrinciplesIdealsSection({
  language,
}: {
  language: Language;
}) {
  const principles = [
    {
      icon: BookOpen,
      title:
        language === 'bn'
          ? 'কুরআন ও সুন্নাহভিত্তিক মূল আদর্শ'
          : 'Foundation Based on Quran and Sunnah',
      description:
        language === 'bn'
          ? 'পবিত্র কুরআন ও আল্লাহর রাসূল মুহাম্মাদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম)-এর সুন্নাহ তথা কর্মনীতিই আস-সুন্নাহ ফাউন্ডেশনের মূল আদর্শ।'
          : 'The Holy Quran and the Sunnah (way of life) of Allah\'s Messenger Muhammad (peace be upon him) are the fundamental ideals of Al-Khidmah Organization.',
    },
    {
      icon: Scale,
      title:
        language === 'bn'
          ? 'মধ্যমপন্থা অবলম্বন'
          : 'Following the Middle Path',
      description:
        language === 'bn'
          ? 'ইসলামের প্রাথমিক যুগের শ্রেষ্ঠ মুসলিমদের অনুসৃত পদ্ধতির আলোকে কুরআন ও সুন্নাহভিত্তিক মধ্যমপন্থা অবলম্বন করা আমাদের নীতি।'
          : 'Our principle is to follow the moderate path based on Quran and Sunnah in light of the methodology followed by the best Muslims of the early Islamic era.',
    },
    {
      icon: Users,
      title:
        language === 'bn'
          ? 'উম্মাহর ঐক্য ও সংহতি'
          : 'Unity and Solidarity of Ummah',
      description:
        language === 'bn'
          ? 'উম্মাহর ঐক্য, সংহতি ও পারস্পরিক ভ্রাতৃত্বের নীতি মেনে চলা।'
          : 'Following the principle of unity, solidarity, and mutual brotherhood of the Ummah.',
    },
    {
      icon: Target,
      title:
        language === 'bn'
          ? 'সামাজিক ও ধর্মীয় মূল্যবোধ'
          : 'Social and Religious Values',
      description:
        language === 'bn'
          ? 'সৎকাজে উৎসাহ দান ও অসৎকাজ থেকে বিরত রাখার মাধ্যমে সামাজিক ও ধর্মীয় মূল্যবোধ সংহতকরণ এবং মানবিক চেতনার জাগরণ।'
          : 'Strengthening social and religious values and awakening human consciousness by encouraging good deeds and preventing evil deeds.',
    },
    {
      icon: Heart,
      title:
        language === 'bn'
          ? 'উদারতা ও সহনশীলতা'
          : 'Tolerance and Generosity',
      description:
        language === 'bn'
          ? 'ইসলামী দাওয়াহ এবং কার্যক্রমের ক্ষেত্রে উগ্রতা বা কঠোরতা পরিহার করে উদারতা ও সহনশীলতার নীতি অবলম্বন করা এবং দাওয়াহ ও অন্যান্য কার্যক্রম পরিচালনায় প্রজ্ঞা, বিচক্ষণতা এবং পরিস্থিতি বিবেচনা করে সিদ্ধান্ত গ্রহণ করা।'
          : 'Adopting the principle of tolerance and generosity, avoiding extremism or harshness in Islamic dawah and activities, and making decisions with wisdom, prudence, and consideration of circumstances in conducting dawah and other activities.',
    },
    {
      icon: Handshake,
      title:
        language === 'bn'
          ? 'মানবতার সেবা'
          : 'Service to Humanity',
      description:
        language === 'bn'
          ? 'আল্লাহর সৃষ্টির প্রতি সহানুভূতিশীল হওয়া এবং মানুষের কল্যাণে কাজ করাকে আল্লাহর সন্তুষ্টির মাধ্যম হিসেবে দেখা।'
          : 'Being compassionate towards Allah\'s creation and viewing work for human welfare as a means of Allah\'s pleasure.',
    },
    {
      icon: Globe,
      title:
        language === 'bn'
          ? 'সকলের জন্য দাওয়াহ ও সেবা'
          : 'Dawah and Service for All',
      description:
        language === 'bn'
          ? 'ধর্ম, বর্ণ, গোত্র নির্বিশেষে সকল মানুষের জন্য দাওয়াহ ও সেবামূলক কার্যক্রম পরিচালনা করা।'
          : 'Conducting dawah and service activities for all people regardless of religion, race, or tribe.',
    },
    {
      icon: Shield,
      title:
        language === 'bn'
          ? 'আমানত হিসেবে সম্পদ'
          : 'Wealth as Trust',
      description:
        language === 'bn'
          ? 'জনগণের প্রদত্ত দান অর্থ ও সম্পদকে আল্লাহ তাআলার পক্ষ থেকে আমানত হিসেবে গণ্য করা এবং এর যথাযথ ব্যবহার নিশ্চিত করা।'
          : 'Considering the donated money and wealth from the people as a trust from Allah the Almighty and ensuring its proper use.',
    },
    {
      icon: Eye,
      title:
        language === 'bn'
          ? 'স্বচ্ছতা নিশ্চিতকরণ'
          : 'Ensuring Transparency',
      description:
        language === 'bn'
          ? 'সংগৃহীত তহবিল এবং ব্যয়ের প্রতিটি হিসাবের ক্ষেত্রে স্বচ্ছতা নিশ্চিত করা।'
          : 'Ensuring transparency in every account of collected funds and expenditures.',
    },
    {
      icon: UserCheck,
      title:
        language === 'bn'
          ? 'জবাবদিহিতা'
          : 'Accountability',
      description:
        language === 'bn'
          ? 'পরিচালনা পর্ষদ এবং কর্মীদের সকল কাজের জবাবদিহিতা নিশ্চিত করা।'
          : 'Ensuring accountability of all work of the management board and staff.',
    },
    {
      icon: FileCheck,
      title:
        language === 'bn'
          ? 'নিরীক্ষণের ব্যবস্থা'
          : 'Audit System',
      description:
        language === 'bn'
          ? 'প্রতিষ্ঠানের অভ্যন্তরীণ ও বাহ্যিক নিরীক্ষণের ব্যবস্থা রাখা।'
          : 'Maintaining internal and external audit systems of the organization.',
    },
    {
      icon: Award,
      title:
        language === 'bn'
          ? 'সততা ও নৈতিকতা'
          : 'Honesty and Ethics',
      description:
        language === 'bn'
          ? 'প্রতিষ্ঠানের সকল স্তরের কর্মীদের মধ্যে সর্বোচ্চ সততা ও নৈতিকতার মান বজায় রাখা। কোনো প্রকার দুর্নীতি বা অনিয়মকে প্রশ্রয় না দেওয়া।'
          : 'Maintaining the highest standards of honesty and ethics among all levels of staff in the organization. Not tolerating any form of corruption or irregularities.',
    },
    {
      icon: TrendingUp,
      title:
        language === 'bn'
          ? 'পেশাদারিত্ব ও গুণগত মান'
          : 'Professionalism and Quality',
      description:
        language === 'bn'
          ? 'সকল ক্ষেত্রে পেশাদারিত্ব নিশ্চিত করা; শিক্ষা, দাওয়াহ ও সেবামূলক কার্যক্রমে গুণগত মান বজায় রাখা।'
          : 'Ensuring professionalism in all areas; maintaining quality standards in education, dawah, and service activities.',
    },
    {
      icon: CheckCircle,
      title:
        language === 'bn'
          ? 'নিরপেক্ষতা'
          : 'Neutrality',
      description:
        language === 'bn'
          ? 'যে কোনো সেক্যুলার ডেমোক্রেটিক রাজনৈতিক দল-উপদল বা গোষ্ঠীর প্রভাবমুক্ত থেকে নিরপেক্ষভাবে কাজ করা।'
          : 'Working neutrally, free from the influence of any secular democratic political party, faction, or group.',
    },
    {
      icon: Users,
      title:
        language === 'bn'
          ? 'তরুণদের দক্ষতা বৃদ্ধি'
          : 'Enhancing Youth Skills',
      description:
        language === 'bn'
          ? 'তরুণদের দক্ষ ও যোগ্য করে গড়ে তোলার জন্য তাদের নিয়মিত প্রশিক্ষণের মাধ্যমে কর্মদক্ষতা বৃদ্ধি করা।'
          : 'Enhancing the work efficiency of youth through regular training to make them skilled and capable.',
    },
    {
      icon: Heart,
      title:
        language === 'bn'
          ? 'অগ্রাধিকারমূলক সেবা'
          : 'Priority Service',
      description:
        language === 'bn'
          ? 'সেবা কার্যক্রমের ক্ষেত্রে দরিদ্র, অসহায়, এতিম, বিধবা এবং দুর্যোগ কবলিত মানুষকে অগ্রাধিকার দেওয়া।'
          : 'Giving priority to the poor, helpless, orphans, widows, and disaster-affected people in service activities.',
    },
  ];

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5' />
      <div className='absolute inset-0 islamic-pattern opacity-10' />
      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {language === 'bn' ? 'নীতি-আদর্শ' : 'Principles & Ideals'}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {language === 'bn'
              ? 'যে নীতিমালা ও আদর্শের ওপর আমাদের সংগঠন প্রতিষ্ঠিত'
              : 'The principles and ideals on which our organization is founded'}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto'>
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card
                key={index}
                className='border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group'
              >
                <CardContent className='pt-8 pb-6 space-y-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                    <Icon className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='font-serif text-xl font-bold text-foreground'>
                    {principle.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed text-pretty'>
                    {principle.description}
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

