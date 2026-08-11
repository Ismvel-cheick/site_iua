import { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowLeft,
  Building2,
  ChevronRight,
  Sparkles,
  FileCheck2,
  Briefcase,
  Layers,
  Globe,
  BrainCircuit,
  Landmark,
  FileText,
  UserPlus
} from 'lucide-react';

interface UfrPageProps {
  onBack: () => void;
  initialUfrId?: string;
}

export const ufrData = [
  {
    id: 'informatique',
    code: 'UFR-ST',
    title: 'Informatique & Sciences Technologies',
    subtitle: 'Unité de Formation et de Recherche en Sciences & Technologies',
    icon: BrainCircuit,
    color: 'from-cyan-500 to-sky-700',
    accentColor: 'bg-cyan-500',
    badge: 'CAMES & MESRS',
    overview: 'L’UFR Sciences et Technologies forme les futurs cadres, ingénieurs et experts du numérique, de la data science, du développement logiciel et des systèmes informatiques modernes en Afrique.',
    licences: [
      {
        name: 'Licence en Génie Informatique (GI)',
        duration: '3 ans (6 semestres) • Bac C, D, E, F, H',
        details: 'Développement d’applications web et mobiles, génie logiciel, bases de données relationnelles, algorithmique avancée et réseaux.'
      },
      {
        name: 'Licence MIAGE (Méthodes Informatiques Appliquées à la Gestion)',
        duration: '3 ans (6 semestres) • Bac C, D, E, F, H, G',
        details: 'Double compétence en informatique et gestion d’entreprise, systèmes d’information, ERP, comptabilité et gestion de projet.'
      },
      {
        name: 'Licence en Génie Civil',
        duration: '3 ans (6 semestres) • Bac C, D, E, F',
        details: 'Dimensionnement des structures, résistance des matériaux, dessin assisté par ordinateur (AutoCAD) et conduite de chantiers.'
      }
    ],
    masters: [
      {
        name: 'Master en Cybersécurité',
        duration: '2 ans (4 semestres)',
        details: 'Sécurité des systèmes d’information, cryptographie, pentesting, audit de sécurité, sécurisation cloud et protection des données.'
      },
      {
        name: 'Master MIAGE (Méthodes Informatiques Appliquées à la Gestion)',
        duration: '2 ans (4 semestres)',
        details: 'Gouvernance des systèmes d’information, décisionnel (BI), gestion de projets informatiques complexes, ERP et conduite du changement.'
      },
      {
        name: 'Master en Génie Informatique (GI)',
        duration: '2 ans (4 semestres)',
        details: 'Architecture logicielle avancée, systèmes distribués, DevOps, intégration continue et génie logiciel de haut niveau.'
      },
      {
        name: 'Master en Big Data & Intelligence Artificielle (IA)',
        duration: '2 ans (4 semestres)',
        details: 'Data Science, Machine Learning, Deep Learning, traitement de données massives (Big Data), analyse prédictive et ingénierie décisionnelle.'
      }
    ],
    otherSpecialties: ['Génie Civil', 'Génie Mécanique', 'Génie des Procédés'],
    jobs: [
      'Développeur Full-Stack Web & Mobile',
      'Ingénieur Data Scientist & IA',
      'Architecte Réseaux & Cybersécurité',
      'Chef de Projet Informatique / Consultant SI',
      'Administrateur de Base de Données (DBA)'
    ],
    admission: [
      'Baccalauréat légalisé (C, D, E, F, H) ou diplôme équivalent',
      'Extrait d’acte de naissance (moins de 3 mois)',
      '4 photos d’identité récentes',
      'Relevés de notes de la Seconde à la Terminale'
    ]
  },
  {
    id: 'droit',
    code: 'UFR-DSP',
    title: 'Droit & Sciences Politiques',
    subtitle: 'Unité de Formation et de Recherche en Droit, Justice & Gouvernance',
    icon: Landmark,
    color: 'from-sky-600 to-blue-800',
    accentColor: 'bg-sky-600',
    badge: 'CAMES & MESRS',
    overview: 'L’UFR Droit et Sciences Politiques dispense un enseignement juridique de haut niveau couvrant le droit privé, le droit des affaires OHADA, le droit public, la diplomatie et la gouvernance politique.',
    licences: [
      {
        name: 'Licence en Droit (Droit Privé, Droit Public & Général)',
        duration: '3 ans (6 semestres) • Tous Bac',
        details: 'Droit constitutionnel, droit civil, droit pénal, droit administratif, libertés fondamentales et institutions juridictionnelles.'
      },
      {
        name: 'Licence en Droit des Affaires & Économique (OHADA)',
        duration: '3 ans (6 semestres)',
        details: 'Droit commercial général OHADA, droit des sociétés, droit du travail, obligations et droit fiscal des entreprises.'
      }
    ],
    masters: [
      {
        name: 'Master en Droit des Affaires (OHADA)',
        duration: '2 ans (4 semestres)',
        details: 'Droit des sociétés OHADA, droit bancaire, arbitrage commercial international, restructuration et ingénierie juridique.'
      },
      {
        name: 'Master en Droit International et Humanitaire',
        duration: '2 ans (4 semestres)',
        details: 'Droit international public, droit des conflits armés, protection des droits de l’homme et justice pénale internationale.'
      },
      {
        name: 'Master en Droit Maritime et Activités Portuaires',
        duration: '2 ans (4 semestres)',
        details: 'Droit de la mer, contrats de transport maritime, droit portuaire, assurances maritimes et litiges du commerce international.'
      },
      {
        name: 'Master en Droit Bancaire et Marché Financier',
        duration: '2 ans (4 semestres)',
        details: 'Réglementation bancaire, droit boursier, opérations de marché, conformité (compliance) et ingénierie financière.'
      },
      {
        name: 'Master en Fiscalité des Entreprises',
        duration: '2 ans (4 semestres)',
        details: 'Audit et optimisation fiscale, droit douanier, contentieux fiscal, fiscalité internationale et prix de transfert.'
      },
      {
        name: 'Master en Sécurité Internationale – Gestion des Conflits et Paix',
        duration: '2 ans (4 semestres)',
        details: 'Géopolitique mondiale, prévention des crises, maintien de la paix, sécurité transfrontalière et stratégie.'
      },
      {
        name: 'Master en Politique Publique et Gouvernance',
        duration: '2 ans (4 semestres)',
        details: 'Analyse des politiques publiques, décentralisation, gouvernance administrative et réforme de l’État.'
      },
      {
        name: 'Master en Relations Internationales et Diplomatie',
        duration: '2 ans (4 semestres)',
        details: 'Pratique diplomatique, négociation internationale, droit de la diplomatie et représentation d’État.'
      }
    ],
    otherSpecialties: ['Droit Foncier & Notarial', 'Droit des Assurances', 'Droit du Numérique & Cybersécurité'],
    jobs: [
      'Avocat & Juriste d’Entreprise',
      'Magistrat, Notaire & Huissier de Justice',
      'Diplomate & Cadre des Organisations Internationales (ONU, UA, CEDEAO)',
      'Conseiller Fiscal & Auditeur Juridique',
      'Expert en Droit Maritime & Transit Portuaire'
    ],
    admission: [
      'Baccalauréat toutes séries (A, C, D, G...) ou diplôme équivalent',
      'Dossier d’admission pédagogique IUA',
      'Extrait d’acte de naissance légalisé (moins de 3 mois)',
      'Relevés de notes du Baccalauréat et des années antérieures'
    ]
  },
  {
    id: 'gestion',
    code: 'UFR-SEG',
    title: 'Sciences Économiques & de Gestion',
    subtitle: 'Unité de Formation et de Recherche en Économie, Finance & Management',
    icon: Building2,
    color: 'from-blue-600 to-indigo-800',
    accentColor: 'bg-blue-600',
    badge: 'CAMES & MESRS',
    overview: 'Forme les leaders, économistes et gestionnaires de demain avec des programmes axés sur la finance, la comptabilité, l’audit, la gestion de projet, le marketing digital et le trading international (Partenariat Groupe XM).',
    licences: [
      {
        name: 'Licence en Administration des Affaires (BBA)',
        duration: '3 ans (6 semestres)',
        details: 'Gestion d’entreprise, comptabilité générale et analytique, marketing, ressources humaines et stratégie d’organisation.'
      },
      {
        name: 'Licence en Gestion de Projet',
        duration: '3 ans (6 semestres)',
        details: 'Conception, planification stratégique, suivi-évaluation, cadre logique, budget et ingénierie de projet.'
      },
      {
        name: 'Licence en Économie (Économie Appliquée & Développement)',
        duration: '3 ans (6 semestres)',
        details: 'Microéconomie, macroéconomie, économétrie, politiques économiques, statistiques et analyse de données.'
      },
      {
        name: 'Licence en Finance, Banque & Comptabilité',
        duration: '3 ans (6 semestres)',
        details: 'Gestion financière, opérations bancaires, comptabilité financière, contrôle de gestion et fiscalité.'
      }
    ],
    masters: [
      {
        name: 'Master Finance & Comptabilité (Audit & Contrôle de Gestion)',
        duration: '2 ans (4 semestres)',
        details: 'Analyse financière avancée, audit comptable et financier, normes IFRS, contrôle de gestion et évaluation d’entreprises.'
      },
      {
        name: 'Master Monnaie, Banque, Finance & Trading (Partenariat Groupe XM)',
        duration: '2 ans (4 semestres)',
        details: 'Marchés financiers mondiaux, trading simulé en salle de marché à la BU IUA, gestion des risques et finance de marché.'
      },
      {
        name: 'Master en Gestion de Projet & Développement',
        duration: '2 ans (4 semestres)',
        details: 'Management de projets complexes, passation de marchés, gestion des risques et relations bailleurs de fonds.'
      },
      {
        name: 'Master Marketing & Vente Digital',
        duration: '2 ans (4 semestres)',
        details: 'Marketing stratégique, étude de marché, e-commerce, comportement du consommateur et gestion des marques.'
      },
      {
        name: 'Master Logistique & Transport Maritime',
        duration: '2 ans (4 semestres)',
        details: 'Supply chain management, logistique internationale, gestion des flux portuaires et transit douanier.'
      },
      {
        name: 'Master Ressources Humaines (GRH)',
        duration: '2 ans (4 semestres)',
        details: 'Gestion prévisionnelle des emplois, droit du travail, paie, développement des compétences et climat social.'
      },
      {
        name: 'Master en Économie & Stratégie de Développement',
        duration: '2 ans (4 semestres)',
        details: 'Économie internationale, politiques de développement, modélisation macroéconomique et analyse des marchés.'
      },
      {
        name: 'Master Gestion des Risques en Assurance',
        duration: '2 ans (4 semestres)',
        details: 'Souscription, gestion des sinistres, actuariat assurance, réassurance et réglementation CIMA.'
      }
    ],
    otherSpecialties: ['Commerce International', 'Entrepreneuriat & Économie Circulaire (Business Game IUA)'],
    jobs: [
      'Directeur Financier (CFO) & Contrôleur de Gestion',
      'Trader & Analyste des Marchés Financiers / Banker',
      'Chef de Projet & Consultant en Management',
      'Auditeur Comptable & Expert-Comptable Stagiaire',
      'Manager Supply Chain & Responsable Logistique Portuaire'
    ],
    admission: [
      'Baccalauréat A, C, D, G1, G2 ou diplôme équivalent',
      'Dossier d’inscription pédagogique IUA',
      'Copie légalisée de la pièce d’identité / passeport'
    ]
  },
  {
    id: 'communication',
    code: 'UFR-ALL',
    title: 'Arts, Lettres, Langues & Communication',
    subtitle: 'Unité de Formation et de Recherche en Communication, Médias & Langues',
    icon: Globe,
    color: 'from-violet-600 to-purple-800',
    accentColor: 'bg-violet-600',
    badge: 'CAMES & MESRS',
    overview: 'L’UFR Arts, Lettres, Langues et Communication prépare aux métiers de la communication d’entreprise, du journalisme numérique, du marketing digital et de la traduction d’affaires.',
    licences: [
      {
        name: 'Licence en Communication d’Entreprise & Médias',
        duration: '3 ans (6 semestres)',
        details: 'Relations publiques, communication de crise, publicité, journalisme web, création visuelle et médias sociaux.'
      },
      {
        name: 'Licence en Communication Numérique & Journalisme Web',
        duration: '3 ans (6 semestres)',
        details: 'Production de contenus numériques, rédaction web, SEO, journalisme d’investigation et gestion de communauté.'
      },
      {
        name: 'Licence en Langues Étrangères Appliquées (LEA)',
        duration: '3 ans (6 semestres)',
        details: 'Anglais et Espagnol des affaires, traduction économique, rédaction internationale et négociation commerciale.'
      }
    ],
    masters: [
      {
        name: 'Master en Communication Stratégique & Digital Media',
        duration: '2 ans (4 semestres)',
        details: 'Branding, stratégies de contenu web, réputation numérique, direction de création et communication d’influence.'
      },
      {
        name: 'Master en Négociation Internationale & Langues',
        duration: '2 ans (4 semestres)',
        details: 'Interprétation de conférence, traduction juridique, relations interculturelles et accords commerciaux.'
      },
      {
        name: 'Master en Relations Publiques & Communication Événementielle',
        duration: '2 ans (4 semestres)',
        details: 'Ingénierie d’événements majeurs, mécénat, sponsoring, relations presse et gestion de l’image institutionnelle.'
      }
    ],
    otherSpecialties: ['Traduction d’Affaires', 'Branding, UX & Publicité Digital'],
    jobs: [
      'Directeur de la Communication (DIRCOM)',
      'Community Manager & Brand Manager',
      'Journaliste Web & Responsable Éditorial',
      'Traducteur & Interprète d’Affaires',
      'Consultant en Relations Publiques & Événementiel'
    ],
    admission: [
      'Baccalauréat séries A, C, D ou équivalent',
      'Dossier de candidature & Test de niveau en langues (pour LEA)'
    ]
  },
  {
    id: 'vatel',
    code: 'INSTITUT-VATEL',
    title: 'Vatel Abidjan – Management Hôtelier & Tourisme',
    subtitle: 'École Internationale de Management de l’Hôtellerie & du Tourisme',
    icon: Award,
    color: 'from-amber-500 to-orange-700',
    accentColor: 'bg-amber-500',
    badge: 'Diplôme Vatel International',
    overview: 'Partenariat exclusif IUA × Vatel pour former les futurs cadres et directeurs de l’hôtellerie de luxe, du tourisme et du catering international en Afrique et dans le monde.',
    licences: [
      {
        name: 'Bachelor in International Hotel Management',
        duration: '3 ans (Stage annuel obligatoire en hôtel 4* / 5*)',
        details: 'Alternance cours théoriques et pratiques en restauration, hébergement, finance hôtelière et marketing touristique.'
      }
    ],
    masters: [
      {
        name: 'MBA in International Hotel Management',
        duration: '2 ans',
        details: 'Management stratégique d’établissement hôtelier, yield management, ingénierie touristique et développement durable.'
      }
    ],
    otherSpecialties: ['Gestion des Événements & Catering', 'Luxury Brand Management'],
    jobs: [
      'Directeur d’Hôtel ou de Resort',
      'Manager de la Restauration (F&B)',
      'Yield Manager & Revenue Manager',
      'Directeur d’Agence de Voyage / Tourisme'
    ],
    admission: [
      'Baccalauréat toutes séries',
      'Entretien individuel de motivation et test d’anglais'
    ]
  }
];

