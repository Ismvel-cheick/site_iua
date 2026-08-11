import { useState } from 'react';
import {
  BookOpen,
  Search,
  Clock,
  MapPin,
  Calendar,
  UserCheck,
  Globe,
  FileText,
  BookmarkCheck,
  ChevronRight,
  MessageCircle,
  X,
  CheckCircle2,
  Phone,
  Mail,
  Sparkles,
  ArrowLeft,
  GraduationCap
} from 'lucide-react';

interface LibraryPageProps {
  onBack: () => void;
}

// Données fictives mais très réalistes du catalogue IUA
const catalogItems = [
  {
    id: 1,
    title: "Droit Constitutionnel et Institutions Politiques en Côte d'Ivoire",
    author: "Prof. Kouassi N'Guessan",
    category: "Droit & Science Politique",
    type: "Livre imprimé",
    year: "2024",
    location: "BU Droit - Rayon D304",
    status: "Disponible",
    isbn: "978-2-8415-0982-1"
  },
  {
    id: 2,
    title: "Précis de Droit des Sociétés Commerciales OHADA",
    author: "Dr. Bamba Bakary",
    category: "Droit des Affaires",
    type: "Ouvrage & Ebook",
    year: "2025",
    location: "BU Centrale & En ligne (Dalloz)",
    status: "Disponible en ligne",
    isbn: "978-2-8415-1102-3"
  },
  {
    id: 3,
    title: "Intelligence Artificielle et Machine Learning : Principes et Applications",
    author: "Dr. Yao Konan Jean",
    category: "Informatique & Data Science",
    type: "Ebook",
    year: "2026",
    location: "Accès numérique (IEEE / Cairn)",
    status: "Disponible en ligne",
    isbn: "978-2-8415-1209-9"
  },
  {
    id: 4,
    title: "Management Stratégique des Entreprises en Afrique de l'Ouest",
    author: "Prof. Touré Mariam",
    category: "Sciences Économiques & Gestion",
    type: "Livre imprimé",
    year: "2023",
    location: "BU Centrale - Rayon G112",
    status: "Emprunté (Retour prévu 25 août)",
    isbn: "978-2-8415-0811-0"
  },
  {
    id: 5,
    title: "Systèmes de Gestion de Bases de Données Avancées et Big Data",
    author: "Ing. Koffi Axel",
    category: "Sciences & Technologies",
    type: "Ouvrage imprimé",
    year: "2025",
    location: "BU Sciences - Rayon ST08",
    status: "Disponible",
    isbn: "978-2-8415-1044-5"
  },
  {
    id: 6,
    title: "Finance d'Entreprise et Gestion de Portefeuille",
    author: "Dr. Diallo Mamadou",
    category: "Finance & Comptabilité",
    type: "Ouvrage & Ebook",
    year: "2024",
    location: "BU Centrale & Cairn.info",
    status: "Disponible",
    isbn: "978-2-8415-0955-4"
  }
];

const libraryNews = [
  {
    id: 1,
    title: "Accès rétabli à toutes les collections numériques & bases Dalloz / Cairn",
    date: "10 août 2026",
    category: "Ressources numériques",
    image: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=800",
    snippet: "L'accès à distance aux revues scientifiques et juridiques est désormais 100% opérationnel pour tous les étudiants et enseignants de l'IUA."
  },
  {
    id: 2,
    title: "Horaires élargis pour la période des révisions et examens",
    date: "4 août 2026",
    category: "Horaires BU",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    snippet: "La BU Centrale de la Riviera-Bonoumin restera ouverte du lundi au samedi jusqu'à 21h00 sans interruption."
  },
  {
    id: 3,
    title: "Nouveau service : Prêt gratuit de tablettes et ordinateurs portables",
    date: "28 juillet 2026",
    category: "Services",
    image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
    snippet: "Sur présentation de la carte d'étudiant IUA, empruntez un ordinateur portable pour travailler en salle de lecture."
  }
];

const libraryAgenda = [
  {
    date: "2 septembre 2026",
    time: "13h30 - 17h00",
    title: "Permanence d'aide à la recherche juridique & mémoires",
    tag: "Accès au droit",
    badgeColor: "bg-sky-100 text-sky-700"
  },
  {
    date: "16 septembre 2026",
    time: "14h00 - 16h00",
    title: "Atelier Zotero : Gestion des références bibliographiques",
    tag: "Atelier Méthode",
    badgeColor: "bg-emerald-100 text-emerald-700"
  },
  {
    date: "5 octobre 2026",
    time: "10h00 - 12h00",
    title: "Formation aux bases de données numériques (Dalloz, CAIRN, IEEE)",
    tag: "Recherche Numérique",
    badgeColor: "bg-violet-100 text-violet-700"
  },
  {
    date: "21 octobre 2026",
    time: "14h00 - 17h00",
    title: "Atelier Rédaction de Thèse & Mémoire de Master",
    tag: "Master & Doctorat",
    badgeColor: "bg-amber-100 text-amber-700"
  }
];

