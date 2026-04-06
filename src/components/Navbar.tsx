import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Section = 'home' | 'configurator' | 'about' | 'contacts';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems = [
  { id: 'home' as Section, label: 'Главная' },
  { id: 'configurator' as Section, label: 'Конфигуратор' },
  { id: 'about' as Section, label: 'О нас' },
  { id: 'contacts' as Section, label: 'Контакты' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="font-mono-custom font-medium text-sm tracking-widest uppercase text-foreground hover:text-accent-orange transition-colors"
        >
          BUILD<span className="text-accent-orange">LAB</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link text-sm font-medium text-foreground ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-foreground text-background text-sm font-medium hover:bg-accent-orange transition-colors"
          onClick={() => onNavigate('configurator')}
        >
          Собрать ПК
          <Icon name="ArrowRight" size={14} />
        </button>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`block w-full text-left px-6 py-4 text-sm font-medium border-b border-border last:border-0 ${activeSection === item.id ? 'text-accent-orange' : 'text-foreground'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
