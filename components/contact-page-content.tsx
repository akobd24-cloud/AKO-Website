'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/lib/language-context';
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from 'lucide-react';
import React, { useState } from 'react';

export function ContactPageContent() {
  const { language, t } = useLanguage();

  const contactInfo = {
    address: {
      bn: '০১০০ শহীদ আবুল কাসেম সড়ক,থানাপাড়া, কুষ্টিয়া, খুলনা, বাংলাদেশ',
      en: '0100 Shaheed Abul Kashem Road, Thanapara, Kushtia,Khulna, Bangladesh',
    },
    phone: '+8801304212226',
    email: 'akobd24@gmail.com',
    hours: {
      bn: 'শনিবার - বৃহস্পতিবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০',
      en: 'Saturday - Thursday: 9:00 AM - 6:00 PM',
    },
  };

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (res.ok) {
        setSuccess(
          language === 'bn'
            ? 'আপনার বার্তা পাঠানো হয়েছে!'
            : 'Your message has been sent!'
        );
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setError(
          result.error ||
            (language === 'bn'
              ? 'বার্তা পাঠাতে ব্যর্থ!'
              : 'Failed to send message!')
        );
      }
    } catch {
      setError(
        language === 'bn' ? 'বার্তা পাঠাতে ব্যর্থ!' : 'Failed to send message!'
      );
    }
    setLoading(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className='pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center max-w-3xl mx-auto'>
            <h1 className='font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance'>
              {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
            </h1>
            <div className='w-24 h-1 bg-primary mx-auto mb-6' />
            <p className='text-lg md:text-xl text-muted-foreground text-pretty'>
              {language === 'bn'
                ? 'আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহযোগিতার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সেবায় সর্বদা প্রস্তুত।'
                : 'Reach out to us for any questions, suggestions, or collaboration. We are always ready to serve you.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {/* Contact Information Cards */}
            <div className='lg:col-span-1 space-y-6'>
              {/* Address Card */}
              <Card className='border-primary/20 hover:border-primary/40 transition-colors'>
                <CardContent className='p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <MapPin className='w-7 h-7 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-foreground mb-2'>
                        {language === 'bn' ? 'ঠিকানা' : 'Address'}
                      </h3>
                      <p className='text-muted-foreground'>
                        {language === 'bn'
                          ? contactInfo.address.bn
                          : contactInfo.address.en}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone Card */}
              <Card className='border-primary/20 hover:border-primary/40 transition-colors'>
                <CardContent className='p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Phone className='w-7 h-7 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-foreground mb-2'>
                        {language === 'bn' ? 'ফোন' : 'Phone'}
                      </h3>
                      <p className='text-muted-foreground'>
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className='border-primary/20 hover:border-primary/40 transition-colors'>
                <CardContent className='p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Mail className='w-7 h-7 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-foreground mb-2'>
                        {language === 'bn' ? 'ইমেইল' : 'Email'}
                      </h3>
                      <p className='text-muted-foreground break-all'>
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours Card */}
              <Card className='border-primary/20 hover:border-primary/40 transition-colors'>
                <CardContent className='p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Clock className='w-7 h-7 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-foreground mb-2'>
                        {language === 'bn' ? 'অফিস সময়' : 'Office Hours'}
                      </h3>
                      <p className='text-muted-foreground text-sm'>
                        {language === 'bn'
                          ? contactInfo.hours.bn
                          : contactInfo.hours.en}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className='border-primary/20'>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg text-foreground mb-4'>
                    {language === 'bn' ? 'সামাজিক মাধ্যম' : 'Social Media'}
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
                        className='rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent'
                      >
                        <Facebook className='w-5 h-5' />
                      </Button>
                    </a>
                    <Button
                      size='icon'
                      variant='outline'
                      className='rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent'
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
                        className='rounded-full hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent'
                      >
                        <Youtube className='w-5 h-5' />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <Card className='border-primary/20'>
                <CardContent className='p-8 md:p-10'>
                  <div className='mb-8'>
                    <h2 className='font-serif text-3xl font-bold text-foreground mb-3'>
                      {language === 'bn'
                        ? 'আমাদের কাছে লিখুন'
                        : 'Send Us a Message'}
                    </h2>
                    <p className='text-muted-foreground'>
                      {language === 'bn'
                        ? 'নিচের ফর্মটি পূরণ করুন এবং আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'
                        : 'Fill out the form below and we will get back to you soon.'}
                    </p>
                  </div>

                  <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='grid md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <label
                          htmlFor='name'
                          className='text-sm font-medium text-foreground'
                        >
                          {language === 'bn' ? 'পূর্ণ নাম *' : 'Full Name *'}
                        </label>
                        <Input
                          id='name'
                          value={form.name}
                          onChange={handleChange}
                          placeholder={
                            language === 'bn'
                              ? 'আপনার নাম লিখুন'
                              : 'Enter your name'
                          }
                          className='h-12'
                          required
                        />
                      </div>

                      <div className='space-y-2'>
                        <label
                          htmlFor='phone'
                          className='text-sm font-medium text-foreground'
                        >
                          {language === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                        </label>
                        <Input
                          id='phone'
                          value={form.phone}
                          onChange={handleChange}
                          placeholder={
                            language === 'bn'
                              ? 'আপনার ফোন নম্বর'
                              : 'Your phone number'
                          }
                          className='h-12'
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='email'
                        className='text-sm font-medium text-foreground'
                      >
                        {language === 'bn' ? 'ইমেইল *' : 'Email *'}
                      </label>
                      <Input
                        id='email'
                        type='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder={
                          language === 'bn'
                            ? 'আপনার ইমেইল ঠিকানা'
                            : 'Your email address'
                        }
                        className='h-12'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='subject'
                        className='text-sm font-medium text-foreground'
                      >
                        {language === 'bn' ? 'বিষয় *' : 'Subject *'}
                      </label>
                      <Input
                        id='subject'
                        value={form.subject}
                        onChange={handleChange}
                        placeholder={
                          language === 'bn' ? 'বিষয় লিখুন' : 'Enter subject'
                        }
                        className='h-12'
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='message'
                        className='text-sm font-medium text-foreground'
                      >
                        {language === 'bn' ? 'বার্তা *' : 'Message *'}
                      </label>
                      <textarea
                        id='message'
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        className='w-full px-4 py-3 border border-input rounded-md bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-ring'
                        placeholder={
                          language === 'bn'
                            ? 'আপনার বার্তা লিখুন...'
                            : 'Write your message...'
                        }
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
                      className='w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg gap-2'
                      disabled={loading}
                    >
                      <Send className='w-5 h-5' />
                      {loading
                        ? language === 'bn'
                          ? 'পাঠানো হচ্ছে...'
                          : 'Sending...'
                        : language === 'bn'
                        ? 'বার্তা পাঠান'
                        : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-12 bg-muted/30'>
        <div className='container mx-auto px-4'>
          <Card className='overflow-hidden max-w-7xl mx-auto'>
            <CardContent className='p-0'>
              <div className='w-full h-[400px] bg-muted flex items-center justify-center'>
                <div className='text-center'>
                  <MapPin className='w-16 h-16 text-muted-foreground mx-auto mb-4' />
                  <p className='text-muted-foreground'>
                    {language === 'bn'
                      ? 'মানচিত্র এখানে প্রদর্শিত হবে'
                      : 'Map will be displayed here'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
