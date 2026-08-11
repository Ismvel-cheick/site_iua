import { useState } from 'react';
import { X, ExternalLink, Search, Filter } from 'lucide-react';

export function UniversityOverviewSection() {
  const [showUnivModal, setShowUnivModal] = useState(false);
  const [showPortraitsModal, setShowPortraitsModal] = useState(false);

  // Filtres pour la modale Portraits (identique à la capture d'écran)
  const [selectedType, setSelectedType] = useState('- Sélectionner -');
  const [searchKeyword, setSearchKeyword] = useState('');

  const rawPortraits = [
    {
      name: 'AKA Kouamé',
      role: 'Fondateur & Président de l’IUA',
      type: 'Fondateur & Présidence',
      image: '/fonder.webp',
      desc: 'Professeur Titulaire & Agrégé. Fondateur de l’Institut Universitaire d’Abidjan (IUA) en 2004. Figure majeure de l’enseignement supérieur privé en Côte d’Ivoire et promoteur de l’excellence académique homologuée MESRS et CAMES.'
    },
    {
      name: 'ANOH Kouassi Paul',
      role: 'Recteur de l’IUA',
      type: 'Recteur & Direction Académique',
      image: '/recte.webp',
      desc: 'Professeur des Universités. Dirige l’administration académique, scientifique et pédagogique de l’IUA. Supervise le développement des 5 UFR et des partenariats universitaires internationaux.'
    }
  ];

  const filteredPortraits = rawPortraits.filter(item => {
    const matchesType = selectedType === '- Sélectionner -' || selectedType === 'Tous' || item.type === selectedType;
    const matchesKeyword = item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                           item.role.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                           item.desc.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesType && matchesKeyword;
  });

  return (
    <section className="border-t border-slate-200 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        
        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 items-center">
          
          {/* Colonne Gauche : Présentation & Chiffres clés */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600">
              Institut Universitaire d'Abidjan
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Étudier à l'Institut Universitaire d'Abidjan
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                L'offre éducative de l'IUA couvre tous les niveaux de <span className="font-semibold text-slate-900">Licence, Master et Doctorat</span> dans de nombreux domaines d'études (Droit, Informatique, Gestion, Communication, Hôtellerie...), tout en proposant une approche interdisciplinaire innovante du cursus.
              </p>
              <p>
                À l'IUA, les étudiants bénéficient aussi de campus modernes et connectés à la Riviera-Bonoumin, équipés de nombreuses infrastructures informatiques, d'une bibliothèque universitaire certifiée et d'espaces de convivialité.
              </p>
            </div>

            {/* 4 Chiffres clés (11 000+ étudiants & 5 campus) */}
            <div className="mt-10 grid grid-cols-2 gap-8 border-y border-slate-200 py-8">
              <div>
                <p className="text-3xl font-black text-slate-950 sm:text-4xl">11 000+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">étudiants</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-950 sm:text-4xl">5</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">campus</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-950 sm:text-4xl">25+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">formations</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-950 sm:text-4xl">100+</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">enseignants-chercheurs</p>
              </div>
            </div>

            {/* Seul le bouton "En savoir plus sur l'Université" reste ici */}
            <div className="mt-8">
              <button
                onClick={() => setShowUnivModal(true)}
                className="rounded-full bg-sky-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-sky-500 hover:shadow-xl active:scale-95"
              >
                En savoir plus sur l'Université
              </button>
            </div>
          </div>

          {/* Colonne Droite : Carte Portrait (Photo img.jpeg + CISSE ANZOUMANA) */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[380px]">
              <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-950 text-left">
                Portraits
              </h3>

              <div
                onClick={() => setShowPortraitsModal(true)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/img.jpeg"
                    alt="Portrait de CISSE ANZOUMANA"
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-lg font-extrabold tracking-tight text-white drop-shadow-md">
                    CISSE ANZOUMANA
                  </p>
                  <p className="text-xs font-medium text-sky-300">
                    Institut Universitaire d'Abidjan
                  </p>
                </div>
              </div>

              {/* Bouton sous le portrait pour ouvrir la modale Portraits */}
              <button
                onClick={() => setShowPortraitsModal(true)}
                className="mt-4 w-full rounded-full border border-slate-300 bg-slate-100 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-800 transition hover:bg-sky-600 hover:text-white hover:border-sky-600 shadow-sm"
              >
                Voir tous nos portraits
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* MODALE 1 : En savoir plus sur l'Université */}
      {showUnivModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-md">
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <img src="/WhatsApp-Image-2025-04-12-at-19.56.21.jpeg" alt="" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">À propos de l'IUA</h3>
                  <p className="text-xs text-sky-600 font-semibold">iuaci.org • Université Privée d'Excellence</p>
                </div>
              </div>
              <button onClick={() => setShowUnivModal(false)} className="rounded-full bg-slate-100 p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700">
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-xs leading-relaxed text-slate-600">
              <p className="text-sm font-semibold text-slate-800">
                Fondé par le Professeur AKA Kouamé, l'Institut Universitaire d'Abidjan (IUA) est un établissement d'enseignement supérieur privé reconnu par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique (MESRS) et homologué par le CAMES.
              </p>
              <div className="rounded-2xl bg-sky-50 p-4 border border-sky-100 space-y-2 text-slate-800">
                <p className="font-bold text-sky-900">🌟 Points clés de l'IUA :</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Diplômes homologués :</strong> Licences et Masters reconnus dans plus de 18 pays francophones d'Afrique.</li>
                  <li><strong>Évaluation Officielle MESRS :</strong> Mention "Bien" avec une note de 15,88/20.</li>
                  <li><strong>+350 Entreprises partenaires :</strong> Insertion professionnelle rapide via la Direction de l'Insertion (DIP).</li>
                  <li><strong>Partenariats Internationaux :</strong> UQTR (Canada), Vatel (France), Nagoya (Japon), Groupe XM.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
              <a
                href="https://www.iuaci.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-sky-500"
              >
                <span>Visiter iuaci.org</span>
                <ExternalLink size={14} />
              </a>
              <button
                onClick={() => setShowUnivModal(false)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODALE 2 : Annuaire des Portraits (Style exact de la photo avec filtres & recherché) */}
      {showPortraitsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl max-h-[90vh] flex flex-col">
            
            {/* Header Modale */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-900 px-6 py-4 text-white">
              <div>
                <h3 className="text-lg font-bold text-white">Annuaire des Portraits & Direction IUA</h3>
                <p className="text-xs text-sky-300">Portraits officiels du Fondateur, Recteur, Alumni et Personnalités</p>
              </div>
              <button onClick={() => setShowPortraitsModal(false)} className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                <X size={18} />
              </button>
            </div>

            {/* Barre de Filtrage Teal/Marron (Exactement comme dans la capture d'écran d'exemple) */}
            <div className="bg-[#008097] p-6 text-white shadow-md">
              <div className="grid gap-4 sm:grid-cols-12 items-end">
                
                {/* Select Dropdown Type */}
                <div className="sm:col-span-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2.5 text-xs text-white outline-none focus:bg-white focus:text-slate-900"
                  >
                    <option value="- Sélectionner -" className="text-slate-900">- Sélectionner -</option>
                    <option value="Tous" className="text-slate-900">Tous les portraits</option>
                    <option value="Fondateur & Présidence" className="text-slate-900">Fondateur & Présidence</option>
                    <option value="Recteur & Direction Académique" className="text-slate-900">Recteur & Direction Académique</option>
                    <option value="Alumni" className="text-slate-900">Alumni & Étudiants d'Excellence</option>
                  </select>
                </div>

                {/* Champ Mots clés recherchés */}
                <div className="sm:col-span-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">
                    Mots clés recherchés
                  </label>
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Ex: AKA Kouamé, Recteur, Cisse..."
                    className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2.5 text-xs text-white placeholder:text-white/60 outline-none focus:bg-white focus:text-slate-900"
                  />
                </div>

                {/* Bouton FILTRER Marron Doré (Style exact de la photo) */}
                <div className="sm:col-span-2">
                  <button
                    onClick={() => {}}
                    className="w-full rounded-md bg-[#a16a24] px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#8b5a1d] shadow-md"
                  >
                    FILTRER
                  </button>
                </div>

              </div>
            </div>

            {/* Liste des résultats de portraits (Format carte photo gauche, texte droite) */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50">
              {filteredPortraits.length === 0 ? (
                <div className="py-12 text-center text-sm text-slate-500">
                  Aucun portrait trouvé pour vos critères de recherche.
                </div>
              ) : (
                filteredPortraits.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-sky-300"
                  >
                    {/* Photo du Portrait sur la gauche */}
                    <div className="w-full sm:w-44 shrink-0 aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    {/* Détails du Portrait sur la droite (Comme sur la photo) */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="inline-block rounded-md bg-sky-100 px-2.5 py-1 text-[10px] font-bold text-sky-800 uppercase tracking-wider mb-2">
                          {item.type}
                        </span>
                        <h4 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                          {item.name}
                        </h4>
                        <p className="text-sm font-bold text-sky-700 mt-1">
                          {item.role}
                        </p>
                        <p className="mt-3 text-xs leading-relaxed text-slate-600">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                        <span>Institut Universitaire d'Abidjan</span>
                        <span className="text-sky-600">Leader de Demain ●</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Modale */}
            <div className="border-t border-slate-200 bg-white px-6 py-4 text-right">
              <button
                onClick={() => setShowPortraitsModal(false)}
                className="rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-sky-600"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
