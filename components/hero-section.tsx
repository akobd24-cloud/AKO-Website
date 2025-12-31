'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useJoinForm } from '@/lib/join-form-context';
import { useLanguage } from '@/lib/language-context';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Occupation = 'student' | 'jobHolder' | 'business' | 'other';

export function HeroSection() {
  const { t } = useLanguage();
  const { showJoinForm, setShowJoinForm } = useJoinForm();
  const [fullName, setFullName] = useState('');
  const [occupation, setOccupation] = useState<Occupation>('student');
  const [institution, setInstitution] = useState('');
  const [postName, setPostName] = useState('');
  const [officeName, setOfficeName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [occupationDescription, setOccupationDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [heardAboutUs, setHeardAboutUs] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          occupation,
          institution: occupation === 'student' ? institution : '',
          postName: occupation === 'jobHolder' ? postName : '',
          officeName: occupation === 'jobHolder' ? officeName : '',
          businessName: occupation === 'business' ? businessName : '',
          occupationDescription:
            occupation === 'other' ? occupationDescription : '',
          email,
          phone,
          bloodGroup,
          heardAboutUs,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed');
      }

      setStatusType('success');
      setStatusMessage(t('join.form.success'));

      // Clear form
      setFullName('');
      setOccupation('student');
      setInstitution('');
      setPostName('');
      setOfficeName('');
      setBusinessName('');
      setOccupationDescription('');
      setEmail('');
      setPhone('');
      setBloodGroup('');
      setHeardAboutUs('');
    } catch (error) {
      console.error(error);
      setStatusType('error');
      setStatusMessage(t('join.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='home'
      className='relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-8'
    >
      {/* Background Image with Blur */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/31st-2025.jpg'
          alt='Al-Khidmah Organization'
          fill
          priority
          className='object-cover scale-110'
          style={{ filter: 'blur(2px)' }}
        />
      </div>

      <div className='absolute inset-0 z-[1] bg-gradient-to-r from-[rgba(10,25,20,0.85)] via-[rgba(15,35,28,0.65)] to-[rgba(20,45,35,0.45)]' />

      {/* Additional Blur Overlay */}
      <div className='absolute inset-0 z-[2] backdrop-blur-[1px]' />

      {/* Content Container */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-4xl mx-auto text-center space-y-6'>
          {/* Main Heading */}
          <h1 className='font-serif z-10 text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up text-balance drop-shadow-lg'>
            {t('hero.title')}
          </h1>

          {/* Primary Subtitle */}
          <p className='font-semibold z-10 text-xl md:text-2xl text-emerald-300 animate-fade-in-up drop-shadow-md'>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className='z-10 text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-pretty drop-shadow-md'>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className='z-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up pt-4'>
            <Button
              size='lg'
              className='bg-emerald-600 hover:bg-emerald-700 text-white group shadow-lg hover:shadow-xl transition-all duration-300'
              onClick={() => setShowJoinForm(!showJoinForm)}
            >
              {t('hero.cta.primary')}
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Button>

            <Button
              size='lg'
              variant='outline'
              className='border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg'
            >
              <Link href={'/about'}> {t('hero.cta.secondary')}</Link>
            </Button>
          </div>
        </div>

        {showJoinForm && (
          <div className='max-w-3xl mx-auto mt-10 bg-white/95 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-sm border border-emerald-100 animate-fade-in-up'>
            <div className='text-left mb-6'>
              <h2 className='font-serif text-2xl md:text-3xl font-bold text-emerald-900 mb-2'>
                {t('join.form.title')}
              </h2>
              <p className='text-emerald-800/80 text-sm md:text-base'>
                {t('join.form.description')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5 text-left'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.fullName')} *
                  </label>
                  <Input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder={t('join.form.fullNamePlaceholder')}
                    className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                  />
                </div>

                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.occupation')} *
                  </label>
                  <select
                    className='w-full h-10 rounded-md border border-emerald-200 bg-white/80 px-3 text-sm text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    value={occupation}
                    onChange={(e) =>
                      setOccupation(e.target.value as Occupation)
                    }
                    required
                  >
                    <option value='student'>
                      {t('join.form.occupation.student')}
                    </option>
                    <option value='jobHolder'>
                      {t('join.form.occupation.jobHolder')}
                    </option>
                    <option value='business'>
                      {t('join.form.occupation.business')}
                    </option>
                    <option value='other'>
                      {t('join.form.occupation.other')}
                    </option>
                  </select>
                </div>
              </div>

              {occupation === 'student' && (
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.institution')} *
                  </label>
                  <Input
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    required
                    placeholder={t('join.form.institutionPlaceholder')}
                    className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                  />
                </div>
              )}

              {occupation === 'jobHolder' && (
                <div className='grid md:grid-cols-2 gap-4'>
                  <div className='space-y-1.5'>
                    <label className='text-sm font-medium text-emerald-900'>
                      {t('join.form.postName')} *
                    </label>
                    <Input
                      value={postName}
                      onChange={(e) => setPostName(e.target.value)}
                      required
                      placeholder={t('join.form.postNamePlaceholder')}
                      className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                    />
                  </div>
                  <div className='space-y-1.5'>
                    <label className='text-sm font-medium text-emerald-900'>
                      {t('join.form.officeName')} *
                    </label>
                    <Input
                      value={officeName}
                      onChange={(e) => setOfficeName(e.target.value)}
                      required
                      placeholder={t('join.form.officeNamePlaceholder')}
                      className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                    />
                  </div>
                </div>
              )}

              {occupation === 'business' && (
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.businessName')} *
                  </label>
                  <Input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    required
                    placeholder={t('join.form.businessNamePlaceholder')}
                    className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                  />
                </div>
              )}

              {occupation === 'other' && (
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.occupationDescription')} *
                  </label>
                  <textarea
                    value={occupationDescription}
                    onChange={(e) => setOccupationDescription(e.target.value)}
                    required
                    rows={3}
                    placeholder={t(
                      'join.form.occupationDescriptionPlaceholder'
                    )}
                    className='w-full px-3 py-2 rounded-md border border-emerald-200 bg-white/80 text-emerald-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500'
                  />
                </div>
              )}

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.email')} *
                  </label>
                  <Input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={t('join.form.emailPlaceholder')}
                    className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                  />
                </div>

                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.phone')} *
                  </label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder={t('join.form.phonePlaceholder')}
                    className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.bloodGroup')} *
                  </label>
                  <select
                    className='w-full h-10 rounded-md border border-emerald-200 bg-white/80 px-3 text-sm text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    required
                  >
                    <option value=''>
                      {t('join.form.bloodGroup.placeholder')}
                    </option>
                    <option value='A+'>A+</option>
                    <option value='A-'>A-</option>
                    <option value='B+'>B+</option>
                    <option value='B-'>B-</option>
                    <option value='AB+'>AB+</option>
                    <option value='AB-'>AB-</option>
                    <option value='O+'>O+</option>
                    <option value='O-'>O-</option>
                  </select>
                </div>

                <div className='space-y-1.5'>
                  <label className='text-sm font-medium text-emerald-900'>
                    {t('join.form.heardAboutUs')} *
                  </label>
                  <Input
                    value={heardAboutUs}
                    onChange={(e) => setHeardAboutUs(e.target.value)}
                    required
                    placeholder={t('join.form.heardAboutUsPlaceholder')}
                    className='bg-white/80 border-emerald-200 focus-visible:ring-emerald-500'
                  />
                </div>
              </div>

              {statusMessage && (
                <div
                  className={`text-sm rounded-md px-3 py-2 ${
                    statusType === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <div className='flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-2'>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8'
                >
                  {isSubmitting
                    ? t('join.form.submitting')
                    : t('join.form.submit')}
                </Button>
                <button
                  type='button'
                  onClick={() => setShowJoinForm(false)}
                  className='text-sm text-emerald-900/80 hover:text-emerald-900 underline-offset-2 hover:underline'
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce'>
        <svg
          className='w-6 h-6 text-white/50'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </div>
    </section>
  );
}
