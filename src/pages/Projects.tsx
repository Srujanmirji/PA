import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { Filter, LayoutGrid, List } from 'lucide-react';

export default function Projects() {
  const [activeStatus, setActiveStatus] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const { projects } = useProjects();

  const projectTypes = useMemo(() => {
    const types = new Set(projects.map(p => p.type));
    return ['all', ...Array.from(types)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const statusMatch = activeStatus === 'all' || p.category === activeStatus;
      const typeMatch = activeType === 'all' || p.type === activeType;
      return statusMatch && typeMatch;
    });
  }, [projects, activeStatus, activeType]);

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/10 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-4"
        >
          Our <span className="text-gradient-cyan">Portfolio</span>
        </motion.h1>
        <div className="relative z-10 w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] mx-auto mb-6"></div>
        <p className="relative z-10 text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
          A showcase of our finest architectural endeavors, blending innovation with precision.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <div className="flex flex-col gap-4 w-full md:w-auto overflow-hidden">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#00f0ff] flex items-center gap-2">
                <Filter size={14} /> Filter by Status
              </span>
              <div className="flex flex-row md:flex-wrap gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {['all', 'completed', 'ongoing', 'upcoming'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${
                      activeStatus === status 
                        ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                        : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto overflow-hidden">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#7000ff] flex items-center gap-2">
                <LayoutGrid size={14} /> Filter by Type
              </span>
              <div className="flex flex-row md:flex-wrap gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all border whitespace-nowrap ${
                      activeType === type 
                        ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                        : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden bg-white/5 rounded-2xl border border-white/10 hover:border-[#00f0ff]/60 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,240,255,0.15)]"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="aspect-[4/3] overflow-hidden relative">
                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine z-30"></div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 z-20 transition-transform duration-500 group-hover:translate-x-1">
                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                          {project.type}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 z-20 transition-transform duration-500 group-hover:translate-y-[-4px]">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                          project.category === 'completed' ? 'bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]/30' :
                          project.category === 'ongoing' ? 'bg-[#ff003c]/20 text-[#ff003c] border-[#ff003c]/30' :
                          'bg-[#7000ff]/20 text-[#7000ff] border-[#7000ff]/30'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 relative">
                      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#00f0ff]/50 transition-all duration-500"></div>
                      <h3 className="text-xl font-black font-heading mb-2 uppercase tracking-tight group-hover:text-[#00f0ff] transition-colors duration-300">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                      
                      <div className="flex flex-col gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform duration-300">
                          <span className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-[#00f0ff] transition-colors"></span>
                            Location
                          </span>
                          <span className="text-white group-hover:text-[#00f0ff] transition-colors">{project.location || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform duration-300 delay-75">
                          <span className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-[#00f0ff] transition-colors"></span>
                            Area
                          </span>
                          <span className="text-white group-hover:text-[#00f0ff] transition-colors">{project.area || 'N/A'}</span>
                        </div>
                        {project.category === 'completed' ? (
                          <div className="flex justify-between items-center pt-2 border-t border-white/5 group-hover:border-[#00f0ff]/20 transition-colors">
                            <span className="text-[#00f0ff]">Completed</span>
                            <span className="text-[#00f0ff]">{project.year}</span>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center pt-2 border-t border-white/5 group-hover:border-[#ff003c]/20 transition-colors">
                            <span className="text-[#ff003c]">Status</span>
                            <span className="text-[#ff003c]">{project.stage}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-32 bg-white/5 rounded-3xl border border-dashed border-white/10"
              >
                <p className="text-gray-500 text-lg font-light italic tracking-wide">No projects match your current filters.</p>
                <button 
                  onClick={() => { setActiveStatus('all'); setActiveType('all'); }}
                  className="mt-4 text-[#00f0ff] text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#7000ff]/10 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border-t border-white/10"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black font-heading mb-6 uppercase tracking-wide">Have a <span className="text-[#7000ff]">Vision?</span></h2>
          <p className="text-gray-400 mb-10 text-lg font-light">
            Let's build something extraordinary together.
          </p>
          <Link to="/contact" className="relative group overflow-hidden inline-block bg-white text-black px-10 py-4 uppercase tracking-widest font-bold transition-all rounded-xl">
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Start a Project</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
