import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { CommandsSection } from './sections/CommandsSection';
import { DeveloperSection } from './sections/DeveloperSection';
import { FAQSection } from './sections/FAQSection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <CommandsSection />
          <DeveloperSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
