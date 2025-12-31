'use client';

type Language = 'bn' | 'en';

export function ActivitiesHeroSection({ language }: { language: Language }) {
  return (
    <section className='relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5 overflow-hidden'>
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{ backgroundImage: "url('/islamic-pattern.svg')" }}
        />
      </div>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance'>
            {language === 'bn' ? 'আমাদের কার্যক্রম' : 'Our Activities'}
          </h1>
          <div className='w-32 h-1.5 bg-primary mx-auto mb-8' />
          {/* <p className='text-xl text-muted-foreground leading-relaxed text-pretty'>
            {language === 'bn'
              ? 'সমাজের উন্নয়ন এবং মানুষের কল্যাণে আমাদের বিভিন্ন কার্যক্রম। ইসলামিক শিক্ষা, যুব উন্নয়ন এবং সামাজিক সেবায় নিবেদিত।'
              : "Our various activities for community development and people's welfare. Dedicated to Islamic education, youth development, and social service."}
          </p> */}
        </div>
      </div>
    </section>
  );
}

