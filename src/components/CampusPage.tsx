import { ArrowLeft, MapPin, Phone, Building2, BookOpen } from 'lucide-react';

interface CampusPageProps {
  onBack: () => void;
}

const campuses = [
  {
    name: 'Campus Principal (Riviera Bonoumin)',
    description: 'Le cœur de la vie étudiante de l\'IUA. Il abrite l\'administration centrale, la présidence, et offre des infrastructures modernes pour un environnement d\'apprentissage optimal.',
    address: 'Riviera Bonoumin, Abidjan',
    filières: ['Sciences Économiques', 'Gestion', 'Administration des affaires', 'Communication'],
    image: '/venue-1.jpg',
  },
  {
    name: 'Campus des Sciences & Technologies',
    description: 'Dédié à l\'innovation et au numérique, ce campus ultra-connecté est équipé de laboratoires informatiques de pointe et d\'espaces de co-working pour les futurs ingénieurs.',
    address: 'Cocody II Plateaux, Abidjan',
    filières: ['Génie Informatique', 'Intelligence Artificielle', 'Cybersécurité', 'Big Data'],
    image: '/acc1.png',
  },
  {
    name: 'Campus Droit & Sciences Politiques',
    description: 'Un environnement propice à la réflexion juridique et politique, accueillant des conférences, des concours de plaidoirie et doté d\'une bibliothèque spécialisée.',
    address: 'Cocody II Plateaux, 7ème Tranche',
    filières: ['Droit Privé', 'Droit Public', 'Sciences Politiques', 'Droit des Affaires'],
    image: '/acc2.png',
  },
  {
    name: 'Campus International (Partenariats)',
    description: 'Le pôle d\'excellence pour nos programmes internationaux et délocalisés (UQTR, Vatel), offrant une ouverture directe sur le monde professionnel mondial.',
    address: 'Riviera 3, Abidjan',
    filières: ['Management Hôtelier (Vatel)', 'Programmes UQTR', 'MBA Internationaux'],
    image: '/graduation-2026.jpg',
  },
  {
    name: 'Campus Recherche & Innovation (VRRIC)',
    description: 'Le hub de la recherche de l\'IUA. Il rassemble nos chercheurs, doctorants et laboratoires partenaires pour faire avancer la science et l\'innovation en Afrique.',
    address: 'Abidjan',
    filières: ['Doctorats', 'Projets de Recherche', 'Laboratoires STIC, DSP, SEG'],
    image: '/WhatsApp_Image_2026-08-10_at_10.31.02.jpeg',
  }
];

export function CampusPage({ onBack }: CampusPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-[#1a3b5c] px-5 py-12 text-center text-white sm:px-8 lg:px-12">
        <button
          onClick={onBack}
          className="mx-auto mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-sky-300 transition hover:text-white"
        >
          <ArrowLeft size={16} /> RETOUR
        </button>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Les Campus de l'IUA
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-sky-100">
          5 campus d'excellence répartis au cœur d'Abidjan, pensés pour offrir un cadre d'études moderne, stimulant et adapté à chaque filière.
        </p>
      </div>

      {/* Liste des Campus */}
      <div className="mx-auto mt-16 max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12">
          {campuses.map((campus, index) => (
            <div
              key={campus.name}
              className={`flex flex-col gap-8 rounded-3xl bg-white p-6 shadow-lg lg:items-center lg:gap-16 lg:p-10 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Image */}
              <div className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-5/12">
                <div className="aspect-[4/3] w-full bg-slate-200">
                  <img
                    src={campus.image}
                    alt={campus.name}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Contenu */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-3xl font-extrabold text-[#1a3b5c]">{campus.name}</h2>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-500">
                    <MapPin size={16} className="text-[#007b8f]" />
                    {campus.address}
                  </div>
                </div>

                <p className="text-base leading-relaxed text-slate-600">
                  {campus.description}
                </p>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1a3b5c]">
                    <BookOpen size={16} className="text-[#007b8f]" />
                    Filières & Spécialités
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {campus.filières.map((filiere) => (
                      <span
                        key={filiere}
                        className="rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#007b8f] shadow-sm border border-slate-200"
                      >
                        {filiere}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="rounded-full bg-[#1a3b5c] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#007b8f]">
                    Découvrir ce campus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
