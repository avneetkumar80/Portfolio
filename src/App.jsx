import { useScrollReveal, useTheme } from './utils/hooks';
import ParticleBackground from './components/ParticleBackground';
import Intro from './components/Intro';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Competitive from './components/Competitive';
import GitHubStats from './components/GitHubStats';
import Education from './components/Education';
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
        <Experience />
        <Skills />
        <Projects />
        <Competitive />
        <GitHubStats />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
