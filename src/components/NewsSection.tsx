import { ArrowRight, CalendarDays, Clock3 } from 'lucide-react';

const news = [
  { category: 'Vie de l’institution', title: 'L’IUA signe un partenariat avec l’UQTR', text: 'Le 3 février 2026, l’Institut Universitaire d’Abidjan a officialisé une convention de partenariat avec l’Université du Québec à Trois-Rivières pour favoriser la mobilité académique et la coopération scientifique.', image: 'https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'from-cyan-400/70', href: 'https://www.iuaci.org/rentree-academique-2025/' },
  { category: 'Entrepreneuriat · Vie étudiante', title: 'MangoPack remporte le Business Game IUA 2026', text: 'Une idée étudiante autour de la valorisation de la mangue ivoirienne, de l’économie circulaire et du développement durable s’est illustrée lors du Business Game annuel de l’IUA.', image: 'https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'from-sky-500/70', href: 'https://www.iuaci.org/rendez-vous-parents-liua-a-lecoute-des-familles/' },
  { category: 'Diplômes · Réussite', title: 'Cérémonie de remise des diplômes 2026', text: 'L’IUA célèbre ses diplômés lors de sa grande cérémonie annuelle organisée le samedi 18 juillet 2026 au Parc des Expositions d’Abidjan.', image: '/graduation-2026.jpg', color: 'from-blue-500/70', href: 'https://www.instagram.com/p/DbBPsMWjcJk/' },
  { category: 'Vie de campus · Familles', title: 'Rendez-vous Parents – L’IUA à l’écoute des familles', text: 'L’IUA a convié les parents d’élèves à son événement institutionnel majeur le samedi 4 octobre 2025 sur le campus de la Riviera-Bonoumin, dédié à l’échange et à la transparence.', image: 'https://images.pexels.com/photos/7092608/pexels-photo-7092608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'from-emerald-500/70', href: 'https://www.iuaci.org/rendez-vous-parents-liua-a-lecoute-des-familles/' },
  { category: 'Partenariat · Finance', title: 'L’IUA s’allie au Groupe XM pour la formation en trading', text: 'Un partenariat signé en février 2025 avec le Groupe XM permettra aux étudiants de l’IUA de bénéficier de formations de pointe dans le domaine du trading et des marchés financiers internationaux.', image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'from-amber-500/70', href: 'https://www.iuaci.org/' },
  { category: 'Rentrée · Académique', title: 'Rentrée académique 2025–2026 : cap sur l’excellence', text: 'La rentrée 2025–2026 a débuté le 10 septembre 2025. Tous les étudiants des cycles Licence, Master et formation continue ont rejoint le campus pour le démarrage officiel des cours.', image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'from-violet-500/70', href: 'https://www.iuaci.org/rentree-academique-2025/' },
];

const events = [
  ['10 septembre 2025', 'Rentrée académique 2025–2026 : démarrage officiel des cours', 'Rentrée, Académique'],
  ['4 octobre 2025', 'Rendez-vous Parents – L’IUA à l’écoute des familles · Campus Riviera-Bonoumin', 'Vie de campus, Familles'],
  ['Février 2025', 'Partenariat IUA × Groupe XM : formation en trading et marchés financiers', 'Partenariat, Finance'],
  ['Mars 2025', 'Convention de partenariat IUA × ESFAM pour l’excellence académique', 'Partenariat, Formation'],
  ['3 février 2026', 'Signature de la convention de coopération avec l’UQTR (Québec)', 'Partenariat, International'],
  ['Année 2025–2026', 'Business Game IUA : l’entrepreneuriat étudiant à l’honneur', 'Entrepreneuriat, Formation'],
  ['18 juillet 2026', 'Grande cérémonie de remise des diplômes 2026 · Parc des Expositions', 'Réussite, Vie de campus'],
];

export function NewsSection() {
  const quickLinks = [
    { label: "S'inscrire à l'IUA", accent: 'bg-cyan-500' },
    { label: 'Je réussis ma rentrée 2026', accent: 'bg-sky-600' },
    { label: "Taxe d'apprentissage 2026", accent: 'bg-blue-700' },
  ];

  return (
    <section id="actualites" className="bg-slate-50 px-5 pb-20 pt-12 sm:px-8 lg:px-12">
      {/* Liens rapides */}
      <div className="mx-auto mb-14 max-w-[1440px]">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href="#acces"
              className={`${link.accent} group flex items-center justify-between gap-4 rounded-2xl px-6 py-5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:brightness-110 sm:px-7`}
            >
              <span>{link.label}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/70 text-lg font-normal transition group-hover:translate-x-1 group-hover:border-white group-hover:bg-white/20">
                ›
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_0.45fr] lg:gap-20">
        <div>
          <div className="mb-10 flex items-end justify-between border-t-4 border-slate-950 pt-4"><h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Actualités</h2><a href="#actualites" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 sm:flex">Toutes les actualités <ArrowRight size={15} /></a></div>
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => <article key={item.title} className="group overflow-hidden bg-white shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(14,165,233,0.17)]"><div className="relative aspect-[1.2] overflow-hidden"><img src={item.image} alt="" className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /><div className={`absolute inset-0 bg-gradient-to-t ${item.color} to-transparent opacity-50`} /></div><div className="p-5"><p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-sky-700">{item.category}</p><h3 className="mb-3 text-xl font-semibold leading-tight text-slate-900">{item.title}</h3><p className="text-sm leading-6 text-slate-600">{item.text}</p><a href={item.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 transition group-hover:text-sky-600">Lire la suite <ArrowRight size={14} /></a></div></article>)}
          </div>
        </div>
        <aside id="agenda" className="border-t-4 border-slate-950 pt-4"><div className="mb-8 flex items-center justify-between"><h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Agenda</h2><CalendarDays className="text-sky-600" size={24} /></div><div className="space-y-0">{events.map(([date, title, category], index) => <a href="#agenda" key={title} className="group relative block border-b border-sky-700/40 py-5 pl-7 transition hover:bg-white hover:pl-9"><span className="absolute left-0 top-6 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-sky-500/15 transition group-hover:scale-125" />{index < events.length - 1 && <span className="absolute bottom-0 left-[4px] top-8 w-px bg-sky-500/30" />}<p className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500"><Clock3 size={13} className="text-sky-600" />{date}</p><h3 className="text-lg font-semibold leading-snug text-slate-900 transition group-hover:text-sky-700">{title}</h3><p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-sky-700">{category}</p></a>)}</div><a href="#agenda" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700">Tout l’agenda <ArrowRight size={15} /></a></aside>
      </div>
    </section>
  );
}
