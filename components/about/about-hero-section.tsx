'use client';

import Image from 'next/image';

type Language = 'bn' | 'en';

export function AboutHeroSection({ language }: { language: Language }) {
  return (
    <section className='relative pt-32 pb-20 overflow-hidden'>
      <div className='absolute inset-0 islamic-pattern opacity-10' />
      <div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-block mb-6'>
            <Image
              src='/images/image.png'
              alt='Al-Khidmah Organization'
              width={100}
              height={100}
              className='object-contain'
            />
          </div>
          <h1 className='font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance'>
            {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
          </h1>
          <div className='w-32 h-1 bg-primary mx-auto mb-8' />
          <p className='text-xl text-muted-foreground leading-relaxed text-pretty'>
            {language === 'bn'
              ? 'আল-খিদমাহ অর্গানাইজেশন দ্বীন ইসলাম, মুসলিম কওম ও বাংলার যমীনের খিদমাহ (সেবা) এর জন্য এবং ইসলামী আদর্শ সমাজ বিনির্মাণে নিবেদিত একটি ধর্মীয় সামাজিক সংগঠন। ২০১৮ সালের সেপ্টেম্বরে মুহাম্মাদ হৃদয় হাসান কুষ্টিয়া শহরের থানাপাড়া এলাকার মুসলিম কিশোর-তরুণ-যুবকদের সংগঠিত করা এবং তাঁদের সম্মিলিত প্রচেষ্টার মাধ্যমে এটি প্রতিষ্ঠা করেন। হাবীবুল্লাহ, ইমামুল মুরসালিন, খাতামুন নাবিয়্যিন, নাবিয়্যুল মালহামা ও রহমাতুল্লিল আলামিন মহানবী মুহাম্মাদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম)-এর পদাঙ্ক অনুসরণ করে ইসলামী দাওয়াহ-শিক্ষা-সংস্কৃতির প্রচার প্রসার, আর্তমানবতার সেবা, যুব উন্নয়ন, সমাজ-সংস্কার, মহোত্তম নীতিচেতনার সঞ্চার, সর্বোত্তম আখলাক ও পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন; সর্বোপরি একটি আদর্শ ইসলামী সমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে। কুরআন ও সুন্নাহ ভিত্তিক জীবন, প্রজন্ম ও সমাজ গঠন করা এবং বিশুদ্ধ ইলমের প্রচার ও বিস্তার আল-খিদমাহ অর্গানাইজেশনের অন্যতম লক্ষ্য। সালাফে সালিহীনের পথ ধরে কুরআন ও সুন্নাহ ভিত্তিক মধ্যমপন্থা অবলম্বন করা আমাদের নীতি।'
              : "Al-Khidmah Organization is a religious and social organization dedicated to the khidmah (service) of Deen Islam, the Muslim qawm, and the land of Bengal, as well as to building an ideal Islamic society. It was founded in September 2018 by Muhammad Hridoy Hasan with the aim of organizing Muslim adolescents, youth, and young adults of the Thanapara area of Kushtia city and working collectively with them. Following the footsteps of Habibullah, Imamul Mursalin, Khatamun Nabiyyin, Nabiyyul Malhamah, and Rahmatullil 'Alamin — the great Nabi Muhammad (Sallallahu 'Alaihi wa Sallam) — the organization continuously carries out various programs for the promotion and expansion of Islamic da'wah, education, and culture; the service of humanity; youth development; social reform; instilling the highest moral consciousness; and developing the best akhlaq and a pure mindset. Above all, it strives with utmost effort to establish an ideal Islamic society. Building lives, generations, and society based on the Qur'an and Sunnah, and the propagation and expansion of authentic 'ilm, are among the core objectives of Al-Khidmah Organization. Following the path of the Salaf-e-Salihin, adhering to Qur'an and Sunnah-based moderation is our principle."}
          </p>
        </div>
      </div>
    </section>
  );
}

