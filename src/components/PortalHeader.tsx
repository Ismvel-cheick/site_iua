import { useState } from 'react';
import { ChevronDown, Menu, Search, X, BookOpen, GraduationCap, Building2 } from 'lucide-react';

const navItems = ['Formation', 'Recherche', 'International', 'Vie de campus', "L'IUA"];

interface PortalHeaderProps {
  onNavigate?: (view: 'home' | 'actualites' | 'library' | 'laboratoires' | 'ufr', ufrId?: string) => void;
  activeView?: 'home' | 'actualites' | 'library' | 'laboratoires' | 'ufr';
}

export function PortalHeader({ onNavigate, activeView = 'home' }: PortalHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ufrDropdownOpen, setUfrDropdownOpen] = useState(false);

  const handleUfrClick = (ufrId: string) => {
    setUfrDropdownOpen(false);
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate('ufr', ufrId);
    }
  };

  return (
    <header className="relative z-50 bg-white">
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600 sm:px-8 lg:px-12">
          <span className="hidden md:inline">Institut Universitaire d'Abidjan</span>
          <div className="ml-auto flex items-center gap-4 sm:gap-6">
            <button className="transition-colors hover:text-sky-600">FR <span className="mx-1 text-slate-300">|</span> EN</button>
            <button className="hidden transition-colors hover:text-sky-600 sm:inline">Accessibilité</button>
            <button className="hidden transition-colors hover:text-sky-600 sm:inline">Annuaire</button>
            <button aria-label="Rechercher" className="flex items-center gap-2 transition-colors hover:text-sky-600">
              <Search size={14} /> <span className="hidden lg:inline">Rechercher</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#accueil"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('home');
            }
          }}
          className="flex items-center gap-4"
          aria-label="Accueil Institut Universitaire d'Abidjan"
        >
          <img
            src="/WhatsApp-Image-2025-04-12-at-19.56.21.jpeg"
            alt="Logo de l'Institut Universitaire d'Abidjan"
            className="animate-logo h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
          />
          <div className="hidden border-l border-slate-300 pl-3 text-[10px] font-bold uppercase leading-[1.3] tracking-[0.18em] text-slate-700 sm:block">
            Institut<br />Universitaire<br />d'Abidjan
          </div>
        </a>

        <div className="hidden items-center gap-7 text-[12px] font-medium text-slate-600 lg:flex">
          <button
            onClick={() => onNavigate && onNavigate('actualites')}
            className={`transition-colors hover:text-sky-600 ${
              activeView === 'actualites' ? 'font-bold text-sky-700 border-b-2 border-sky-500 pb-0.5' : ''
            }`}
          >
            Actualités
          </button>
          <button
            onClick={() => onNavigate && onNavigate('library')}
            className={`transition-colors hover:text-sky-600 ${
              activeView === 'library' ? 'font-bold text-sky-700 border-b-2 border-sky-500 pb-0.5' : ''
            }`}
          >
            Bibliothèques
          </button>
          <button
            onClick={() => onNavigate && onNavigate('laboratoires')}
            className={`transition-colors hover:text-sky-600 ${
              activeView === 'laboratoires' ? 'font-bold text-sky-700 border-b-2 border-sky-500 pb-0.5' : ''
            }`}
          >
            Laboratoires
          </button>

          {/* Bouton Mega-Menu UFR, écoles, instituts (Comme sur la photo !) */}
          <div
            className="relative"
            onMouseEnter={() => setUfrDropdownOpen(true)}
            onMouseLeave={() => setUfrDropdownOpen(false)}
          >
            <button
              onClick={() => setUfrDropdownOpen(!ufrDropdownOpen)}
              className={`flex items-center gap-1 transition-colors hover:text-sky-600 py-2 ${
                activeView === 'ufr' ? 'font-bold text-sky-700 border-b-2 border-sky-500 pb-0.5' : ''
              }`}
            >
              <span>UFR, écoles, instituts</span>
              <ChevronDown size={13} className={`transition-transform ${ufrDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Dropdown Menu UFR (Style exact de la photo) */}
            {ufrDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 w-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl animate-fadeIn">
                <div className="space-y-5 text-left">
                  
                  {/* UFR Section */}
                  <div>
                    <h4 className="border-b border-slate-200 pb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                      UFR • UNITÉS DE FORMATION ET DE RECHERCHE
                    </h4>
                    <div className="mt-3 space-y-2">
                      <button
                        onClick={() => handleUfrClick('informatique')}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-sky-50 hover:text-sky-600"
                      >
                        <span>Informatique & Sciences Technologies</span>
                        <span className="text-[10px] text-sky-600 font-semibold bg-sky-100 px-2 py-0.5 rounded">CAMES</span>
                      </button>
                      <button
                        onClick={() => handleUfrClick('droit')}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-sky-50 hover:text-sky-600"
                      >
                        <span>Droit & Sciences Politiques</span>
                        <span className="text-[10px] text-sky-600 font-semibold bg-sky-100 px-2 py-0.5 rounded">OHADA</span>
                      </button>
                      <button
                        onClick={() => handleUfrClick('gestion')}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-sky-50 hover:text-sky-600"
                      >
                        <span>Sciences Économiques & de Gestion</span>
                        <span className="text-[10px] text-sky-600 font-semibold bg-sky-100 px-2 py-0.5 rounded">Finance</span>
                      </button>
                      <button
                        onClick={() => handleUfrClick('communication')}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-sky-50 hover:text-sky-600"
                      >
                        <span>Arts, Lettres, Langues & Communication</span>
                        <span className="text-[10px] text-sky-600 font-semibold bg-sky-100 px-2 py-0.5 rounded">Médias</span>
                      </button>
                    </div>
                  </div>

                  {/* INSTITUTS & ÉCOLES Section */}
                  <div>
                    <h4 className="border-b border-slate-200 pb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
                      INSTITUTS • ÉCOLES
                    </h4>
                    <div className="mt-3 space-y-2">
                      <button
                        onClick={() => handleUfrClick('vatel')}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-amber-50 hover:text-amber-700"
                      >
                        <span>Vatel Abidjan – Management Hôtelier</span>
                        <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded">International</span>
                      </button>
                      <button
                        onClick={() => handleUfrClick('informatique')}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-sky-50 hover:text-sky-600"
                      >
                        <span>École d'Ingénieurs & Data Science IUA</span>
                      </button>
                      <button
                        onClick={() => handleUfrClick('gestion')}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-800 transition hover:bg-sky-50 hover:text-sky-600"
                      >
                        <span>Institut des Sciences Actuarielles & Financières</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>

        <button
          className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition hover:border-sky-500 hover:text-sky-600 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X size={17} /> : <Menu size={17} />} <span className="hidden sm:inline">Menu</span>
        </button>
      </div>

      <nav className={`${menuOpen ? 'block' : 'hidden'} relative z-30 lg:block lg:-mb-6 lg:translate-y-2`}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-800/30 bg-white shadow-xl backdrop-blur-md lg:flex-row lg:items-center">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Formation' && onNavigate) {
                    onNavigate('ufr', 'informatique');
                  } else if (item === 'Recherche' && onNavigate) {
                    onNavigate('laboratoires');
                  } else if (onNavigate) {
                    onNavigate('home');
                  }
                }}
                className="group flex items-center justify-between border-b border-slate-800/25 px-6 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-slate-800 transition-all hover:bg-sky-50 hover:text-sky-600 lg:flex-1 lg:justify-center lg:border-b-0 lg:border-r lg:border-slate-800/25 lg:py-3.5 last:lg:border-r-0"
              >
                <span>{item}</span>
                <span className="h-px w-0 bg-sky-500 transition-all duration-300 group-hover:w-6 lg:hidden" />
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
