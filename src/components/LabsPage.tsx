import { useState } from 'react';
import {
  FlaskConical,
  Microscope,
  Atom,
  BrainCircuit,
  BookOpen,
  Award,
  Globe,
  Building2,
  FileText,
  Users,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  Mail,
  Phone,
  Landmark,
  Sparkles,
  GraduationCap
} from 'lucide-react';

interface LabsPageProps {
  onBack: () => void;
}

const researchLabs = [
  {
    id: 'labo-droit',
    code: 'LABO-DROIT',
    name: 'Laboratoire de Recherche en Droit, Sciences Politiques & Gouvernance',
    director: 'Prof. Kouassi N\'Guessan',
    faculties: 'Faculté de Droit & Sciences Politiques',
    color: 'from-sky-600 to-blue-700',
    borderColor: 'border-sky-500/40',
    icon: Landmark,
    description: 'Centre d\'excellence axé sur l\'analyse du droit des affaires OHADA, le droit constitutionnel africain, la gouvernance publique et le droit maritime.',
    axes: [
      'Droit des Affaires OHADA & Contentieux Arbitral',
      'Droit Constitutionnel, Démocratie & Institutions Africaines',
      'Droit Maritime, Environnement & Ressources Naturelles',
      'Droit du Numérique & Protection des Données Personnelles'
    ],
    projects: '3 projets soutenus par le CAMES • 14 doctorants inscrits'
  },
  {
    id: 'labo-stic',
    code: 'LABO-STIC',
    name: 'Laboratoire des Sciences, Technologies, Informatique & Data Science',
    director: 'Dr. Yao Konan Jean',
    faculties: 'Faculté des Sciences & Technologies',
    color: 'from-cyan-500 to-teal-700',
    borderColor: 'border-cyan-500/40',
    icon: BrainCircuit,
    description: 'Pôle de recherche dédié à l\'Intelligence Artificielle appliquée, la modélisation mathématique, la cybersécurité et l\'actuariat.',
    axes: [
      'Intelligence Artificielle & Machine Learning pour le Développement',
      'Sécurité des Réseaux Mobiles & Infrastructure Cloud',
      'Mathématiques Financières, Actuariat & Modélisation des Risques',
      'Génie Logiciel & Systèmes d\'Information Géographique (SIG)'
    ],
    projects: 'Projet de recherche IA financé par le FONSTI • Partenariat Université de Nagoya (Japon)'
  },
  {
    id: 'labo-gestion',
    code: 'LABO-GESTION',
    name: 'Laboratoire d\'Études en Sciences Économiques, Management & Stratégie',
    director: 'Prof. Touré Mariam',
    faculties: 'Faculté des Sciences Économiques & de Gestion',
    color: 'from-blue-600 to-indigo-800',
    borderColor: 'border-blue-500/40',
    icon: Atom,
    description: 'Laboratoire d\'ingénierie financière, de stratégie d\'entreprise, de logistique portuaire et de développement de l\'entrepreneuriat en Afrique de l\'Ouest.',
    axes: [
      'Stratégie d\'Entreprise & Théorie des Organisations',
      'Gestion de la Chaîne Logistique & Marketing Portuaire',
      'Ingénierie Financière, Trading & Marchés Financiers (Partenariat Groupe XM)',
      'Entrepreneuriat Féminin, Économie Circulaire & Business Game'
    ],
    projects: 'Coopération scientifique avec l\'UQTR (Canada) • 350+ entreprises partenaires'
  },
  {
    id: 'labo-shs',
    code: 'LABO-SHS',
    name: 'Laboratoire de Sciences Humaines, Lettres, Communication & Médias',
    director: 'Dr. Bamba Bakary',
    faculties: 'Faculté des Arts, Lettres & Sciences Humaines',
    color: 'from-violet-600 to-purple-800',
    borderColor: 'border-violet-500/40',
    icon: Microscope,
    description: 'Recherches interdisciplinaires sur les médias numériques, la communication institutionnelle, la sociologie de l\'éducation et les dynamiques culturelles.',
    axes: [
      'Communication d\'Entreprise & Stratégie de Marque',
      'Numérique, Médias & Continuité Pédagogique en Afrique',
      'Sociologie du Développement & Transformations Sociales',
      'Linguistique Appliquée & Langues des Affaires'
    ],
    projects: 'Recherche financée sur les outils numériques d\'apprentissage post-crise'
  }
];

const researchPartnerships = [
  {
    title: 'Fonds pour la Science, la Technologie et l\'Innovation (FONSTI)',
    role: 'Organe National de Financement',
    desc: 'L\'IUA bénéficie du soutien et d\'ateliers réguliers avec le FONSTI / PASRES pour le renforcement des capacités des enseignants-chercheurs et le financement de projets innovants.'
  },
  {
    title: 'CAMES (Conseil Africain et Malgache)',
    role: 'Accréditation & Homologation',
    desc: 'Encadrement des enseignants-chercheurs pour les concours d\'agrégation et l\'inscription sur les listes d\'aptitude (LAFMA, LAFGR) de l\'espace CAMES.'
  },
  {
    title: 'Université du Québec à Trois-Rivières (UQTR - Canada)',
    role: 'Coopération Internationale',
    desc: 'Convention signée le 3 février 2026 ouvrant la voie à des cotutelles de thèses, des échanges de chercheurs et des publications scientifiques conjointes.'
  },
  {
    title: 'MCIE University of Nagoya (Japon)',
    role: 'Recherche Technologique',
    desc: 'Partenariat académique dans les domaines de la Data Science, de l\'Intelligence Artificielle et de la modélisation informatique avancée.'
  }
];

