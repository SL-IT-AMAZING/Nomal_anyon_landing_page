import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { FeatureShowcase } from './components/sections/FeatureShowcase';
import { Comparison } from './components/sections/Comparison';
import { UseCases } from './components/sections/UseCases';
import { Testimonials } from './components/sections/Testimonials';
import { Workflow } from './components/sections/Workflow';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { BetaSignup } from './components/sections/BetaSignup';
import { CTA } from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <FeatureShowcase />
        <Comparison />
        <UseCases />
        <Testimonials />
        <Workflow />
        <Pricing />
        <FAQ />
        <BetaSignup />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
