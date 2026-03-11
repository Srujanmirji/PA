import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffea00]/10 to-transparent opacity-50"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-4"
        >
          Contact <span className="text-gradient-cyan">Us</span>
        </motion.h1>
        <div className="relative z-10 w-24 h-1 bg-gradient-to-r from-[#ffea00] to-[#ff003c] mx-auto mb-6"></div>
        <p className="relative z-10 text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
          Let's discuss your next architectural masterpiece.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            
            {/* Contact Information */}
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-6 uppercase tracking-wide">Get in <span className="text-[#ffea00]">Touch</span></h2>
              <div className="w-16 h-1 bg-[#ffea00] mb-8 mx-auto"></div>
              <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light max-w-2xl mx-auto">
                We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="flex items-start group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#00f0ff] transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 border border-white/10 group-hover:border-[#00f0ff] transition-colors">
                    <MapPin size={24} className="text-[#00f0ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading mb-2 uppercase tracking-wide text-white">Office Location</h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                      123 Architecture Blvd,<br />
                      Design District, City 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#ff003c] transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 border border-white/10 group-hover:border-[#ff003c] transition-colors">
                    <Phone size={24} className="text-[#ff003c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading mb-2 uppercase tracking-wide text-white">Phone Number</h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#7000ff] transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 border border-white/10 group-hover:border-[#7000ff] transition-colors">
                    <Mail size={24} className="text-[#7000ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading mb-2 uppercase tracking-wide text-white">Email Address</h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                      info@prabhakarassociates.com<br />
                      projects@prabhakarassociates.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#ffea00] transition-colors">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 border border-white/10 group-hover:border-[#ffea00] transition-colors">
                    <Clock size={24} className="text-[#ffea00]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading mb-2 uppercase tracking-wide text-white">Working Hours</h3>
                    <p className="text-gray-400 leading-relaxed font-light">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 max-w-md mx-auto">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-[#25D366] text-white px-8 py-4 uppercase tracking-wider font-bold hover:bg-[#128C7E] transition-colors shadow-lg rounded-xl"
                >
                  <MessageCircle size={20} className="mr-3" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-[#111] relative border-t border-white/10">
        {/* Placeholder for Google Map */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#050505]">
          <div className="text-center">
            <MapPin size={48} className="text-[#00f0ff] mx-auto mb-4" />
            <p className="text-white font-bold uppercase tracking-widest">Interactive Map Integration</p>
            <p className="text-gray-400 text-sm mt-2 font-light">123 Architecture Blvd, Design District, City 10001</p>
          </div>
        </div>
        {/* Actual iframe would go here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1621523000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(100%)' }} 
          allowFullScreen 
          loading="lazy"
          className="relative z-10 opacity-40 hover:opacity-80 transition-opacity duration-500 mix-blend-luminosity"
        ></iframe>
      </section>
    </div>
  );
}
