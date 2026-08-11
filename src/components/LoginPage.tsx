import { useState } from 'react';
import { LogIn, Shield, ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  profile: string;
  onBack: () => void;
}

export function LoginPage({ profile, onBack }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [matricule, setMatricule] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Simulation d'une tentative de connexion
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setError("Identifiants incorrects. Contactez l'administrateur si vous avez perdu vos accès.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        {/* Carte */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          {/* En-tête */}
          <div className="border-b border-slate-100 px-8 py-8 text-center">
            {/* Logo animé */}
            <div className="mb-5 flex justify-center">
              <div className="relative">
                <img
                  src="/WhatsApp-Image-2025-04-12-at-19.56.21.jpeg"
                  alt="Logo IUA"
                  className="animate-logo h-20 w-20 rounded-full object-cover bg-white"
                />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 shadow-lg shadow-sky-500/40">
                  <Shield size={12} className="text-white" />
                </span>
              </div>
            </div>
            <h1 className="mb-1 font-[Manrope] text-2xl font-bold tracking-tight text-slate-900">
              Espace de connexion
            </h1>
            <p className="text-sm font-medium text-sky-600">
              {profile}
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="login-email" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Adresse email
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom.nom@iuaci.org"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              />
            </div>

            {/* Matricule */}
            <div className="space-y-1.5">
              <label htmlFor="login-matricule" className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Matricule
              </label>
              <input
                id="login-matricule"
                type="text"
                required
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
                placeholder="Ex: 23IUA0145"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              />
            </div>

            {/* Message d'erreur */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600">
                {error}
              </div>
            )}

            {/* Bouton connexion */}
            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="group relative mt-2 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-sky-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-sky-600/30 transition-all duration-300 hover:bg-sky-500 hover:shadow-sky-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Connexion en cours…
                </>
              ) : (
                <>
                  <LogIn size={16} className="transition-transform group-hover:translate-x-0.5" />
                  Se connecter
                </>
              )}
            </button>

            {/* Note info */}
            <p className="text-center text-[11px] leading-5 text-slate-500">
              Vos identifiants vous sont fournis par l'administration.<br />
              Pour toute demande d'accès, contactez le service informatique.
            </p>
          </form>
        </div>

        {/* Lien retour */}
        <div className="mt-6 text-center">
          <button
            onClick={onBack}
            className="mx-auto flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 transition hover:text-slate-800"
          >
            <ArrowLeft size={14} /> RETOUR
          </button>
        </div>
      </div>
    </div>
  );
}
