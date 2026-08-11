import { useState } from 'react';
import { ArrowUpRight, Atom, BookOpen, BookOpenCheck, BrainCircuit, Building2, ChevronDown, FlaskConical, GraduationCap, HeartHandshake, Landmark, Microscope, UsersRound, Waves } from 'lucide-react';

const profiles = [
  { title: 'Étudiant·e', text: 'Services, outils et informations utiles pour votre quotidien.', icon: GraduationCap },
  { title: 'Lycéen·ne', text: 'Découvrez nos formations et préparez votre orientation.', icon: BookOpenCheck },
  { title: 'Chercheur·e', text: 'Un écosystème de recherche ouvert et connecté.', icon: Landmark },
  { title: 'Partenaire', text: 'Construisons ensemble les projets de demain.', icon: Building2 },
  { title: 'Personnel', text: 'Les ressources et espaces réservés aux équipes.', icon: UsersRound },
  { title: 'Mécène', text: 'Soutenez l’IUA et celles et ceux qui la font vivre.', icon: HeartHandshake },
];

interface HeroSectionProps {
  onProfileSelect: (profile: string) => void;
}

export function HeroSection({ onProfileSelect }: HeroSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <section id="accueil" className="relative overflow-hidden bg-slate-950">
      {/* Image acc2.png 100% claire et nette */}
      <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
        <img
          src="/acc2.png"
          alt="Bienvenue à l'Institut Universitaire d'Abidjan"
          className="h-full w-full object-cover object-[center_30%] sm:object-center opacity-100"
        />
      </div>

      {/* Ombre portée subtile en bas pour détacher le texte sans masquer la carte */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40 pointer-events-none" />

      {/* Effets lumineux de fond */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -right-12 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto min-h-[640px] max-w-[1440px] px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="relative z-10 flex min-h-[540px] flex-col justify-between">
          
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-center sm:gap-8 lg:gap-56">
            <div className="relative sm:w-72">
              <button
                onClick={() => setOpen(!open)}
                className="group flex w-full items-center justify-between border border-white/80 bg-slate-950/60 px-5 py-4 text-left text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:border-sky-300 hover:bg-sky-500/30 shadow-xl"
                aria-expanded={open}
              >
                Vous êtes... <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>
              {open && (
                <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-lg border border-white/15 bg-slate-950/95 shadow-2xl backdrop-blur-xl">
                  {profiles.map(({ title, text, icon: Icon }) => (
                    <button
                      key={title}
                      onClick={() => { setOpen(false); onProfileSelect(title); }}
                      className="w-full text-left group flex items-start gap-3 border-b border-white/10 px-4 py-3.5 transition hover:bg-sky-500/15"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-sky-400/40 text-sky-300 transition group-hover:border-sky-300 group-hover:bg-sky-400/15">
                        <Icon size={16} strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white">{title}</span>
                        <span className="block text-xs leading-5 text-slate-400">{text}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#formation" className="group flex items-center justify-between border border-white/80 bg-slate-950/60 px-6 py-4 text-left text-sm font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:border-sky-300 hover:bg-sky-500/30 sm:w-[350px] whitespace-nowrap sm:gap-4 shadow-xl">
              <span>Catalogue des formations</span> <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-8 text-sky-100/90 sm:gap-x-10 lg:mt-0 lg:justify-between lg:px-10">
            {[Waves, BookOpen, Atom, BrainCircuit, FlaskConical, Microscope, GraduationCap].map((Icon, index) => <Icon key={index} size={index === 2 ? 41 : 31} strokeWidth={1.35} className="animate-float opacity-80" style={{ animationDelay: `${index * 120}ms` }} />)}
          </div>

          {/* Slogan Officiel IUA */}
          <div className="max-w-2xl drop-shadow-md">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300">Institut Universitaire d’Abidjan</p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
              Nous Formons les<br />
              <span className="text-sky-300">Leaders de Demain.</span>
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}
