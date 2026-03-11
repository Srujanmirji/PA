import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Maximize, Calendar, CheckCircle, PenTool } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';

export default function ProjectDetails() {
  const { id } = useParams();
  const { projects } = useProjects();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="bg-[#050505] text-white pt-32 min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-[#00f0ff] hover:underline">Return to Projects</Link>
      </div>
    );
  }

  // Fallback images if the project only has one image
  const images = [
    project.image,
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="bg-[#050505] text-white pt-24 min-h-screen">
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-7xl font-black font-heading text-white uppercase tracking-tighter mb-4"
            >
              {project.title}
            </motion.h1>
            <p className="text-[#00f0ff] text-lg md:text-xl font-bold tracking-widest uppercase">
              {project.category} Project
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7000ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/projects" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#00f0ff] transition-colors mb-12">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Description */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-black font-heading mb-8 uppercase tracking-tighter">Project <span className="text-gradient-cyan">Overview</span></h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                {project.description}
              </p>
              <p className="text-gray-400 mb-12 leading-relaxed text-lg">
                This project represents our commitment to innovative design and functional architecture. Every detail was meticulously planned to ensure the final result not only meets but exceeds expectations.
              </p>

              {/* Image Gallery */}
              <h3 className="text-2xl font-black font-heading mb-8 uppercase tracking-tighter">Project <span className="text-gradient-magenta">Gallery</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.slice(1).map((img, index) => (
                  <div key={index} className="aspect-[4/3] overflow-hidden group cursor-pointer relative rounded-2xl glass-panel">
                    <img 
                      src={img} 
                      alt={`${project.title} detail ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-[#00f0ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Maximize size={32} className="text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="glass-panel p-8 rounded-2xl border border-white/10 sticky top-32">
                <h3 className="text-xl font-black font-heading mb-6 uppercase tracking-widest border-b border-white/10 pb-4 text-white">Specifications</h3>
                
                <ul className="space-y-6">
                  {project.location && (
                    <li className="flex items-start">
                      <MapPin size={24} className="text-[#00f0ff] mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Location</span>
                        <span className="text-white font-medium">{project.location}</span>
                      </div>
                    </li>
                  )}
                  {project.area && (
                    <li className="flex items-start">
                      <Maximize size={24} className="text-[#ff003c] mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Area Size</span>
                        <span className="text-white font-medium">{project.area}</span>
                      </div>
                    </li>
                  )}
                  {project.year && (
                    <li className="flex items-start">
                      <Calendar size={24} className="text-[#7000ff] mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Completion Year</span>
                        <span className="text-white font-medium">{project.year}</span>
                      </div>
                    </li>
                  )}
                  {project.stage && (
                    <li className="flex items-start">
                      <CheckCircle size={24} className="text-[#ffea00] mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Current Stage</span>
                        <span className="text-white font-medium">{project.stage}</span>
                      </div>
                    </li>
                  )}
                  {project.completion && (
                    <li className="flex items-start">
                      <Calendar size={24} className="text-[#00f0ff] mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Expected Completion</span>
                        <span className="text-white font-medium">{project.completion}</span>
                      </div>
                    </li>
                  )}
                  <li className="flex items-start">
                    <PenTool size={24} className="text-[#ff003c] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Lead Architect</span>
                      <span className="text-white font-medium">Ar. Rahul Prabhakar</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <a href="/contact" className="block w-full text-center bg-white text-black px-6 py-4 uppercase tracking-widest font-bold hover:bg-[#00f0ff] transition-colors">
                    Discuss Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
