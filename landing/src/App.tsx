import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { FeatureShowcase } from './components/sections/FeatureShowcase';
import { Testimonials } from './components/sections/Testimonials';
import { Workflow } from './components/sections/Workflow';
import { CTA } from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <FeatureShowcase />
        <Testimonials />
        <Workflow />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
