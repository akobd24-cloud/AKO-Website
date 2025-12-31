'use client';

import { useLanguage } from '@/lib/language-context';

export function GallerySection() {
  const { language } = useLanguage();

  const content = {
    bn: {
      title: 'ছবিসমূহ',
      description:
        'দ্বীন, কওম ও যমীনের জন্য পরিচালিত কার্যক্রসমূহের প্রাণবন্ত ছবিসমূহ',
      images: [
        { alt: 'তাফসিরুল কুরআন মাহফিল ' },
        { alt: 'মসজিদের যুব তালিম সেশন' },
        { alt: 'ইসলাম অবমাননাকারীদের বিরুদ্ধে মানববন্ধন' },
        { alt: 'মাসিক মাজলিস ও ইফতার মাহফিল' },
        { alt: 'আখিরাতের চারাগাছ রোপণ' },
        { alt: 'আহত জুলাই যোদ্ধাদের সহায়তা প্রদান' },
      ],
    },
    en: {
      title: 'Gallery',
      description:
        'Glimpses of our vibrant community working together to serve and make a difference.',
      images: [
        { alt: "Tafsir al-Qur'an Gatherings" },
        { alt: 'Mosque Youth Taalim Session' },
        { alt: 'Protest against Blasphemy' },
        { alt: 'Monthly Majlis and Iftar Gatherings' },
        { alt: "Project 'Saplings for the Hereafter'" },
        { alt: 'Support for the Wounded July Fighters' },
      ],
    },
  };

  const t = content[language];

  const galleryImages = [
    '/gallery/tafsirul-quran-mahfil.jpg',
    '/gallery/mosque-youth-taalim-session.jpg',
    '/gallery/sports-day-2025-group-photo-teams.jpg',
    '/gallery/iftar-mahfil.jpg',
    '/gallery/tree-plantation.jpg',
    '/gallery/july-warrior.jpg',
  ];

  return (
    <section id='gallery' className='py-24 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance'>
            {t.title}
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6' />
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-pretty'>
            {t.description}
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto'>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className='relative aspect-square overflow-hidden rounded-lg group cursor-pointer'
            >
              <img
                src={image || '/placeholder.svg'}
                alt={t.images[index].alt}
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4'>
                <p className='text-white text-sm font-medium'>
                  {t.images[index].alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
