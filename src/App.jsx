import { useScrollReveal, useTheme } from './utils/hooks';
import ParticleBackground from './components/ParticleBackground';
import Intro from './components/Intro';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Competitive from './components/Competitive';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Initialize scroll reveal
  useScrollReveal();

  return (
    <div className="app">
      <ParticleBackground />
      <Intro />
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Competitive />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
