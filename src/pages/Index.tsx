import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import ConfiguratorPage from '@/pages/ConfiguratorPage';
import AboutPage from '@/pages/AboutPage';
import ContactsPage from '@/pages/ContactsPage';

type Section = 'home' | 'configurator' | 'about' | 'contacts';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        {activeSection === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activeSection === 'configurator' && <ConfiguratorPage />}
        {activeSection === 'about' && <AboutPage />}
        {activeSection === 'contacts' && <ContactsPage />}
      </main>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono-custom text-xs text-muted-foreground">
            BUILD<span className="text-accent-orange">LAB</span> © 2026
          </span>
          <div className="flex gap-6">
            {(['home', 'configurator', 'about', 'contacts'] as Section[]).map(s => (
              <button
                key={s}
                onClick={() => handleNavigate(s)}
                className="font-mono-custom text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {s === 'home' ? 'Главная' : s === 'configurator' ? 'Конфигуратор' : s === 'about' ? 'О нас' : 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