const iuaLibraries = [
  {
    name: "BU Centrale - Riviera Bonoumin",
    address: "Campus Principal IUA, Carrefour Cascades, II Plateaux 7e Tranche",
    hours: "Lun - Ven: 07h30 - 21h00 | Sam: 08h00 - 18h00",
    seats: "450 places assises",
    features: "6 salles de travail en groupe, Wi-Fi HD, 40 postes informatiques, Espace presse",
    contact: "+225 27 22 42 22 55 / bu-centrale@iuaci.org"
  },
  {
    name: "BU Droit & Sciences Politiques",
    address: "Bâtiment A, 2ème étage - Campus Riviera",
    hours: "Lun - Ven: 08h00 - 19h00 | Sam: 08h00 - 15h00",
    seats: "200 places assises",
    features: "Fonds juridique complet OHADA & Droit Ivoirien, Revues juridiques imprimées",
    contact: "bu-droit@iuaci.org"
  },
  {
    name: "BU Sciences, Technologies & Gestion",
    address: "Bâtiment C, 1er étage - Campus Riviera",
    hours: "Lun - Ven: 08h00 - 19h00 | Sam: 08h00 - 15h00",
    seats: "180 places assises",
    features: "Accès bases IEEE & ScienceDirect, Laboratoire informatique de recherche",
    contact: "bu-sciences@iuaci.org"
  }
];

