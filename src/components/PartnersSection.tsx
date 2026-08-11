import { Award, Globe, Building2 } from 'lucide-react';

const academicPartners = [
  { name: 'UQTR', subtitle: "Université du Québec à Trois-Rivières", country: '🇨🇦' },
  { name: 'Univ. Nagoya', subtitle: "MCIE University of Nagoya", country: '🇯🇵' },
  { name: 'Univ. Clermont', subtitle: "Université de Clermont Auvergne", country: '🇫🇷' },
  { name: 'Univ. Nantes', subtitle: "Université de Nantes", country: '🇫🇷' },
  { name: 'Rennes 1', subtitle: "Université de Rennes 1", country: '🇫🇷' },
  { name: 'ESDM', subtitle: "École Nantaise du Dév. Durable et de Management", country: '🇫🇷' },
  { name: 'VATEL', subtitle: "VATEL Abidjan – Hôtellerie & Tourisme", country: '🇨🇮' },
  { name: 'ESFAM', subtitle: "École Supérieure de Formation et de Management", country: '🇨🇮' },
  { name: 'Groupe XM', subtitle: "Marchés Financiers & Trading", country: '🌍' },
  { name: 'Univ. de Russie', subtitle: "Partenaire en Aéronautique & Médecine", country: '🇷🇺' },
];

const accreditations = [
  { label: 'MESRS', desc: "Agréé par le Ministère de l'Enseignement Supérieur de Côte d'Ivoire", color: 'border-emerald-400 text-emerald-700' },
  { label: 'CAMES', desc: "Diplômes reconnus dans plus de 18 pays africains francophones", color: 'border-sky-400 text-sky-700' },
  { label: 'Évaluation BIEN', desc: 'Mention "Bien" (15,88/20) lors de l\'évaluation officielle du MESRS', color: 'border-amber-400 text-amber-700' },
  { label: '350+ Entreprises', desc: "Réseau d'entreprises partenaires via la Direction de l'Insertion Professionnelle", color: 'border-violet-400 text-violet-700' },
];

export function PartnersSection() {
  const doubled = [...academicPartners, ...academicPartners];

  return (
    <section id="partenaires" className="overflow-hidden border-t border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Titre */}
        <div className="mb-14 border-t-4 border-slate-950 pt-4">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Partenaires & Accréditations
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            L'IUA s'appuie sur un réseau solide d'universités, d'institutions et d'entreprises partenaires à l'international.
          </p>
        </div>

        {/* Accréditations */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {accreditations.map(({ label, desc, color }) => (
            <div
              key={label}
              className={`rounded-2xl border-2 ${color} bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className="mb-2 flex items-center gap-2">
                <Award size={16} />
                <span className="text-xs font-bold uppercase tracking-[0.12em]">{label}</span>
              </div>
              <p className="text-xs leading-5 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        {/* Titre partenaires académiques */}
        <div className="mb-8 flex items-center gap-3">
          <Globe size={18} className="text-sky-600" />
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-slate-500">Partenaires académiques & institutionnels</h3>
        </div>

        {/* Carrousel défilant */}
        <div className="relative overflow-hidden">
          {/* Dégradés sur les côtés */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex gap-5 py-2"
            style={{
              animation: 'scroll-partners 35s linear infinite',
              width: 'max-content',
            }}
          >
            {doubled.map(({ name, subtitle, country }, i) => (
              <div
                key={`${name}-${i}`}
                className="group flex w-56 shrink-0 flex-col items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-6 text-center shadow-sm transition hover:border-sky-200 hover:bg-sky-50 hover:shadow-md"
              >
                <span className="text-2xl">{country}</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-sky-700">{name}</span>
                <span className="text-[11px] leading-4 text-slate-500">{subtitle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Entreprises partenaires */}
        <div className="mt-14 rounded-2xl bg-slate-950 px-8 py-8 text-white">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-500/20">
                <Building2 size={22} className="text-sky-300" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">+ 350 entreprises partenaires</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  La Direction de l'Insertion Professionnelle (DIP) de l'IUA accompagne chaque étudiant vers le monde professionnel grâce à un vaste réseau d'entreprises partenaires, de stages et d'événements de recrutement.
                </p>
              </div>
            </div>
            <a
              href="https://www.iuaci.org/"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-xl border border-sky-400/40 bg-sky-500/15 px-5 py-3 text-xs font-bold uppercase tracking-wider text-sky-300 transition hover:bg-sky-500 hover:text-white"
            >
              En savoir plus →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
