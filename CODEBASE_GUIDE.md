# Codebase Guide: Understanding Data Flow

## 📋 Overview

This is a **Next.js 16** React application for Al-Khidmah Organization's landing page. It's built with:
- **Next.js** (React framework)
- **TypeScript** (type-safe JavaScript)
- **Tailwind CSS** (styling)
- **React Context** (for language/state management)

---

## 🏗️ Architecture Overview

```
/app                    → Next.js pages (routes)
/components             → Reusable UI components
/lib                    → Utilities and context providers
/public                 → Static assets (images, logos)
```

---

## 📊 Data Types: Static vs Dynamic

### 1. **STATIC DATA** (Hardcoded in Components)

Static data is **directly written in the code** and doesn't change unless you edit the file.

#### Example 1: Events Section (`components/events-section.tsx`)

```typescript
// This data is STATIC - hardcoded in the component
const content = {
  bn: {
    events: [
      {
        title: "মাসিক কমিউনিটি ইফতার",
        date: "প্রতি শুক্রবার",
        time: "সন্ধ্যা ৬:৩০ - ৮:৩০",
        location: "আল-খিদমাহ সেন্টার",
        description: "রমজানে কমিউনিটি ইফতার..."
      },
      // ... more events
    ]
  },
  en: {
    events: [
      {
        title: "Monthly Community Iftar",
        date: "Every Friday",
        // ... more events
      }
    ]
  }
}
```

**How it works:**
- Data is defined **inside the component file**
- When you want to change an event, you **edit the code directly**
- No database or API calls needed

#### Example 2: Gallery Images (`components/gallery-section.tsx`)

```typescript
// Static image paths - hardcoded
const galleryImages = [
  "/men-praying-in-congregation-at-mosque.jpg",
  "/male-youth-volunteers-distributing-food.jpg",
  "/boys-learning-quran-in-islamic-school.jpg",
  // ... more images
]
```

**How it works:**
- Image paths are **hardcoded in the component**
- Images are stored in `/public` folder
- To add/remove images, you edit the array

#### Example 3: Payment Methods (`components/donation-card.tsx`)

```typescript
// Static payment method data
const paymentMethods = [
  {
    id: "bkash",
    name: "bKash",
    logo: "/bkash-logo.png",
    number: "01304212226",
    type: "Personal",
  },
  // ... more payment methods
]
```

---

### 2. **DYNAMIC DATA** (From Translation Context)

Dynamic data comes from the **Language Context** and can change based on user's language selection.

#### How Translation System Works

**File:** `lib/language-context.tsx`

```typescript
// All translations stored in one place
const translations = {
  bn: {
    "hero.title": "আল-খিদমাহ অরগানাইজেশন",
    "hero.subtitle": "দ্বীন, কওম ও যমীনের জন্য",
    "hero.description": "ইসলামিক মূল্যবোধ...",
    // ... hundreds of translations
  },
  en: {
    "hero.title": "Al-Khidmah Organization",
    "hero.subtitle": "For Deen, the Ummah, and the Land",
    "hero.description": "A religious, youth...",
    // ... hundreds of translations
  }
}
```

**How Components Use It:**

```typescript
// In hero-section.tsx
export function HeroSection() {
  const { t } = useLanguage(); // Get translation function
  
  return (
    <h1>{t('hero.title')}</h1>  // Gets "আল-খিদমাহ..." or "Al-Khidmah..." based on language
    <p>{t('hero.subtitle')}</p> // Gets "দ্বীন, কওম..." or "For Deen..."
  )
}
```

**Language Switching:**
- User clicks language button → `setLanguage('en')` or `setLanguage('bn')`
- Context updates → All components using `t()` automatically re-render with new language
- Language preference saved in `localStorage` (browser storage)

---

## 🔄 Data Flow Patterns

### Pattern 1: Translation-Based Components

**Used by:** Hero, Programs, About sections

```typescript
// Step 1: Component gets translation function
const { t } = useLanguage();

// Step 2: Use translation keys
<h1>{t('hero.title')}</h1>

// Step 3: Context looks up translation
// If language = 'bn' → returns Bengali text
// If language = 'en' → returns English text
```

**File Structure:**
```
lib/language-context.tsx  → Stores all translations
components/hero-section.tsx → Uses t('hero.title')
```

---

### Pattern 2: Component-Local Static Data

**Used by:** Events, Gallery, Contact sections

```typescript
// Data defined inside component
const content = {
  bn: { title: "আসন্ন ইভেন্ট", events: [...] },
  en: { title: "Upcoming Events", events: [...] }
}

// Use based on current language
const t = content[language]; // language is 'bn' or 'en'
```

**Why this pattern?**
- Some components have **complex nested data** (like events array)
- Easier to manage when data is **component-specific**
- Still supports language switching

---

### Pattern 3: Hybrid Approach

**Used by:** Programs Section

```typescript
// Mix of translation keys + static structure
const programs = [
  {
    title: t('programs.quran.title'),        // From translation
    description: t('programs.quran.description'), // From translation
    image: '/programs/tafsirul-quran-mahfil.jpg', // Static path
    category: t('about.pillar1.title'),     // From translation
  },
  // ... more programs
]
```

---

## 📁 File Structure Explained