export function LibraryPage({ onBack }: LibraryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [activeModal, setActiveModal] = useState<'compte' | 'ressources' | 'reserver' | 'contact' | null>(null);

  // Formulaire de réservation de salle
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    matricule: '',
    library: 'BU Centrale - Riviera Bonoumin',
    date: '2026-09-15',
    timeSlot: '10:00 - 12:00',
    people: '4 personnes'
  });

  // Filtrage du catalogue
  const filteredCatalog = catalogItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || item.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setActiveModal(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Barre supérieure de navigation rapide BU */}
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
            <span className="hidden sm:inline">Bibliothèque Universitaire • IUA Abidjan</span>
            <span className="hidden md:inline text-emerald-400 font-semibold">● BU Ouverte aujourd'hui jusqu'à 21h00</span>
          </div>
        </div>
      </div>

      {/* Hero Banner avec Rechercher dans le catalogue */}
      <div className="relative overflow-hidden bg-slate-900 py-16 lg:py-24">
        {/* Background Image avec overlay */}
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          
          <div className="mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md mb-3">
              <BookOpen size={14} />
              <span>Service de la Documentation & des Bibliothèques IUA</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bibliothèque Universitaire IUA
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Accédez à plus de 80 000 ouvrages imprimés, thèses, revues OHADA et bases de données scientifiques internationales.
            </p>
          </div>

          {/* Barre de Recherche du Catalogue (Style inspiré de la photo) */}
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher dans le catalogue documentaire (titre, auteur, sujet, OHADA, IA...)"
                  className="w-full rounded-xl border border-white/10 bg-white/90 py-4 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:bg-white focus:ring-4 focus:ring-sky-500/20"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById('catalogue-results');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-sky-500 active:scale-98"
              >
                <Search size={18} />
                <span>Rechercher</span>
              </button>
            </div>

            {/* 3 boutons sous la barre de recherche (Exactement comme la photo 1 & 3) */}
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <button
                onClick={() => setActiveModal('compte')}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-sky-600/30 hover:border-sky-400"
              >
                <UserCheck size={16} className="text-sky-300" />
                <span>COMPTE LECTEUR</span>
              </button>
              <button
                onClick={() => setActiveModal('ressources')}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-sky-600/30 hover:border-sky-400"
              >
                <Globe size={16} className="text-cyan-300" />
                <span>RESSOURCES NUMÉRIQUES</span>
              </button>
              <button
                onClick={() => {
                  setSelectedCategory('Droit');
                  const el = document.getElementById('catalogue-results');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:bg-sky-600/30 hover:border-sky-400"
              >
                <BookmarkCheck size={16} className="text-emerald-300" />
                <span>SÉLECTIONS DOCUMENTAIRES</span>
              </button>
            </div>
          </div>

          {/* 4 Boutons d'actions rapides (Barre verte/teal de la photo adaptée au design IUA) */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href="#nos-bu"
              className="flex items-center justify-between rounded-xl bg-teal-800/80 border border-teal-500/30 px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-teal-700 hover:shadow-teal-900/50"
            >
              <span>BIBLIOTHÈQUES</span>
              <ChevronRight size={16} />
            </a>
            <a
              href="#nos-bu"
              className="flex items-center justify-between rounded-xl bg-teal-800/80 border border-teal-500/30 px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-teal-700 hover:shadow-teal-900/50"
            >
              <span>HORAIRES</span>
              <ChevronRight size={16} />
            </a>
            <button
              onClick={() => setActiveModal('reserver')}
              className="flex items-center justify-between rounded-xl bg-teal-800/80 border border-teal-500/30 px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-teal-700 hover:shadow-teal-900/50"
            >
              <span>RÉSERVER UNE SALLE</span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => setActiveModal('contact')}
              className="flex items-center justify-between rounded-xl bg-teal-800/80 border border-teal-500/30 px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-teal-700 hover:shadow-teal-900/50"
            >
              <span>CONTACT ✉</span>
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* Section Résultats du Catalogue Documentaire (Interactif) */}
      <section id="catalogue-results" className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Catalogue Documentaire IUA
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              {filteredCatalog.length} document(s) trouvé(s) {searchQuery && `pour "${searchQuery}"`}
            </p>
          </div>

          {/* Filtres par domaine */}
          <div className="flex flex-wrap items-center gap-2">
            {['Tous', 'Droit', 'Informatique', 'Gestion', 'Finance'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des résultats du catalogue */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCatalog.map((book) => (
            <div
              key={book.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-400 hover:shadow-md"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-md bg-sky-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-700">
                    {book.category}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">{book.year}</span>
                </div>
                <h3 className="text-base font-bold leading-snug text-slate-900">
                  {book.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-slate-500">
                  Auteur : <span className="text-slate-700">{book.author}</span>
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-slate-400 shrink-0" />
                    <span>{book.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-sky-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{book.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                  book.status.includes('Disponible') ? 'text-emerald-600' : 'text-amber-600'
                }`}>
                  <span className={`h-2 w-2 rounded-full ${
                    book.status.includes('Disponible') ? 'bg-emerald-500' : 'bg-amber-500'
                  }`} />
                  {book.status}
                </span>

                <button
                  onClick={() => alert(`Réservation demandée pour "${book.title}". Connectez-vous avec votre matricule IUA pour valider.`)}
                  className="rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-bold text-white transition hover:bg-sky-600"
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Actualités & Agenda BU (Exactement comme la photo 1 & 2) */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            
            {/* Colonne Actualités BU (Photo 1 - Gauche) */}
            <div>
              <div className="mb-8 flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  ACTUALITÉS BU
                </h2>
                <span className="text-xs font-semibold text-sky-700">Toutes les informations documentaires</span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {libraryNews.map((news) => (
                  <article
                    key={news.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[1.3] overflow-hidden bg-slate-200">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {news.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400">{news.date}</span>
                        <h3 className="mt-2 text-sm font-bold leading-snug text-slate-900 group-hover:text-sky-600">
                          {news.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                          {news.snippet}
                        </p>
                      </div>
                      <button
                        onClick={() => alert(`Article complet : ${news.title}`)}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900"
                      >
                        En savoir plus →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Colonne Agenda BU (Photo 1 - Droite) */}
            <div>
              <div className="mb-8 flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  AGENDA BU
                </h2>
                <Calendar size={20} className="text-sky-600" />
              </div>

              <div className="space-y-4">
                {libraryAgenda.map((event, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50/50"
                  >
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-sky-600" />
                        {event.date} • {event.time}
                      </span>
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${event.badgeColor}`}>
                        {event.tag}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-bold leading-snug text-slate-900 group-hover:text-sky-700">
                      {event.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Bouton "Une question ?" comme sur la photo */}
              <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-6 text-center">
                <MessageCircle size={28} className="mx-auto mb-2 text-sky-600" />
                <h4 className="font-bold text-slate-900">Une question sur les services BU ?</h4>
                <p className="mt-1 text-xs text-slate-600">
                  Un bibliothécaire vous répond du lundi au vendredi.
                </p>
                <button
                  onClick={() => setActiveModal('contact')}
                  className="mt-4 w-full rounded-xl bg-sky-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-sky-700"
                >
                  Poser une question
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Section Nos Bibliothèques de Campus (Photo 3 lower banner) */}
      <section id="nos-bu" className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Réseau des bibliothèques</span>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
              Les Espaces de Lecture de l'IUA
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {iuaLibraries.map((lib, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-sky-500/50 hover:bg-white/10"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{lib.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{lib.address}</p>

                  <div className="mt-4 space-y-2 text-xs text-slate-400">
                    <p className="flex items-center gap-2 text-sky-300 font-medium">
                      <Clock size={14} /> {lib.hours}
                    </p>
                    <p className="flex items-center gap-2">
                      <GraduationCap size={14} /> {lib.seats}
                    </p>
                    <p className="flex items-start gap-2">
                      <Sparkles size={14} className="mt-0.5 text-amber-400 shrink-0" />
                      <span>{lib.features}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 text-xs font-semibold text-slate-400">
                  <p>Contact : {lib.contact}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODALES D'INTERACTIONS */}

      {/* Modale Compte Lecteur */}
      {activeModal === 'compte' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Espace Lecteur BU IUA</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <p className="text-xs text-slate-600">
                Connectez-vous avec vos identifiants institutionnels IUA pour consulter vos emprunts en cours, prolonger un prêt et réserver un document.
              </p>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Matricule Étudiant / Enseignant</label>
                <input type="text" placeholder="Ex: 23IUA0145" className="mt-1.5 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">Mot de passe BU</label>
                <input type="password" placeholder="••••••••" className="mt-1.5 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500" />
              </div>
              <button
                onClick={() => {
                  alert("Connexion à l'Espace Lecteur réussie ! Aucun retard de prêt constaté.");
                  setActiveModal(null);
                }}
                className="w-full rounded-xl bg-sky-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-sky-500"
              >
                Se connecter au compte lecteur
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modale Ressources Numériques */}
      {activeModal === 'ressources' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Bases de Données Numériques IUA</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <p className="text-xs text-slate-600">
                L'IUA offre un accès gratuit à distance et sur campus aux plus grandes bases de données mondiales :
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: "Dalloz.fr & LexisNexis", desc: "Codes OHADA, jurisprudence et revues juridiques", cat: "Droit" },
                  { name: "Cairn.info", desc: "Sciences humaines, gestion et sciences politiques", cat: "Multi-domaines" },
                  { name: "IEEE Xplore & ScienceDirect", desc: "Articles scientifiques en informatique et ingénierie", cat: "Technologies" },
                  { name: "Elearning IUA", desc: "Plateforme de Gestion de Cours et de Note", cat: "Cours" },
                  { name: "Cyberlibris ScholarVOX", desc: "Plus de 50 000 manuels scolaires et universitaires", cat: "Ebooks" }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-[10px] font-bold text-sky-600 uppercase">{item.cat}</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    <button
                      onClick={() => alert(`Redirection vers la base ${item.name} via vos identifiants IUA.`)}
                      className="mt-3 text-xs font-bold text-sky-700 hover:underline"
                    >
                      Accéder à la base →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modale Réservation de Salle */}
      {activeModal === 'reserver' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Réserver une Salle de travail BU</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            {bookingSuccess ? (
              <div className="py-8 text-center">
                <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-3" />
                <h4 className="text-lg font-bold text-slate-900">Réservation Confirmée !</h4>
                <p className="text-xs text-slate-600 mt-2">
                  Un e-mail de confirmation vous a été envoyé. Présentez-vous à l'accueil de la BU 5 min avant le créneau.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500">Nom & Prénom</label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="Ex: Yao Jean-Marc"
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500">Bibliothèque concernée</label>
                  <select
                    value={bookingData.library}
                    onChange={(e) => setBookingData({ ...bookingData, library: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500 bg-white"
                  >
                    <option>BU Centrale - Riviera Bonoumin</option>
                    <option>BU Droit & Sciences Politiques</option>
                    <option>BU Sciences & Technologies</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500">Date</label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500">Créneau</label>
                    <select
                      value={bookingData.timeSlot}
                      onChange={(e) => setBookingData({ ...bookingData, timeSlot: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500 bg-white"
                    >
                      <option>08:30 - 10:30</option>
                      <option>10:30 - 12:30</option>
                      <option>14:00 - 16:00</option>
                      <option>16:00 - 18:00</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal-700 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-teal-800"
                >
                  Confirmer la réservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Modale Contact & Aide */}
      {activeModal === 'contact' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Contact Bibliothécaires IUA</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            <div className="mt-6 space-y-4 text-xs text-slate-600">
              <div className="rounded-2xl bg-sky-50 p-4 space-y-3">
                <p className="flex items-center gap-2 text-slate-900 font-bold">
                  <Phone size={16} className="text-sky-600" /> +225 27 22 42 22 55 (Poste 108)
                </p>
                <p className="flex items-center gap-2 text-slate-900 font-bold">
                  <Mail size={16} className="text-sky-600" /> bibliotheque@iuaci.org
                </p>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500">Votre question ou demande d'aide</label>
                <textarea rows={3} placeholder="Expliquez ce que vous recherchez..." className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm outline-none focus:border-sky-500" />
              </div>
              <button
                onClick={() => {
                  alert("Message envoyé ! L'équipe de la BU vous répondra sous 24h.");
                  setActiveModal(null);
                }}
                className="w-full rounded-xl bg-sky-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-sky-500"
              >
                Envoyer ma demande
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
