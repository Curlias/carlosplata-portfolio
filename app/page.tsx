import { cookies } from 'next/headers';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { defaultLocale, type Locale } from '@/lib/i18n/config';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Volunteering from '@/components/Volunteering';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home() {
  // Get locale from cookie (set by middleware)
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  const locale = (localeCookie?.value as Locale) || defaultLocale;

  // Load dictionary for current locale
  const dict = await getDictionary(locale);

  return (
    <>
      <Navigation dict={dict} locale={locale} />
      <main className="overflow-x-hidden">
        <Hero dict={dict} locale={locale} />
        <div className="relative z-10 bg-background">
          <Summary dict={dict} />
          <Skills dict={dict} locale={locale} />
          <Experience dict={dict} locale={locale} />
          <Projects dict={dict} locale={locale} />
          <Certifications dict={dict} />
          <Volunteering dict={dict} locale={locale} />
          <Writing dict={dict} locale={locale} />
          <Contact dict={dict} />
        </div>
      </main>
      <Footer />
    </>
  );
}
