import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { LabsPage } from '@/components/LabsPage';
import { LibraryPage } from '@/components/LibraryPage';
import { LoginPage } from '@/components/LoginPage';
import { NewsPage } from '@/components/NewsPage';
import { NewsSection } from '@/components/NewsSection';
import { PartnersSection } from '@/components/PartnersSection';
import { PortalHeader } from '@/components/PortalHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { UfrPage } from '@/components/UfrPage';
import { UniversityOverviewSection } from '@/components/UniversityOverviewSection';
import { CampusPage } from '@/components/CampusPage';

export type ViewType = 'home' | 'actualites' | 'library' | 'laboratoires' | 'ufr' | 'campus';

function App() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedUfrId, setSelectedUfrId] = useState<string>('informatique');

  const handleNavigate = (view: ViewType, ufrId?: string) => {
    if (ufrId) {
      setSelectedUfrId(ufrId);
    }
    setCurrentView(view);
  };

  if (selectedProfile) {
    return <LoginPage profile={selectedProfile} onBack={() => setSelectedProfile(null)} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-950">
      <PortalHeader activeView={currentView} onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' && (
          <>
            <HeroSection onProfileSelect={setSelectedProfile} />
            <NewsSection />
            <UniversityOverviewSection />
            <PartnersSection />
          </>
        )}

        {currentView === 'actualites' && (
          <NewsPage onBack={() => setCurrentView('home')} />
        )}

        {currentView === 'library' && (
          <LibraryPage onBack={() => setCurrentView('home')} />
        )}

        {currentView === 'laboratoires' && (
          <LabsPage onBack={() => setCurrentView('home')} />
        )}

        {currentView === 'ufr' && (
          <UfrPage onBack={() => setCurrentView('home')} initialUfrId={selectedUfrId} />
        )}

        {currentView === 'campus' && (
          <CampusPage onBack={() => setCurrentView('home')} />
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
