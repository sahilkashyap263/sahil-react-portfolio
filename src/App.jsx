import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certs from './components/Certs';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative bg-background text-primary min-h-screen">
      <ProgressBar />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certs />
        <Contact />
      </main>
    </div>
  );
}