'use client';

import { useLanguage } from '@/lib/language-context';
import { AboutAchievementsSection } from './about/about-achievements-section';
import { AboutCTASection } from './about/about-cta-section';
import { AboutGoalsObjectivesSection } from './about/about-goals-objectives-section';
import { AboutHeroSection } from './about/about-hero-section';
import { AboutLeadershipSection } from './about/about-leadership-section';
import { AboutMissionVisionSection } from './about/about-mission-vision-section';
import { AboutPillarsSection } from './about/about-pillars-section';
import { AboutPrinciplesIdealsSection } from './about/about-principles-ideals-section';
import { AboutValuesSection } from './about/about-values-section';

export function AboutPageContent() {
  const { language } = useLanguage();

  return (
    <main className='min-h-screen bg-background'>
      <AboutHeroSection language={language} />
      {/* <AboutMissionVisionSection language={language} /> */}
      <AboutPrinciplesIdealsSection language={language} />
      <AboutGoalsObjectivesSection language={language} />
      <AboutPillarsSection language={language} />
      {/* <AboutValuesSection language={language} /> */}
      <AboutAchievementsSection language={language} />
      <AboutLeadershipSection language={language} />
      <AboutCTASection language={language} />
    </main>
  );
}
