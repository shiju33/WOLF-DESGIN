import React from 'react';
import { Video, Palette, Box, MonitorPlay, Printer, Cpu } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'video',
    title: 'VIDEO EDITING',
    description: 'High-octane cuts, seamless transitions, and storytelling that grips the audience.',
    icon: 'video',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: 'motion',
    title: 'MOTION GRAPHICS',
    description: 'Kinetic typography and fluid animations to bring static concepts to life.',
    icon: 'motion',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: 'banner',
    title: 'BANNER EDITING',
    description: 'Striking visuals for social media, YouTube thumbnails, and ad campaigns.',
    icon: 'palette',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: '3d',
    title: '3D PRINTING',
    description: 'Rapid prototyping and custom modeling. From digital mesh to physical reality.',
    icon: 'printer',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: 'eng',
    title: 'ENGINEERING DESIGN',
    description: 'CAD modeling, technical schematics, and product design optimization.',
    icon: 'cpu',
    image: 'https://picsum.photos/400/300?random=6'
  }
];

const ServiceCard: React.FC<{ item: ServiceItem; index: number }> = ({ item, index }) => {
  const icons = {
    video: <Video className="w-8 h-8 text-cyan-400" />,
    motion: <MonitorPlay className="w-8 h-8 text-purple-400" />,
    palette: <Palette className="w-8 h-8 text-pink-400" />,
    printer: <Printer className="w-8 h-8 text-yellow-400" />,
    cpu: <Cpu className="w-8 h-8 text-green-400" />
  };

  return (
    <div className="group relative bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Glitch Hover Effect Overlay */}
      <div className="absolute inset-0 bg-purple-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      
      <div className="relative p-6 flex flex-col h-full">
        <div className="mb-4 flex justify-between items-start">
          <div className="p-3 bg-black/50 border border-gray-700 rounded-lg group-hover:border-white transition-colors">
            {icons[item.icon as keyof typeof icons] || <Box />}
          </div>
          <span className="text-4xl font-black text-gray-800 group-hover:text-gray-700 select-none font-anime-title">
            0{index + 1}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 font-anime-title group-hover:text-cyan-400 transition-colors">
          {item.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {item.description}
        </p>

        <div className="w-full h-32 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
           <h2 className="text-5xl md:text-6xl font-black text-white font-anime-title uppercase tracking-tight relative z-10">
             Our <span className="text-purple-500">Arsenal</span>
           </h2>
           <p className="text-cyan-400 tracking-widest mt-2 font-bold">SERVICES & CAPABILITIES</p>
           
           {/* Background Text Decoration */}
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-gray-900 -z-0 opacity-50 whitespace-nowrap select-none">
             サービス
           </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} item={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;