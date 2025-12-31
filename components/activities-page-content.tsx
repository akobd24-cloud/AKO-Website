'use client';

import { useLanguage } from '@/lib/language-context';
import { AboutAchievementsSection } from './about/about-achievements-section';
import { ActivitiesCTASection } from './activities/activities-cta-section';
import { ActivitiesGridSection } from './activities/activities-grid-section';
import { ActivitiesHeroSection } from './activities/activities-hero-section';
import { ActivitiesUpcomingSection } from './activities/activities-upcoming-section';
import { ProgramsSection } from './programs-section';

export function ActivitiesPageContent() {
  const { language } = useLanguage();

  return (
    <main className='min-h-screen'>
      <ActivitiesHeroSection language={language} />
      <AboutAchievementsSection language={language} />
      {/* <ActivitiesStatsSection language={language} /> */}
      <ActivitiesGridSection language={language} />
      <ActivitiesUpcomingSection language={language} />
      <ProgramsSection />
      <ActivitiesCTASection language={language} />
    </main>
  );
}
