import React from 'react';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <div>
            <h2 className="text-5xl font-black text-white font-anime-title mb-8">
              JOIN THE <br/>
              <span className="text-purple-500">WOLF PACK</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Ready to elevate your project? Whether it's 3D engineering or high-speed video edits, we are ready to execute.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-purple-900/50 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 font-bold tracking-widest">EMAIL</h3>
                  <a href="mailto:shijucsj3@gmail.com" className="text-xl text-white font-medium hover:text-purple-400 transition-colors">
                    shijucsj3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-green-900/50 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 font-bold tracking-widest">WHATSAPP</h3>
                  <a href="https://wa.me/919488329959" className="text-xl text-white font-medium hover:text-green-400 transition-colors">
                    +91 94883 29959
                  </a>
                </div>
              </div>
              
               <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-yellow-900/50 transition-colors">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 font-bold tracking-widest">LEAD DESIGNER</h3>
                  <p className="text-xl text-white font-medium">
                    Shiju
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Visual Column */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl opacity-20 blur-lg"></div>
            <div className="relative bg-gray-900 p-8 rounded-xl border border-gray-700">
               <h3 className="text-2xl font-bold text-white font-anime-title mb-6">SEND A MESSAGE</h3>
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Name</label>
                   <input type="text" className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" placeholder="Your Name" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Service</label>
                   <select className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors">
                     <option>Video Editing</option>
                     <option>Banner Design</option>
                     <option>Motion Graphics</option>
                     <option>3D Printing</option>
                     <option>Engineering Design</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Message</label>
                   <textarea rows={4} className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                 </div>
                 <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 clip-button transition-colors">
                   TRANSMIT REQUEST
                 </button>
               </form>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 border-t border-gray-900 pt-8 text-center">
        <p className="text-gray-600 text-sm font-mono">
          © 2024 WOLF DESIGNERS. ENGINEERED BY SHIJU.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;