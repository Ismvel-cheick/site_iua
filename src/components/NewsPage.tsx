import { useState } from 'react';
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Globe,
  X
} from 'lucide-react';

interface NewsPageProps {
  onBack: () => void;
}

const allNews = [
  {
    id: 1,
    category: 'Vie de l’institution',
    title: 'L’IUA signe un partenariat de mobilité avec l’UQTR (Canada)',
    date: '3 février 2026',
    author: 'Direction de la Communication',
    text: 'Le 3 février 2026, l’Institut Universitaire d’Abidjan a officialisé une convention stratégique de partenariat avec l’Université du Québec à Trois-Rivières. Cet accord vise à développer la mobilité étudiante, les échanges d’enseignants-chercheurs et la cotutelle de thèses.',
    fullText: 'Cet accord historique avec l\'UQTR renforce l\'engagement de l\'IUA pour l\'ouverture internationale. Les étudiants des facultés de Sciences, Gestion et Droit pourront effectuer des semestres d\'études au Québec et obtenir de nouvelles équivalences internationales.',
    image: 'https://images.pexels.com/photos/8197551/pexels-photo-8197551.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'from-cyan-400/70',
    href: 'https://www.iuaci.org/rentree-academique-2025/'
  },
  {
    id: 2,
    category: 'Entrepreneuriat · Vie étudiante',
    title: 'MangoPack remporte le premier prix du Business Game IUA 2026',
    date: '20 janvier 2026',
    author: 'Club Entrepreneuriat IUA',
    text: 'Une équipe d’étudiants en Master Gestion a remporté le Business Game 2026 avec leur projet MangoPack, axé sur la transformation écologique des résidus de mangue en emballages biodégradables.',
    fullText: 'Le Business Game IUA réunit chaque année plus de 200 étudiants répartis en équipes multidisciplinaires. Le projet MangoPack a particulièrement séduit le jury composé de chefs d\'entreprises et d\'investisseurs.',
    image: 'https://images.pexels.com/photos/5940844/pexels-photo-5940844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'from-sky-500/70',
    href: 'https://www.iuaci.org/rendez-vous-parents-liua-a-lecoute-des-familles/'
  },
  {
    id: 3,
    category: 'Diplômes · Réussite',
    title: 'Grande Cérémonie de Remise des Diplômes au Parc des Expositions',
    date: '18 juillet 2026',
    author: 'Direction Académique',
    text: 'L’IUA a célébré la promotion 2026 des diplômés de Licence et Master lors d’une cérémonie mémorable rassemblant plus de 3 000 invités, parents et partenaires.',
    fullText: 'Sous le haut parrainage des autorités universitaires, les diplômés des 5 facultés ont reçu leurs parchemins homologués par le MESRS et reconnus par le CAMES. Une journée d\'émotion et de fierté pour toute la communauté IUA.',
    image: '/graduation-2026.jpg',
    color: 'from-blue-500/70',
    href: 'https://www.instagram.com/p/DbBPsMWjcJk/'
  },
  {
    id: 4,
    category: 'Vie de campus · Familles',
    title: 'Rendez-vous Parents : L’IUA renforce le dialogue avec les familles',
    date: '4 octobre 2025',
    author: 'Direction des Études',
    text: 'Organisé sur le campus de la Riviera-Bonoumin, l’événement Rendez-vous Parents a permis un échange direct entre les équipes pédagogiques et les familles d’étudiants.',
    fullText: 'Cette journée portes ouvertes institutionnelle a permis de présenter le suivi académique personnalisé, les partenariats d\'insertion professionnelle et les nouvelles infrastructures informatiques de l\'université.',
    image: 'https://images.pexels.com/photos/7092608/pexels-photo-7092608.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'from-emerald-500/70',
    href: 'https://www.iuaci.org/rendez-vous-parents-liua-a-lecoute-des-familles/'
  },
  {
    id: 5,
    category: 'Partenariat · Finance',
    title: 'Partenariat stratégique IUA × Groupe XM pour les marchés financiers',
    date: '15 février 2025',
    author: 'UFR Sciences Économiques',
    text: 'L’IUA et le Groupe XM ont signé une convention d’accompagnement offrant aux étudiants en finance et gestion des modules pratiques sur le trading et la gestion de portefeuille.',
    fullText: 'Grâce à ce partenariat, une salle de marchés simulée équipée d\'outils d\'analyse en temps réel a été inaugurée à la BU Centrale pour la formation pratique des étudiants.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'from-amber-500/70',
    href: 'https://www.iuaci.org/'
  },
  {
    id: 6,
    category: 'Rentrée · Académique',
    title: 'Rentrée Académique 2025–2026 : Démarrage officiel des cours',
    date: '10 septembre 2025',
    author: 'Secrétariat Général',
    text: 'La rentrée pour l’ensemble des filières de Licence, Master et Formation Continue s’est déroulée dans des conditions optimales sur tous les campus de l’IUA.',
    fullText: 'L\'IUA a accueilli ses nouveaux bacheliers et étudiants internationaux lors des journées d\'intégration consacrées à la découverte du campus, des bibliothèques et des outils numériques.',
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', color: 'from-violet-500/70',
    href: 'https://www.iuaci.org/rentree-academique-2025/'
  },
  {
    id: 7,
    category: 'Recherche · FONSTI',
    title: 'Atelier IUA × FONSTI sur le montage de projets scientifiques',
    date: '12 novembre 2025',
    author: 'Vice-Rectorat à la Recherche',
    text: 'Les enseignants-chercheurs de l’IUA ont participé à une session intensive de formation animée par les experts du FONSTI et du PASRES.',
    fullText: 'L\'objectif de cet atelier est de renforcer les compétences de nos équipes scientifiques dans la rédaction de projets éligibles aux financements nationaux et internationaux.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'from-teal-500/70',
    href: 'https://www.iuaci.org/'
  },
  {
    id: 8,
    category: 'Insertion Professionnelle',
    title: 'Journée de l’Emploi (JEMP) : Plus de 40 entreprises recrutent à l’IUA',
    date: '28 mai 2025',
    author: 'Direction de l’Insertion (DIP)',
    text: 'La Direction de l’Insertion Professionnelle de l’IUA a réuni des dizaines de grandes entreprises partenaires pour des entretiens de recrutement en direct.',
    fullText: 'Stages de fin d\'études, premiers emplois et sessions de coaching de CV étaient au programme de cette journée phare pour nos diplômés.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'from-indigo-500/70',
    href: 'https://www.iuaci.org/'
  }
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

export function NewsPage({ onBack }: NewsPageProps) {
  const [selectedCat, setSelectedCat] = useState('Toutes');
  const [selectedArticle, setSelectedArticle] = useState<typeof allNews[0] | null>(null);

  const categories = ['Toutes', 'Institution', 'Vie étudiante', 'Diplômes', 'Partenariat', 'Recherche', 'Rentrée'];

  const filteredNews = allNews.filter(item => {
    if (selectedCat === 'Toutes') return true;
    return item.category.toLowerCase().includes(selectedCat.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Top Header Navigation */}
      <div className="border-b border-sky-900/50 bg-[#1a3b5c] text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 text-xs sm:px-8 lg:px-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-bold uppercase tracking-wider text-sky-300 transition hover:text-white text-xs"
          >
            <ArrowLeft size={14} />
            <span>RETOUR</span>
          </button>

          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-400">
            <span>Espace d'Information Officiel • IUA Abidjan</span>
          </div>
        </div>
      </div>

      {/* Hero Section Actualités */}
      <div className="relative overflow-hidden bg-slate-950 py-14 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(14,165,233,0.3),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(56,189,248,0.2),transparent_35%)]" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-3">
              <CalendarDays size={14} />
              <span>Fil d'Actualités & Agenda Officiel IUA</span>
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Actualités & Agenda Institutionnel
            </h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Retrouvez l'intégralité des événements, partenariats, distinctions académiques et le calendrier officiel de l'Institut Universitaire d'Abidjan.
            </p>
          </div>
        </div>
      </div>

      {/* Main Layout : Actualités (Gauche) + Agenda (Droite) */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          
          {/* Colonne Principale : Actualités */}
          <div>
            {/* Barre de filtre des catégories */}
            <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-5">
              <span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-400">Filtrer par thème :</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition ${
                    selectedCat === cat
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grille des articles */}
            <div className="grid gap-6 md:grid-cols-2">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[1.35] overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-slate-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="mb-3 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock3 size={13} className="text-sky-600" />
                          {item.date}
                        </span>
                        <span>{item.author}</span>
                      </div>

                      <h3 className="text-base font-bold leading-snug text-slate-900 group-hover:text-sky-600">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                      <button
                        onClick={() => setSelectedArticle(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900"
                      >
                        Lire l'article complet →
                      </button>

                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-sky-600"
                        title="Source officielle"
                      >
                        <Globe size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Colonne de Droite : Agenda Officiel IUA */}
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm h-fit sticky top-6">
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">Agenda IUA</h2>
                <p className="text-xs text-slate-500">Calendrier des événements officiels</p>
              </div>
              <CalendarDays className="text-sky-600 shrink-0" size={24} />
            </div>

            <div className="space-y-0">
              {events.map(([date, title, category], index) => (
                <div
                  key={title}
                  className="group relative block border-b border-slate-100 py-4 pl-6 transition hover:bg-sky-50/50 rounded-xl"
                >
                  <span className="absolute left-1 top-5 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-sky-500/15" />
                  {index < events.length - 1 && (
                    <span className="absolute bottom-0 left-[5px] top-7 w-px bg-sky-200" />
                  )}
                  <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <Clock3 size={13} className="text-sky-600 shrink-0" />
                    {date}
                  </p>
                  <h3 className="text-sm font-bold leading-snug text-slate-900 group-hover:text-sky-700">
                    {title}
                  </h3>
                  <span className="mt-1.5 inline-block rounded bg-sky-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sky-800">
                    {category}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-center text-white">
              <p className="text-xs font-bold text-sky-300 uppercase">Information Rentrée</p>
              <p className="mt-1 text-xs text-slate-300">
                Inscriptions et réinscriptions ouvertes auprès des services pédagogiques.
              </p>
            </div>
          </aside>

        </div>

      </section>

      {/* Modale de lecture complète de l'article */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <div className="relative aspect-[2] overflow-hidden bg-slate-900">
              <img src={selectedArticle.image} alt="" className="h-full w-full object-cover" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-950/80 p-2 text-white hover:bg-slate-950"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="mb-2 flex items-center gap-3 text-xs font-bold text-sky-600">
                <span>{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">{selectedArticle.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{selectedArticle.text}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{selectedArticle.fullText}</p>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                <a
                  href={selectedArticle.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-sky-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-sky-500"
                >
                  Voir sur iuaci.org →
                </a>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
