import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="max-w-4xl mx-auto" style={{ borderColor: 'var(--c-border)' }} />
        <Services />
        <hr className="max-w-4xl mx-auto" style={{ borderColor: 'var(--c-border)' }} />
        <Skills />
        <hr className="max-w-4xl mx-auto" style={{ borderColor: 'var(--c-border)' }} />
        <Experience />
        <hr className="max-w-4xl mx-auto" style={{ borderColor: 'var(--c-border)' }} />
        <Projects />
        <hr className="max-w-4xl mx-auto" style={{ borderColor: 'var(--c-border)' }} />
        <Education />
        <Cta />
      </main>
      <Footer />
    </>
  );
}