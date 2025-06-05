
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black scroll-smooth overflow-x-hidden">
      <Navigation />
      <main className="scroll-snap-y scroll-snap-mandatory">
        <section className="scroll-snap-section">
          <Hero />
        </section>
        <section className="scroll-snap-section">
          <About />
        </section>
        <section className="scroll-snap-section">
          <Projects />
        </section>
        <section className="scroll-snap-section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