export function UfrPage({ onBack, initialUfrId = 'informatique' }: UfrPageProps) {
  const [activeUfrId, setActiveUfrId] = useState(initialUfrId);
  const [showPreInscrip, setShowPreInscrip] = useState(false);

  const currentUfr = ufrData.find(u => u.id === activeUfrId) || ufrData[0];
  const Icon = currentUfr.icon;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Top Navigation */}
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
            <span>UFR, Écoles & Instituts • Offre de Formation Officielle IUA</span>
          </div>
        </div>
      </div>

      {/* Hero Banner UFR */}
      <div className={`relative overflow-hidden bg-gradient-to-r ${currentUfr.color} py-14 text-white shadow-lg`}>
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                <Icon size={16} />
                <span>{currentUfr.code}</span>
                <span>•</span>
                <span>{currentUfr.badge}</span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                {currentUfr.title}
              </h1>
              <p className="mt-2 text-sm font-medium text-sky-100 sm:text-base">
                {currentUfr.subtitle}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/90 sm:text-sm max-w-2xl">
                {currentUfr.overview}
              </p>
            </div>

            {/* Bouton de pré-inscription directe */}
            <div className="shrink-0 rounded-2xl bg-white/10 p-6 backdrop-blur-xl border border-white/20 text-center">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Inscriptions 2026–2027</p>
              <p className="mt-1 text-[11px] text-sky-100">Diplômes agréés MESRS & reconnus CAMES</p>
              <button
                onClick={() => setShowPreInscrip(true)}
                className="mt-4 flex items-center justify-center gap-2 w-full rounded-xl bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-md transition hover:bg-sky-50"
              >
                <UserPlus size={16} className="text-sky-600" />
                <span>Pré-Inscription en ligne</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Onglets de basculement entre toutes les UFRs de l'IUA */}
      <div className="border-b border-slate-200 bg-white sticky top-0 z-30 shadow-sm">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-12 scrollbar-none">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-2">Changer d'UFR :</span>
          {ufrData.map((ufr) => (
            <button
              key={ufr.id}
              onClick={() => setActiveUfrId(ufr.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold whitespace-nowrap transition ${
                activeUfrId === ufr.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-600'
              }`}
            >
              <span>{ufr.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contenu principal de l'UFR */}
      <main className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          
          {/* Colonne gauche : Licences & Masters */}
          <div className="space-y-12">
            
            {/* Section Licences */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                <GraduationCap className="text-sky-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Cycles Licence (Bac +3)</h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-1">
                {currentUfr.licences.map((lic, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">{lic.name}</h3>
                      <span className="shrink-0 rounded-md bg-sky-100 px-3 py-1 text-[11px] font-bold text-sky-800">
                        {lic.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{lic.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Masters */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                <Award className="text-sky-600" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Cycles Master (Bac +5)</h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-1">
                {currentUfr.masters.map((mas, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-300 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">{mas.name}</h3>
                      <span className="shrink-0 rounded-md bg-indigo-100 px-3 py-1 text-[11px] font-bold text-indigo-800">
                        {mas.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{mas.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Autres Spécialités */}
            {currentUfr.otherSpecialties && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Autres spécialités & parcours associés</h3>
                <div className="flex flex-wrap gap-2">
                  {currentUfr.otherSpecialties.map((spec, i) => (
                    <span key={i} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                      • {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Colonne droite : Débouchés & Conditions d'admission */}
          <div className="space-y-8">
            
            {/* Débouchés Professionnels */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Briefcase className="text-sky-600" size={20} />
                <h3 className="text-base font-bold text-slate-900">Débouchés & Métiers</h3>
              </div>
              <ul className="space-y-3">
                {currentUfr.jobs.map((job, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{job}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditions d'admission */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileCheck2 className="text-sky-600" size={20} />
                <h3 className="text-base font-bold text-slate-900">Conditions d'Admission</h3>
              </div>
              <ul className="space-y-2.5">
                {currentUfr.admission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Encadré d'aide */}
            <div className="rounded-3xl bg-slate-950 p-6 text-white text-center">
              <Sparkles size={28} className="mx-auto mb-2 text-sky-400" />
              <h4 className="font-bold text-sm">Besoin d'orientation ?</h4>
              <p className="mt-1 text-xs text-slate-400">
                Les conseillers d'orientation IUA répondent à vos questions du lundi au vendredi.
              </p>
              <button
                onClick={() => alert("Service Orientation IUA : +225 27 22 42 22 55 / scolarite@iuaci.org")}
                className="mt-4 w-full rounded-xl bg-sky-600 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-sky-500"
              >
                Contacter un conseiller
              </button>
            </div>

          </div>

        </div>

      </main>

      {/* Modale de Pré-Inscription */}
      {showPreInscrip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Pré-Inscription IUA 2026</h3>
                <p className="text-xs text-sky-600 font-semibold">{currentUfr.title}</p>
              </div>
              <button onClick={() => setShowPreInscrip(false)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Demande de pré-inscription pour la filière ${currentUfr.title} envoyée avec succès ! Un conseiller vous recontactera.`);
                setShowPreInscrip(false);
              }}
              className="mt-6 space-y-4 text-xs"
            >
              <div>
                <label className="block font-bold text-slate-600 uppercase">Nom & Prénoms</label>
                <input type="text" required placeholder="Ex: Kouamé Marc" className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="block font-bold text-slate-600 uppercase">Adresse Email</label>
                <input type="email" required placeholder="votre.email@exemple.com" className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="block font-bold text-slate-600 uppercase">Numéro de Téléphone / WhatsApp</label>
                <input type="tel" required placeholder="+225 07 00 00 00 00" className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="block font-bold text-slate-600 uppercase">Niveau d'études visé</label>
                <select className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500 bg-white">
                  <option>Licence 1 (Nouveau bachelier)</option>
                  <option>Licence 2 / Licence 3 (Équivalence)</option>
                  <option>Master 1 / Master 2</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-sky-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-sky-500"
              >
                Envoyer ma candidature
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
