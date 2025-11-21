import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black"></div>
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Background" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <div className="inline-block px-4 py-1 bg-yellow-400 text-black font-bold transform -skew-x-12">
            <span className="block transform skew-x-12 tracking-widest text-xs">EST. 2024 // TOKYO VIBES</span>
          </div>
          
          <h1 className="font-anime-title text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300 leading-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            WOLF <br/>
            <span className="text-stroke text-transparent stroke-white md:text-7xl text-5xl">DESIGNERS</span>
          </h1>
          
          <p className="font-rajdhani text-xl text-gray-300 max-w-lg border-l-4 border-cyan-400 pl-4">
            Unleash your brand's true potential with cutting-edge engineering, 
            dynamic motion graphics, and fierce visuals. We build the future.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="clip-button group relative px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold tracking-wider transition-all hover:translate-x-1">
              <span className="flex items-center gap-2">
                START PROJECT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#services" className="clip-button px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold tracking-wider transition-all">
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
           <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-purple-500/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-cyan-400/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-8 clip-anime bg-gradient-to-br from-purple-900 to-black overflow-hidden border border-gray-700">
                <img 
                  src="https://picsum.photos/600/600?random=1" 
                  alt="Anime Cyberpunk Style" 
                  className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-0 right-0 p-4 bg-black/80 backdrop-blur">
                  <p className="text-cyan-400 font-mono text-xs">SYS.READY</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Japanese Text Decoration */}
      <div className="absolute bottom-10 right-10 text-8xl font-black text-white/5 pointer-events-none select-none vertical-lr writing-mode-vertical">
        ウルフ・デザイナー
      </div>
    </section>
  );
};

export default Hero;