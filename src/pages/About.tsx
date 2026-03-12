import { motion } from 'motion/react';
import { Award, Users, Clock, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Clock size={40} className="text-[#00f0ff] mb-4" />, value: '15+', label: 'Years Experience' },
    { icon: <Users size={40} className="text-[#ff003c] mb-4" />, value: '250+', label: 'Happy Clients' },
    { icon: <Award size={40} className="text-[#7000ff] mb-4" />, value: '300+', label: 'Projects Completed' },
    { icon: <Target size={40} className="text-[#ffea00] mb-4" />, value: '25+', label: 'Design Awards' }
  ];

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="relative py-12 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/10 to-transparent opacity-50"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-3xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-4"
        >
          About <span className="text-gradient-cyan">Us</span>
        </motion.h1>
        <div className="relative z-10 w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] mx-auto mb-6"></div>
        <p className="relative z-10 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-light tracking-wide">
          Shaping environments that inspire and function seamlessly.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-black font-heading mb-6 uppercase tracking-wide">Our <span className="text-[#00f0ff]">Story</span></h2>
              <div className="w-16 h-1 bg-[#00f0ff] mb-8"></div>
              <p className="text-gray-400 mb-6 leading-relaxed text-base sm:text-lg font-light">
                Founded with a vision to redefine modern architecture, Prabhakar Associates has grown into a premier design and construction firm. We believe that every space has a story to tell, and our mission is to craft narratives through innovative design and meticulous execution.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed text-base sm:text-lg font-light">
                Our approach is rooted in the belief that architecture should not only be visually stunning but also profoundly functional. We blend contemporary aesthetics with sustainable practices to create spaces that enhance the quality of life for those who inhabit them.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff] to-[#7000ff] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Architecture Office" 
                className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-y border-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-black font-heading text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-[#00f0ff]/50 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff] opacity-10 rounded-bl-full group-hover:scale-110 transition-transform duration-500"></div>
              <h3 className="text-2xl font-black font-heading mb-6 uppercase tracking-wide flex items-center">
                <span className="w-8 h-1 bg-[#00f0ff] mr-4"></span> Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                To be the leading architectural firm recognized for transforming landscapes with iconic, sustainable, and human-centric designs that stand as testaments to innovation and excellence.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-[#ff003c]/50 transition-colors duration-500">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff003c] opacity-10 rounded-tr-full group-hover:scale-110 transition-transform duration-500"></div>
              <h3 className="text-2xl font-black font-heading mb-6 uppercase tracking-wide flex items-center">
                <span className="w-8 h-1 bg-[#ff003c] mr-4"></span> Our Mission
              </h3>
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-light">
                To deliver exceptional architectural and construction services by fostering a culture of creativity, collaboration, and continuous improvement, ensuring every project exceeds client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#7000ff]/10 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-2 uppercase tracking-wide">Meet The <span className="text-[#7000ff]">Founder</span></h2>
              <h3 className="text-xl text-gray-300 font-heading mb-6 tracking-wider uppercase">Ar. Rahul Prabhakar</h3>
              <div className="w-16 h-1 bg-[#7000ff] mb-8"></div>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg font-light">
                With over two decades of experience in the architecture and construction industry, Rahul Prabhakar established the firm with a passion for creating spaces that resonate with their inhabitants.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg font-light">
                His design philosophy centers on the seamless integration of form and function, drawing inspiration from modernist principles while embracing contemporary technologies. Under his leadership, Prabhakar Associates has grown into a multidisciplinary practice known for its uncompromising quality and innovative solutions.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-[#7000ff] to-[#00f0ff] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Founder" 
                className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