export function LabsPage({ onBack }: LabsPageProps) {
  const [selectedLab, setSelectedLab] = useState<string>(researchLabs[0].id);
  const currentLab = researchLabs.find(l => l.id === selectedLab) || researchLabs[0];

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
            <span>Vice-Rectorat de la Recherche, de l'Innovation & de la Coopération (VRRIC)</span>
          </div>
        </div>
      </div>

      {/* Hero Section Laboratoires */}
      <div className="relative overflow-hidden bg-slate-950 py-16 lg:py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-4">
              <FlaskConical size={14} />
              <span>Recherche Scientifique & Innovation • IUA Abidjan</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Laboratoires & Unités de Recherche
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Une recherche académique d'excellence, ancrée dans les réalités africaines et connectée aux standards internationaux. Pilotée par le Vice-Rectorat à la Recherche (VRRIC).
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-slate-300">
              <span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-md border border-white/10">
                <CheckCircle2 size={16} className="text-sky-400" /> 4 Laboratoires de Spécialité
              </span>
              <span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-md border border-white/10">
                <Award size={16} className="text-emerald-400" /> Évaluation MESRS "Bien" (15,88/20)
              </span>
              <span className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-md border border-white/10">
                <Globe size={16} className="text-cyan-400" /> Membre du CAMES & FONSTI
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Section : Présentation des 4 Laboratoires */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Les 4 Pôles de Recherche IUA
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Découvrez nos laboratoires de spécialité et leurs axes d'investigation académique.
          </p>
        </div>

        {/* Boutons de sélection du laboratoire */}
        <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {researchLabs.map((lab) => {
            const Icon = lab.icon;
            const isSelected = selectedLab === lab.id;
            return (
              <button
                key={lab.id}
                onClick={() => setSelectedLab(lab.id)}
                className={`flex flex-col items-start gap-3 rounded-2xl border p-5 text-left transition ${
                  isSelected
                    ? 'border-sky-500 bg-white shadow-xl ring-2 ring-sky-500/20'
                    : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50'
                }`}
              >
                <div className={`grid h-10 w-10 place-items-center rounded-xl text-white bg-gradient-to-br ${lab.color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600">{lab.code}</span>
                  <h3 className="mt-0.5 text-xs font-bold leading-snug text-slate-900">{lab.name}</h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Fiche détaillée du laboratoire sélectionné */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className={`bg-gradient-to-r ${currentLab.color} p-8 text-white`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="rounded-md bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  {currentLab.code}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {currentLab.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-sky-100">{currentLab.faculties}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md text-xs space-y-1">
                <p className="text-sky-200 font-semibold">Direction du Laboratoire :</p>
                <p className="text-white font-bold text-sm">{currentLab.director}</p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Présentation générale</h4>
              <p className="text-sm leading-relaxed text-slate-700">{currentLab.description}</p>
            </div>

            {/* Axes de recherche */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Principaux Axes de Recherche</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {currentLab.axes.map((axis, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <Sparkles size={16} className="mt-0.5 text-sky-600 shrink-0" />
                    <span className="text-xs font-semibold leading-snug text-slate-800">{axis}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projets & Impact */}
            <div className="rounded-2xl bg-sky-50 border border-sky-100 p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-sky-600">Projets & Thèses</span>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{currentLab.projects}</p>
              </div>
              <button
                onClick={() => alert(`Contact du laboratoire ${currentLab.code} : vrric@iuaci.org`)}
                className="rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-sky-500"
              >
                Contacter l'équipe →
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Section Partenariats Scientifiques & FONSTI */}
      <section className="bg-slate-900 py-16 text-white border-t border-slate-800">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Financement & Réseau</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
              Partenariats de Recherche Scientifique
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {researchPartnerships.map((partner, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <span className="rounded-md bg-sky-500/20 px-2.5 py-1 text-[10px] font-bold uppercase text-sky-300">
                  {partner.role}
                </span>
                <h3 className="mt-3 text-base font-bold text-white">{partner.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{partner.desc}</p>
              </div>
            ))}
          </div>

          {/* Banner École Doctorale */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 p-8 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap size={22} className="text-white" />
                <h3 className="text-xl font-bold text-white">École Doctorale & Séminaires de Thèse IUA</h3>
              </div>
              <p className="text-xs text-sky-100 max-w-2xl">
                Inscriptions aux cycles doctoraux, ateliers de rédaction d'articles scientifiques et organisation des soutenances de thèse sous l'égide du Vice-Rectorat de la Recherche.
              </p>
            </div>
            <button
              onClick={() => alert("Pour vous inscrire en thèse ou contacter l'École Doctorale : ed-recherche@iuaci.org")}
              className="shrink-0 rounded-xl bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-md transition hover:bg-slate-100"
            >
              Renseignements Thèses →
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
