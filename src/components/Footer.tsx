import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-black font-heading tracking-tighter text-white uppercase mb-4 block">
              PRABHAKAR<span className="text-[#00f0ff]">.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Architectural Design, Building Planning, Construction, and Interior Design services tailored to your vision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff003c] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#7000ff] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 tracking-widest uppercase text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-bold uppercase tracking-wider">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-bold uppercase tracking-wider">Our Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-bold uppercase tracking-wider">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#00f0ff] transition-colors text-sm font-bold uppercase tracking-wider">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 tracking-widest uppercase text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-[#ff003c] transition-colors text-sm font-bold uppercase tracking-wider">Architectural Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#ff003c] transition-colors text-sm font-bold uppercase tracking-wider">Building Planning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#ff003c] transition-colors text-sm font-bold uppercase tracking-wider">Construction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#ff003c] transition-colors text-sm font-bold uppercase tracking-wider">Interior Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 tracking-widest uppercase text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#00f0ff] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">123 Architecture Blvd, Design District, City 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-[#ff003c] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-[#7000ff] flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@prabhakarassociates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs text-center md:text-left font-bold tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Prabhakar Associates. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-xs font-bold tracking-wider uppercase transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
