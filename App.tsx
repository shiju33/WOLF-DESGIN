import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AiAssistant />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;