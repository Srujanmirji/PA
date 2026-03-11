import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('completed');
  const { projects } = useProjects();

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#111] py-24 px-4 text-center border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-4"
        >
          Our <span className="text-gradient-cyan">Portfolio</span>
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
          A showcase of our finest architectural endeavors.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Tabs */}
          <div className="flex justify-center mb-16 space-x-4 md:space-x-8 border-b border-white/10 pb-4">
            {['completed', 'ongoing', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm md:text-base font-bold uppercase tracking-widest pb-2 transition-colors relative ${
                  activeTab === tab ? 'text-[#00f0ff]' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Projects
                {activeTab === tab && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-[-17px] left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden glass-panel rounded-2xl cursor-pointer hover:border-[#00f0ff]/50 transition-colors"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-2 uppercase tracking-wide group-hover:text-[#00f0ff] transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="border-t border-white/10 pt-4 flex flex-wrap gap-y-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {project.category === 'completed' && (
                        <>
                          <span className="w-1/2">Loc: {project.location}</span>
                          <span className="w-1/2 text-right">Area: {project.area}</span>
                          <span className="w-full mt-1 text-[#00f0ff]">Completed: {project.year}</span>
                        </>
                      )}
                      {project.category === 'ongoing' && (
                        <>
                          <span className="w-full">Stage: {project.stage}</span>
                          <span className="w-full mt-1 text-[#ff003c]">Exp. Completion: {project.completion}</span>
                        </>
                      )}
                      {project.category === 'upcoming' && (
                        <>
                          <span className="w-full">Stage: {project.stage}</span>
                          <span className="w-full mt-1 text-[#7000ff]">Concept Phase</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
