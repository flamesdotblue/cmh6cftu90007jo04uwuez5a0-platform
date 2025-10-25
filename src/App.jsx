import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomeSections from './components/HomeSections';
import ProjectsMedia from './components/ProjectsMedia';
import ContactFooter from './components/ContactFooter';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <section id="home"><HomeSections /></section>
        <section id="projects"><ProjectsMedia /></section>
        <section id="contact"><ContactFooter /></section>
      </main>

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-[#004225] p-3 text-white shadow-lg transition hover:bg-[#00341d] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
