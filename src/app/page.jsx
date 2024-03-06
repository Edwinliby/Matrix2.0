'use client';
import React, { useEffect } from 'react';
import Loader from './components/loader/loader';
import Hero from './components/heroSection/hero';
import About from './components/aboutSection/about';
import Events from './components/eventSection/event';
import FaqSection from './components/faqSection/faq';
import ContactSection from './components/contactSection/contact';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/nav';

export default function page() {

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Events />
          <FaqSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  )
}
