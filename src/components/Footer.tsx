import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="text-2xl sm:text-3xl font-black font-heading tracking-tighter text-white uppercase mb-8 block">
              PRABHAKAR<span className="text-[#00f0ff]">.</span>
            </Link>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 font-light max-w-md">
              Redefining the architectural landscape through innovation, precision, and a commitment to sustainable excellence.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="text-gray-500 hover:text-[#00f0ff] transition-colors text-xs font-bold uppercase tracking-widest">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Expertise</h4>
              <ul className="space-y-4">
                {['Design', 'Planning', 'Construction', 'Interior'].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-gray-500 hover:text-[#ff003c] transition-colors text-xs font-bold uppercase tracking-widest">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin size={16} className="text-[#00f0ff] mt-1 flex-shrink-0" />
                  <span className="text-gray-500 text-xs leading-relaxed font-bold uppercase tracking-wider">123 Architecture Blvd, Design District, City 10001</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={16} className="text-[#ff003c] flex-shrink-0" />
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Prabhakar Associates. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Privacy</Link>
            <Link to="#" className="text-gray-600 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
