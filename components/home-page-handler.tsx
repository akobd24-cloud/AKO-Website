'use client';

import { useJoinForm } from '@/lib/join-form-context';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function HomePageHandler() {
  const searchParams = useSearchParams();
  const { setShowJoinForm } = useJoinForm();

  useEffect(() => {
    const join = searchParams.get('join');
    if (join === 'true') {
      // Scroll to hero section and show join form
      setTimeout(() => {
        const heroSection = document.getElementById('home');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setShowJoinForm(true);
      }, 300);
    }

    // Handle hash navigation for donation form
    const hash = window.location.hash;
    if (hash === '#donation-form') {
      setTimeout(() => {
        const donationForm = document.getElementById('donation-form');
        if (donationForm) {
          donationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [searchParams, setShowJoinForm]);

  return null;
}

