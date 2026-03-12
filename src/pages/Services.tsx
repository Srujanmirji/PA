import { motion } from 'motion/react';
import { PenTool, Ruler, Building2, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'architectural-design',
      title: 'Architectural Design',
      icon: <PenTool size={48} className="text-[#00f0ff]" />,
      color: '#00f0ff',
      description: 'We craft innovative and functional design solutions for residential, commercial, and institutional spaces. Our approach integrates aesthetics with practicality, ensuring every structure is a masterpiece.',
      features: ['Custom House Planning', 'Elevation Design', '3D Visualization & Walkthroughs', 'Sustainable Architecture'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'building-planning',
      title: 'Building Planning',
      icon: <Ruler size={48} className="text-[#ff003c]" />,
      color: '#ff003c',
      description: 'Comprehensive layout planning that maximizes space utilization while adhering to local building codes and regulations. We guide you through the entire approval process.',
      features: ['Site Analysis & Feasibility Studies', 'Master Layout Planning', 'Structural Engineering Coordination', 'Municipal Approval Guidance'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'construction',
      title: 'Construction',
      icon: <Building2 size={48} className="text-[#7000ff]" />,
      color: '#7000ff',
      description: 'End-to-end construction services delivered with rigorous project supervision. We ensure high-quality materials, timely execution, and strict adherence to design specifications.',
      features: ['Turnkey Residential Construction', 'Commercial Building Execution', 'Project Management & Supervision', 'Quality Control & Assurance'],
      image: 'https://images.unsplash.com/photo-1541888087425-ce81dfc46928?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      icon: <HomeIcon size={48} className="text-[#ffea00]" />,
      color: '#ffea00',
      description: 'Creating inspiring, functional, and personalized interiors. We transform empty spaces into vibrant environments that reflect your lifestyle or brand identity.',
      features: ['Home Interior Styling', 'Office Space Planning', 'Custom Furniture Design', 'Lighting & Material Selection'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="relative py-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff003c]/10 to-transparent opacity-50"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-3xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-4"
        >
          Our <span className="text-gradient-cyan">Services</span>
        </motion.h1>
        <div className="relative z-10 w-24 h-1 bg-gradient-to-r from-[#ff003c] to-[#00f0ff] mx-auto mb-6"></div>
        <p className="relative z-10 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-light tracking-wide">
          Comprehensive solutions from concept to completion.
        </p>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 sm:space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="mb-6 bg-white/5 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl border border-white/10">{service.icon}</div>
                  <h2 className="text-2xl md:text-4xl font-black font-heading mb-4 sm:mb-6 uppercase tracking-wide">{service.title}</h2>
                  <div className="w-16 h-1 mb-8" style={{ backgroundColor: service.color }}></div>
                  <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg font-light">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 font-medium tracking-wide">
                        <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: service.color }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" style={{ backgroundColor: service.color }}></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/10 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-t border-white/10"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black font-heading mb-6 uppercase tracking-wide">Ready to start your <span className="text-[#00f0ff]">project?</span></h2>
          <p className="text-gray-400 mb-10 text-lg font-light">
            Let's discuss how our expertise can bring your vision to life.
          </p>
          <Link to="/contact" className="relative group overflow-hidden inline-block bg-white text-black px-10 py-4 uppercase tracking-widest font-bold transition-all">
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Get in Touch</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
