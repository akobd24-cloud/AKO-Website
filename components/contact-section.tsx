'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/language-context';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import React, { useState } from 'react';

export function ContactSection() {
  const { language } = useLanguage();

  const content = {
    bn: {
      title: 'যোগাযোগ করুন',
      description:
        'প্রশ্ন আছে বা আরও জানতে চান? আমরা আপনার কাছ থেকে শুনতে চাই।',
      address: 'ঠিকানা',
      addressLine1: '০১০০ শহীদ আবুল কাসেম সড়ক,থানাপাড়া',
      addressLine2: 'কুষ্টিয়া, খুলনা, বাংলাদেশ',
      phone: 'ফোন',
      email: 'ইমেইল',
      followUs: 'আমাদের অনুসরণ করুন',
      fullName: 'পুরো নাম',
      namePlaceholder: 'আপনার নাম লিখুন',
      emailLabel: 'ইমেইল',
      emailPlaceholder: 'আপনার ইমেইল লিখুন',
      subject: 'বিষয়',
      subjectPlaceholder: 'এটি কিসের বিষয়ে?',
      message: 'বার্তা',
      messagePlaceholder: 'আপনার বার্তা...',
      sendMessage: 'বার্তা পাঠান',
      sending: 'পাঠানো হচ্ছে...',
      success: 'আপনার বার্তা পাঠানো হয়েছে!',
      error: 'বার্তা পাঠাতে ব্যর্থ!',
    },
    en: {
      title: 'Get in Touch',
      description:
        "Have questions or want to learn more? We'd love to hear from you.",
      address: 'Address',
      addressLine1: 'Kushtia, Khulna',
      addressLine2: 'Bangladesh',
      phone: 'Phone',
      email: 'Email',
      followUs: 'Follow Us',
      fullName: 'Full Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email',
      subject: 'Subject',
      subjectPlaceholder: 'What is this about?',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      success: 'Your message has been sent!',
      error: 'Failed to send message!',
    },
  };

  const t = content[language];

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, phone: '' }),
      });
      const result = await res.json();
      if (res.ok) {
        setSuccess(t.success);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(result.error || t.error);
      }
    } catch {
      setError(t.error);
    }
    setLoading(false);
  };

  return (
    <section id='contact' className='py-24 bg-muted/30'>
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

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <Card>
              <CardContent className='p-8 space-y-6'>
                <div className='space-y-4'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
                      <MapPin className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-foreground mb-1'>
                        {t.address}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {t.addressLine1}
                        <br />
                        {t.addressLine2}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
                      <Phone className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-foreground mb-1'>
                        {t.phone}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {'+8801304212226'}
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
                      <Mail className='w-6 h-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-foreground mb-1'>
                        {t.email}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {'akobd24@gmail.com'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='pt-6 border-t border-border'>
                  <h3 className='font-semibold text-foreground mb-4'>
                    {t.followUs}
                  </h3>
                  <div className='flex gap-3'>
                    <a
                      href="https://www.facebook.com/ako.kst.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Button
                        size='icon'
                        variant='outline'
                        className='rounded-full bg-transparent'
                      >
                        <Facebook className='w-5 h-5' />
                      </Button>
                    </a>
                    <Button
                      size='icon'
                      variant='outline'
                      className='rounded-full bg-transparent'
                      disabled
                    >
                      <Instagram className='w-5 h-5' />
                    </Button>
                    <a
                      href="https://www.youtube.com/@AlKhidmahOrganization"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <Button
                        size='icon'
                        variant='outline'
                        className='rounded-full bg-transparent'
                      >
                        <Youtube className='w-5 h-5' />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className='p-8'>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='space-y-2'>
                  <label
                    htmlFor='name'
                    className='text-sm font-medium text-foreground'
                  >
                    {t.fullName}
                  </label>
                  <Input
                    id='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-sm font-medium text-foreground'
                  >
                    {t.emailLabel}
                  </label>
                  <Input
                    id='email'
                    type='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label
                    htmlFor='subject'
                    className='text-sm font-medium text-foreground'
                  >
                    {t.subject}
                  </label>
                  <Input
                    id='subject'
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label
                    htmlFor='message'
                    className='text-sm font-medium text-foreground'
                  >
                    {t.message}
                  </label>
                  <textarea
                    id='message'
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className='w-full px-3 py-2 border border-input rounded-md bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring'
                    placeholder={t.messagePlaceholder}
                    required
                  />
                </div>
                {success && (
                  <div className='p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm'>
                    {success}
                  </div>
                )}
                {error && (
                  <div className='p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm'>
                    {error}
                  </div>
                )}
                <Button
                  type='submit'
                  className='w-full bg-primary hover:bg-primary/90 text-primary-foreground'
                  disabled={loading}
                >
                  {loading ? t.sending : t.sendMessage}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
