import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Games from './components/Games';
import Skills from './components/Skills';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onNavigate={scrollToSection} />
      <Hero />
      <Biography />
      <Games />
      <Skills />
    </div>
  );
}

export default App;