'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.programs': 'কার্যক্রম',
    'nav.events': 'ইভেন্ট',
    'nav.gallery': 'গ্যালারি',
    'nav.blog': 'ব্লগ',
    'nav.contact': 'যোগাযোগ',
    'nav.donate': 'দান করুন',

    // Hero Section
    'hero.title': 'আল-খিদমাহ অর্গানাইজেশন',
    'hero.subtitle': 'দ্বীন, কওম ও যমীনের জন্য',
    'hero.description':
      "'আল-খিদমাহ অর্গানাইজেশন' দ্বীন ইসলাম, মুসলিম কওম ও বাংলার যমীনের খিদমাহ (সেবা) এর জন্য এবং ইসলামী আদর্শ সমাজ বিনির্মাণে নিবেদিত একটি ধর্মীয় সামাজিক সংগঠন",
    'hero.cta.primary': 'আমাদের ভাই হোন',
    'hero.cta.secondary': 'আরও জানুন',

    // About Section
    'about.title': 'আমাদের সম্পর্কে',
    'about.subtitle': 'সেবা ও ঈমানের পথে',
    'about.description':
      'আল-খিদমাহ অর্গানাইজেশন দ্বীন ইসলাম, মুসলিম কওম ও বাংলার যমীনের খিদমাহ (সেবা) এর জন্য এবং ইসলামী আদর্শ সমাজ বিনির্মাণে নিবেদিত একটি ধর্মীয় সামাজিক সংগঠন। ২০১৮ সালের সেপ্টেম্বরে মুহাম্মাদ হৃদয় হাসান কুষ্টিয়া শহরের থানাপাড়া এলাকার মুসলিম কিশোর-তরুণ-যুবকদের সংগঠিত করা এবং তাঁদের সম্মিলিত প্রচেষ্টার মাধ্যমে এটি প্রতিষ্ঠা করেন। হাবীবুল্লাহ, ইমামুল মুরসালিন, খাতামুন নাবিয়্যিন, নাবিয়্যুল মালহামা ও রহমাতুল্লিল আলামিন মহানবী মুহাম্মাদ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম)-এর পদাঙ্ক অনুসরণ করে ইসলামী দাওয়াহ-শিক্ষা-সংস্কৃতির প্রচার প্রসার, আর্তমানবতার সেবা, যুব উন্নয়ন, সমাজ-সংস্কার, মহোত্তম নীতিচেতনার সঞ্চার, সর্বোত্তম আখলাক ও পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন; সর্বোপরি একটি আদর্শ ইসলামী সমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে। কুরআন ও সুন্নাহ ভিত্তিক জীবন, প্রজন্ম ও সমাজ গঠন করা এবং বিশুদ্ধ ইলমের প্রচার ও বিস্তার আল-খিদমাহ অর্গানাইজেশনের অন্যতম লক্ষ্য। সালাফে সালিহীনের পথ ধরে কুরআন ও সুন্নাহ ভিত্তিক মধ্যমপন্থা অবলম্বন করা আমাদের নীতি।',
    'about.pillar1.title': 'দাওয়াহ ও শিক্ষা',
    'about.pillar1.description':
      'কুরআন ও সুন্নাহভিত্তিক বিশুদ্ধ ইসলামের দাওয়াহ, শিক্ষা, সংস্কৃতি ও মূল্যবোধের প্রচার প্রসার করা',
    'about.pillar2.title': 'সামাজিক সেবা',
    'about.pillar2.description':
      'দ্বীন, কওম (জাতি) ও যমীনের (দেশের) স্বার্থে বিভিন্ন জনসচেতনতা ও জনকল্যাণে সামাজিক সেবামূলক কার্যক্রম পরিচালনা করা',
    'about.pillar3.title': 'যুব উন্নয়ন',
    'about.pillar3.description':
      'আধুনিক নানাবিধ কঠিন চ্যালেঞ্জ মোকাবিলায় তরুণদের দক্ষতা বৃদ্ধি ও নেতৃত্ব বিকাশে প্রশিক্ষণ',
    'about.pillar4.title': 'আদর্শ সমাজ বিনির্মাণ',
    'about.pillar4.description':
      'ওহীর আলোকে মাসজিদকেন্দ্রিক আদর্শ সমাজ বিনির্মাণ করা যেখানে শান্তি ও নিরাপত্তা, ন্যায়পরায়নতা ও কল্যাণ সর্বত্র ছড়িয়ে থাকে।',

    // Programs Section
    'programs.title': 'বিগত কার্যক্রমসমূহ',
    'programs.subtitle':
      'আল-খিদমাহ অর্গানাইজেশন প্রতিষ্ঠালগ্ন থেকে এখন পর্যন্ত দ্বীন, কওম ও যমীনের জন্য যেসকল কার্যক্রমসমূহ সুষ্ঠুভাবে পরিচালনা করেছে।',
    'programs.quran.title': 'তাফসিরুল কুরআন মাহফিল',
    'programs.quran.description':
      'সর্ব সাধারনের নিকট দ্বীন ইসলামের বার্তা পৌছে দেওয়ার লক্ষ্যে আয়োজিত তাফসিরুল কুরান মাহফিল',
    'programs.scholarship.title': 'মুসলিম ইয়ুথ কনফারেন্স কুষ্টিয়া, ২০২৪',
    'programs.scholarship.description':
      'সুদীর্ঘ ইসলামী বিপ্লবকে বুঝতে ও কর্মপদ্ধতি জানতে সারাদিন ব্যাপি সেমিনার ও কনফারেন্স',
    'programs.health.title': 'স্পোর্টস ডে',
    'programs.health.description':
      'শিশু কিশোরদের হালাল বিনোদন এর লক্ষে স্পোর্টস ডে কর্মসূচি',
    'programs.food.title': 'মাসিক মাজলিস ও ইফতার মাহফিল',
    'programs.food.description':
      'সাথী ভাই মধ্যে ভাতৃত্বের বন্ধন মজবুত করার লক্ষে ইফতার মাহফিল ও মাসিক মাজলিসের আয়োজন',
    'programs.skills.title': 'প্রজেক্ট আখিরাতের চারাগাছ',
    'programs.skills.description':
      'পশ্চিমা ধর্মহীন ভোগবাদী ও পুঁজিবাদী মতাদর্শের প্রভাবে সৃষ্ট পরিবেশ বিপর্যয় রোধে দ্বীন ইসলামের শিক্ষা ও নির্দেশনা বাস্তবায়নের মাধ্যমে আখিরাত সমৃদ্ধ করতে কুষ্টিয়া জেলার অন্যতম সামাজিক সংগঠন আল খিদমাহ অর্গানাইজেশনের বৃক্ষরোপণ ও বৃক্ষ বিতরণ প্রজেক্ট',
    'programs.orphan.title': 'আহত জুলাই যোদ্ধাদের সহায়তা প্রদান',
    'programs.orphan.description':
      'বাংলাদেশের জালিম স্বৈরাচারি প্রধানমন্ত্রী খুনি হাসিনার বিরুদ্ধে ২০২৪ সালের জুলাই মাসে ঘটে যাওয়া রক্তক্ষয়ী জুলাই অভ্যুত্থানের আহত যোদ্ধাদের সহায়তা প্রদান',
    'programs.antiThirteenth.title': 'এন্টি-থার্টিফার্স্ট নাইট ক্যাম্পেইন ২০২৫',
    'programs.antiThirteenth.description':
      'তথাকথিত থার্টি-ফার্স্ট নাইট বা হ্যাপি নিউ ইয়ার নামক আত্মপরিচয় বিনষ্টকারী পশ্চিমা জাহিলি সংস্কৃতির উন্মাদনা, মাদকতা ও ধ্বংসাত্মক পরিণতি থেকে কুষ্টিয়ার মুসলিম কিশোর-তরুণ-যুবকদের ফিরিয়ে আনতে আমাদের ক্ষুদ্র প্রচেষ্টা..',
    'programs.learnMore': 'বিস্তারিত জানুন',

    // Events Section
    'events.title': 'আসন্ন ইভেন্ট',
    'events.subtitle': 'আমাদের কার্যক্রমে অংশগ্রহণ করুন',
    'events.viewAll': 'সব ইভেন্ট দেখুন',
    'events.register': 'নিবন্ধন করুন',

    // Gallery Section
    'gallery.title': 'আমাদের কার্যক্রমের ছবি',
    'gallery.subtitle': 'সেবার মুহূর্তগুলো',

    // Donation Section
    'donation.title': 'আমাদের সাথে অংশীদার হন',
    'donation.subtitle': 'আপনার দান পরিবর্তন আনতে পারে',
    'donation.description':
      'আল-খিদমাহর সেবামূলক কার্যক্রমে আপনার দান মানুষের জীবনে আলো ছড়িয়ে দিতে পারে। প্রতিটি টাকা ব্যয় হয় স্বচ্ছতার সাথে।',
    'donation.oneTime': 'এককালীন দান',
    'donation.monthly': 'মাসিক দান',
    'donation.zakat': 'যাকাত',
    'donation.amount': 'দানের পরিমাণ',
    'donation.custom': 'অন্যান্য',
    'donation.donate': 'দান করুন',

    // Contact Section
    'contact.title': 'যোগাযোগ করুন',
    'contact.subtitle': 'আমরা আপনার সেবায় প্রস্তুত',
    'contact.form.title': 'আমাদের কাছে লিখুন',
    'contact.form.name': 'আপনার নাম',
    'contact.form.email': 'ইমেইল',
    'contact.form.phone': 'ফোন নম্বর',
    'contact.form.message': 'বার্তা',
    'contact.form.submit': 'বার্তা পাঠান',
    'contact.info.title': 'যোগাযোগের তথ্য',
    'contact.info.address': 'ঠিকানা',
    'contact.info.phone': 'ফোন',
    'contact.info.email': 'ইমেইল',
    'contact.info.hours': 'কার্যসময়',
    'contact.info.hoursValue': 'রবিবার - বৃহস্পতিবার: ৯:০০ - ১৭:০০',

    // Footer
    'footer.about': 'আমাদের সম্পর্কে',
    'footer.aboutText':
      'আল-খিদমাহ অরগানাইজেশন ইসলামিক মূল্যবোধের ভিত্তিতে সমাজসেবায় নিবেদিত একটি সংগঠন। আমরা শিক্ষা, স্বাস্থ্য ও সামাজিক উন্নয়নে কাজ করি।',
    'footer.quickLinks': 'দ্রুত লিংক',
    'footer.programs': 'কার্যক্রম',
    'footer.contact': 'যোগাযোগ',
    'footer.volunteer': 'স্বেচ্ছাসেবক',
    'footer.newsletter': 'নিউজলেটার',
    'footer.newsletterText':
      'আমাদের কার্যক্রম সম্পর্কে আপডেট পেতে সাবস্ক্রাইব করুন',
    'footer.emailPlaceholder': 'আপনার ইমেইল',
    'footer.subscribe': 'সাবস্ক্রাইব',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
    'footer.madeWith': 'তৈরি করেছেন',

    // Donation Card
    'donationCard.title': 'আপনার সহযোগিতা প্রয়োজন',
    'donationCard.subtitle':
      'আমাদের সেবামূলক কার্যক্রমে অংশীদার হয়ে সমাজ পরিবর্তনে ভূমিকা রাখুন',
    'donationCard.selectAmount': 'দানের পরিমাণ নির্বাচন করুন',
    'donationCard.customAmount': 'অন্য পরিমাণ লিখুন (৳)',
    'donationCard.selectPayment': 'পেমেন্ট পদ্ধতি নির্বাচন করুন',
    'donationCard.paymentDetails': 'পেমেন্ট বিবরণ',
    'donationCard.accountType': 'অ্যাকাউন্ট টাইপ',
    'donationCard.accountNumber': 'অ্যাকাউন্ট নম্বর',
    'donationCard.amountToPay': 'প্রদেয়',
    'donationCard.bankName': 'বাংক নাম',
    'donationCard.accountName': 'অ্যাকাউন্ট নাম',
    'donationCard.branch': 'শাখা',
    'donationCard.routingNumber': 'রাউটিং নম্বর',
    'donationCard.instructions':
      'নির্দেশনা: উপরের নম্বরে পেমেন্ট সম্পন্ন করার পর নিচের বাটনে ক্লিক করে আপনার পেমেন্টের তথ্য জমা দিন।',
    'donationCard.submitButton': 'পেমেন্ট তথ্য জমা দিন',
    'donationCard.taxNote':
      'আল-খিদমাহ ফাউন্ডেশনে দান করলে আপনি ট্যাক্স ছাড় পাবেন।',
    'donationCard.form.title': 'পেমেন্ট তথ্য দিন',
    'donationCard.form.name': 'আপনার নাম',
    'donationCard.form.namePlaceholder': 'আপনার সম্পূর্ণ নাম',
    'donationCard.form.email': 'ইমেইল',
    'donationCard.form.emailPlaceholder': 'আপনার ইমেইল ঠিকানা',
    'donationCard.form.phone': 'ফোন নম্বর',
    'donationCard.form.phonePlaceholder': 'আপনার ফোন নম্বর',
    'donationCard.form.transactionId': 'লেনদেন আইডি',
    'donationCard.form.transactionIdPlaceholder':
      'পেমেন্টের পর প্রাপ্ত লেনদেন আইডি',
    'donationCard.form.submitting': 'জমা দেওয়া হচ্ছে...',
    'donationCard.form.success':
      'পেমেন্ট তথ্য সফলভাবে জমা দেওয়া হয়েছে! ধন্যবাদ।',
    'donationCard.form.error': 'কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',

    // Join Form
    'join.form.title': 'আমাদের সংগঠনে যোগ দিন',
    'join.form.description':
      'নিচের তথ্যগুলো পূরণ করুন। ইনশাআল্লাহ আমরা দ্রুত আপনার সাথে যোগাযোগ করব।',
    'join.form.fullName': 'পূর্ণ নাম',
    'join.form.fullNamePlaceholder': 'আপনার সম্পূর্ণ নাম লিখুন',
    'join.form.occupation': 'পেশা',
    'join.form.occupation.student': 'শিক্ষার্থী',
    'join.form.occupation.jobHolder': 'চাকুরিজীবী',
    'join.form.occupation.business': 'ব্যবসা',
    'join.form.occupation.other': 'অন্যান্য',
    'join.form.institution': 'শিক্ষা প্রতিষ্ঠানের নাম',
    'join.form.institutionPlaceholder':
      'যদি শিক্ষার্থী হন, শিক্ষাপ্রতিষ্ঠানের নাম লিখুন',
    'join.form.postName': 'পদবী/পোস্ট',
    'join.form.postNamePlaceholder': 'আপনার পদবী/পোস্টের নাম লিখুন',
    'join.form.officeName': 'অফিস/কর্মস্থলের নাম',
    'join.form.officeNamePlaceholder': 'আপনার অফিস/কর্মস্থলের নাম লিখুন',
    'join.form.businessName': 'ব্যবসার নাম',
    'join.form.businessNamePlaceholder': 'আপনার ব্যবসার নাম লিখুন',
    'join.form.occupationDescription': 'পেশার বিবরণ',
    'join.form.occupationDescriptionPlaceholder':
      'আপনার পেশার বিবরণ লিখুন অথবা বেকার লিখুন যদি আপনি কাজ না করেন',
    'join.form.email': 'ইমেইল',
    'join.form.emailPlaceholder': 'আপনার ইমেইল ঠিকানা লিখুন',
    'join.form.phone': 'মোবাইল নম্বর',
    'join.form.phonePlaceholder':
      'হোয়াটসঅ্যাপ নম্বর হলে ভালো হয় (দেশের কোডসহ)',
    'join.form.bloodGroup': 'রক্তের গ্রুপ',
    'join.form.bloodGroup.placeholder': 'আপনার রক্তের গ্রুপ নির্বাচন করুন',
    'join.form.heardAboutUs': 'কীভাবে আমাদের সম্পর্কে জেনেছেন?',
    'join.form.heardAboutUsPlaceholder':
      'যেমন: বন্ধু, সামাজিক যোগাযোগমাধ্যম, মসজিদ, প্রোগ্রাম ইত্যাদি',
    'join.form.submit': 'আবেদন জমা দিন',
    'join.form.submitting': 'জমা দেয়া হচ্ছে...',
    'join.form.success': 'আলহামদুলিল্লাহ! আপনার তথ্য আমরা পেয়েছি।',
    'join.form.error': 'কিছু ভুল হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.events': 'Events',
    'nav.gallery': 'Gallery',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.donate': 'Donate Now',

    // Hero Section
    'hero.title': 'Al-Khidmah Organization',
    'hero.subtitle': 'For Deen, the Ummah, and the Land',
    'hero.description':
      'A religious, youth, and community organization dedicated to serving humanity through Islamic values and social responsibility',
    'hero.cta.primary': 'Join Us',
    'hero.cta.secondary': 'Learn More',

    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'On the Path of Service and Faith',
    'about.description':
      "Al-Khidmah Organization is a religious and social organization dedicated to the khidmah (service) of Deen Islam, the Muslim qawm, and the land of Bengal, as well as to building an ideal Islamic society. It was founded in September 2018 by Muhammad Hridoy Hasan with the aim of organizing Muslim adolescents, youth, and young adults of the Thanapara area of Kushtia city and working collectively with them. Following the footsteps of Habibullah, Imamul Mursalin, Khatamun Nabiyyin, Nabiyyul Malhamah, and Rahmatullil 'Alamin — the great Nabi Muhammad (Sallallahu 'Alaihi wa Sallam) — the organization continuously carries out various programs for the promotion and expansion of Islamic da'wah, education, and culture; the service of humanity; youth development; social reform; instilling the highest moral consciousness; and developing the best akhlaq and a pure mindset. Above all, it strives with utmost effort to establish an ideal Islamic society. Building lives, generations, and society based on the Qur'an and Sunnah, and the propagation and expansion of authentic 'ilm, are among the core objectives of Al-Khidmah Organization. Following the path of the Salaf-e-Salihin, adhering to Qur'an and Sunnah-based moderation is our principle.",
    'about.pillar1.title': 'Religious Education',
    'about.pillar1.description':
      'Promoting and spreading the dawah, education, culture, and values of pure Islam based on the Quran and Sunnah',
    'about.pillar2.title': 'Social Service',
    'about.pillar2.description':
      'Conducting various awareness and welfare-oriented social activities for the benefit of Deen (religion), Qawm (nation), and Zameen (country)',
    'about.pillar3.title': 'Youth Development',
    'about.pillar3.description':
      'Training to enhance skills and develop leadership among youth',
    'about.pillar4.title': 'Building an Ideal Society',
    'about.pillar4.description': 'Building a mosque-centered ideal society based on the light of revelation where peace and security, justice, and welfare spread everywhere.',

    // Programs Section
    'programs.title': 'Our Activities',
    'programs.subtitle':
      'Ever since its establishment, Al-Khidmah Organization has been dedicated to serving faith, community, and the homeland through its successfully managed initiatives',
    'programs.quran.title': "Tafsir al-Qur'an Gatherings",
    'programs.quran.description':
      'Regular public tafsir sessions that provide accessible Qur’an education for everyone, focusing on understanding, reflection, and living by its guidance.',
    'programs.scholarship.title': 'Muslim Youth Conference Kushtia 2024',
    'programs.scholarship.description':
      'Day-long seminars and conferences designed to deepen understanding of contemporary Islamic movements, history, and practical frameworks for action.',
    'programs.health.title': 'Sports Day',
    'programs.health.description':
      'Halal sports and recreation days for children and youth that build physical strength, discipline, teamwork, and Islamic character.',
    'programs.food.title': 'Monthly Majlis and Iftar Gatherings',
    'programs.food.description':
      'Monthly study circles and community iftar programs that strengthen brotherhood, mutual care, and spiritual connection among members.',
    'programs.skills.title': "Project 'Saplings for the Hereafter'",
    'programs.skills.description':
      'A tree plantation and distribution project led by Al-Khidmah in Kushtia, responding to environmental crises by reviving Islamic teachings on caring for the earth and investing in reward for the Hereafter.',
    'programs.orphan.title': 'Support for the Wounded July Fighters',
    'programs.orphan.description':
      'Providing financial and humanitarian support to the wounded participants of the July 2024 uprising in Bangladesh against oppression, focusing on medical care, rehabilitation, and assistance for their families.',
    'programs.antiThirteenth.title': 'Anti-Thirteenth Night Campaign 2025',
    'programs.antiThirteenth.description':
      'Our small effort to bring back the Muslim adolescents, youths, and young people of Kushtia from the frenzy, intoxication, and destructive consequences of the so-called Thirty-First Night or Happy New Year—a Western jahili culture that erodes identity.',
    'programs.learnMore': 'Learn More',

    // Events Section
    'events.title': 'Upcoming Events',
    'events.subtitle': 'Participate in Our Programs',
    'events.viewAll': 'View All Events',
    'events.register': 'Register',

    // Gallery Section
    'gallery.title': 'Our Programs in Pictures',
    'gallery.subtitle': 'Moments of Service',

    // Donation Section
    'donation.title': 'Partner With Us',
    'donation.subtitle': 'Your Donation Can Make a Difference',
    'donation.description':
      "Your donation to Al-Khidmah's service programs can spread light in people's lives. Every taka is spent transparently.",
    'donation.oneTime': 'One-time Donation',
    'donation.monthly': 'Monthly Donation',
    'donation.zakat': 'Zakat',
    'donation.amount': 'Donation Amount',
    'donation.custom': 'Other',
    'donation.donate': 'Donate',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We Are Ready to Serve You',
    'contact.form.title': 'Write to Us',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Working Hours',
    'contact.info.hoursValue': 'Sunday - Thursday: 9:00 AM - 5:00 PM',

    // Footer
    'footer.about': 'About Us',
    'footer.aboutText':
      'Al-Khidmah Organization is dedicated to social service based on Islamic values. We work in education, health, and social development.',
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.contact': 'Contact',
    'footer.volunteer': 'Volunteer',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Subscribe to get updates about our programs',
    'footer.emailPlaceholder': 'Your Email',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',

    // Donation Card
    'donationCard.title': 'Your Support is Needed',
    'donationCard.subtitle':
      'Be a partner in our service programs and play a role in transforming society',
    'donationCard.selectAmount': 'Select Donation Amount',
    'donationCard.customAmount': 'Enter Custom Amount (৳)',
    'donationCard.selectPayment': 'Select Payment Method',
    'donationCard.paymentDetails': 'Payment Details',
    'donationCard.accountType': 'Account Type',
    'donationCard.accountNumber': 'Account Number',
    'donationCard.amountToPay': 'Amount to Pay',
    'donationCard.bankName': 'Bank Name',
    'donationCard.accountName': 'Account Name',
    'donationCard.branch': 'Branch',
    'donationCard.routingNumber': 'Routing Number',
    'donationCard.instructions':
      'Instructions: After completing payment to the above number, click the button below to submit your payment details.',
    'donationCard.submitButton': 'Submit Payment Details',
    'donationCard.taxNote':
      'You will receive tax relief when you donate to Al-Khidmah Foundation.',
    'donationCard.form.title': 'Payment Information',
    'donationCard.form.name': 'Your Name',
    'donationCard.form.namePlaceholder': 'Enter your full name',
    'donationCard.form.email': 'Email',
    'donationCard.form.emailPlaceholder': 'Enter your email address',
    'donationCard.form.phone': 'Phone Number',
    'donationCard.form.phonePlaceholder': 'Enter your phone number',
    'donationCard.form.transactionId': 'Transaction ID',
    'donationCard.form.transactionIdPlaceholder':
      'Transaction ID received after payment',
    'donationCard.form.submitting': 'Submitting...',
    'donationCard.form.success':
      'Payment details submitted successfully! Thank you.',
    'donationCard.form.error': 'Something went wrong. Please try again.',

    // Join Form
    'join.form.title': 'Join Our Organization',
    'join.form.description':
      'Please fill in the details below and we will reach out to you soon, in sha Allah.',
    'join.form.fullName': 'Full Name',
    'join.form.fullNamePlaceholder': 'Enter your full name',
    'join.form.occupation': 'Occupation',
    'join.form.occupation.student': 'Student',
    'join.form.occupation.jobHolder': 'Job Holder',
    'join.form.occupation.business': 'Business',
    'join.form.occupation.other': 'Other',
    'join.form.institution': 'Institution Name',
    'join.form.institutionPlaceholder':
      'If you are a student, write your institution name',
    'join.form.postName': 'Post/Position',
    'join.form.postNamePlaceholder': 'Enter your post/position name',
    'join.form.officeName': 'Office/Workplace Name',
    'join.form.officeNamePlaceholder': 'Enter your office/workplace name',
    'join.form.businessName': 'Business Name',
    'join.form.businessNamePlaceholder': 'Enter your business name',
    'join.form.occupationDescription': 'Occupation Description',
    'join.form.occupationDescriptionPlaceholder':
      'Describe your occupation or write unemployed if you are not working',
    'join.form.email': 'Email',
    'join.form.emailPlaceholder': 'Enter your email address',
    'join.form.phone': 'Phone Number',
    'join.form.phonePlaceholder':
      'WhatsApp number preferred (with country code)',
    'join.form.bloodGroup': 'Blood Group',
    'join.form.bloodGroup.placeholder': 'Select your blood group',
    'join.form.heardAboutUs': 'How did you hear about us?',
    'join.form.heardAboutUsPlaceholder':
      'e.g. Friend, social media, mosque, program, etc.',
    'join.form.submit': 'Submit Application',
    'join.form.submitting': 'Submitting...',
    'join.form.success': 'Alhamdulillah! We have received your information.',
    'join.form.error': 'Something went wrong. Please try again later.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('bn');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'bn' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['bn']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