### `/app` - Next.js Pages (Routes)

```
app/
  page.tsx          → Homepage (/)
  about/page.tsx    → About page (/about)
  contact/page.tsx  → Contact page (/contact)
  layout.tsx        → Root layout (wraps all pages)
```

**How it works:**
- `page.tsx` files automatically become routes
- `layout.tsx` wraps all pages (provides LanguageProvider)

### `/components` - Reusable Components

```
components/
  hero-section.tsx      → Hero banner
  programs-section.tsx → Programs grid
  events-section.tsx    → Events list
  gallery-section.tsx  → Image gallery
  navigation.tsx       → Header/navbar
  footer.tsx           → Footer
```

**How it works:**
- Each component is **self-contained**
- Can use translations via `useLanguage()` hook
- Can have its own static data

### `/lib` - Utilities & Context

```
lib/
  language-context.tsx → Translation system + language state
  utils.ts            → Helper functions
```

**How it works:**
- `LanguageProvider` wraps the app (in `layout.tsx`)
- All components can access translations via `useLanguage()`

### `/public` - Static Assets

```
public/
  hero-bg-image.jpeg    → Background images
  al-khidmah-logo.png   → Logos
  *.jpg                 → Gallery images
```

**How it works:**
- Files in `/public` are accessible via `/filename.jpg`
- No need to import, just use path: `src="/hero-bg-image.jpeg"`

---

## 🎯 How to Modify Data

### To Change Translations:

**File:** `lib/language-context.tsx`

```typescript
// Find the key you want to change
"hero.subtitle": "দ্বীন, কওম ও যমীনের জন্য",  // Bengali
"hero.subtitle": "For Deen, the Ummah, and the Land", // English

// Edit the text
"hero.subtitle": "YOUR NEW TEXT HERE",
```

### To Change Events:

**File:** `components/events-section.tsx`

```typescript
// Find the events array
events: [
  {
    title: "মাসিক কমিউনিটি ইফতার",
    date: "প্রতি শুক্রবার",
    // ... edit these values
  },
  // Add new events here
  {
    title: "New Event",
    date: "New Date",
    // ...
  }
]
```

### To Change Gallery Images:

**File:** `components/gallery-section.tsx`

```typescript
// Edit the array
const galleryImages = [
  "/your-new-image.jpg",  // Add new image path
  "/another-image.jpg",   // Add more images
]
```

**Then:** Add the actual image file to `/public` folder

### To Change Programs:

**File:** `components/programs-section.tsx`

```typescript
// Edit the programs array
const programs = [
  {
    title: t('programs.quran.title'),  // Uses translation
    image: '/new-image.jpg',            // Change image path
    // ...
  }
]
```

**Also update:** Translation keys in `lib/language-context.tsx` if needed

---

## 🔍 Key Concepts

### 1. **Client Components** (`'use client'`)

```typescript
'use client';  // This makes it a client component

export function HeroSection() {
  // Can use hooks, state, interactivity
  const { t } = useLanguage();
  // ...
}
```

**Why needed?**
- Components using `useLanguage()` hook need `'use client'`
- Allows React hooks and browser APIs

### 2. **Server Components** (No `'use client'`)

```typescript
// No 'use client' directive
export default function Page() {
  // Just renders components, no hooks
  return <HeroSection />
}
```

**Why?**
- Faster initial load
- Can't use hooks or browser APIs
- Good for layout/pages

### 3. **Context Provider Pattern**

```typescript
// In layout.tsx
<LanguageProvider>
  {children}  // All pages/components inside can use useLanguage()
</LanguageProvider>

// In any component
const { t, language, setLanguage } = useLanguage();
```

**How it works:**
- Provider wraps the app
- All children can access the context
- Changing language updates all components automatically

---

## 🚀 Summary

### Static Data:
- ✅ Hardcoded in component files
- ✅ Easy to edit directly
- ✅ No database needed
- ✅ Examples: Events, Gallery images, Payment methods

### Dynamic Data:
- ✅ Stored in `language-context.tsx`
- ✅ Changes based on language selection
- ✅ Centralized management
- ✅ Examples: All text content (titles, descriptions, buttons)

### Data Flow:
1. User selects language → `setLanguage('en')`
2. Context updates → `language` state changes
3. Components re-render → `t('key')` returns new language text
4. UI updates automatically

---

## 📝 Quick Reference

| What to Change | Where to Edit |
|---------------|---------------|
| Page titles, buttons, descriptions | `lib/language-context.tsx` |
| Events list | `components/events-section.tsx` |
| Gallery images | `components/gallery-section.tsx` |
| Programs | `components/programs-section.tsx` + `language-context.tsx` |
| Contact info | `components/contact-section.tsx` |
| Payment methods | `components/donation-card.tsx` |
| Navigation links | `components/navigation.tsx` |
| Footer content | `components/footer.tsx` |

---

## 💡 Tips

1. **Always check both files** when changing programs:
   - `components/programs-section.tsx` (structure)
   - `lib/language-context.tsx` (text content)

2. **Image paths** must match files in `/public` folder

3. **Translation keys** must exist in both `bn` and `en` objects

4. **Test language switching** after making changes

5. **Use `t('key')`** for text that needs translation

6. **Use local `content` object** for complex nested data

