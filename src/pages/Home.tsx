import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home as HomeIcon, PenTool, Ruler, Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useProjects } from '../hooks/useProjects';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import StatsCounter from '../components/StatsCounter';
import ProjectMap from '../components/ProjectMap';

export default function Home() {
  const { projects } = useProjects();
  const featuredProjects = projects.filter(p => p.category === 'completed').slice(0, 3);

  const services = [
    {
      title: 'Architectural Design',
      description: 'Innovative and functional design solutions for residential and commercial spaces.',
      icon: <PenTool size={32} className="text-[#00f0ff]" />,
      link: '/services#architectural-design'
    },
    {
      title: 'Building Planning',
      description: 'Comprehensive layout planning and guidance for necessary approvals.',
      icon: <Ruler size={32} className="text-[#ff003c]" />,
      link: '/services#building-planning'
    },
    {
      title: 'Construction',
      description: 'End-to-end construction services with rigorous project supervision.',
      icon: <Building2 size={32} className="text-[#7000ff]" />,
      link: '/services#construction'
    },
    {
      title: 'Interior Design',
      description: 'Creating inspiring and functional interiors for homes and offices.',
      icon: <HomeIcon size={32} className="text-[#ffea00]" />,
      link: '/services#interior-design'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'Understanding your vision, requirements, and budget.' },
    { step: '02', title: 'Planning & Design', description: 'Developing concepts, layouts, and architectural plans.' },
    { step: '03', title: '3D Visualization', description: 'Creating realistic renders to visualize the final outcome.' },
    { step: '04', title: 'Construction', description: 'Executing the project with precision and quality control.' }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner",
      text: "Prabhakar Associates transformed our vision into a stunning reality. Their attention to detail and innovative approach to space planning resulted in a home that exceeds all our expectations.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CEO, Nexus Tech",
      text: "Working with this team on our new corporate headquarters was a seamless experience. They perfectly balanced our need for a modern aesthetic with practical, sustainable design solutions.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Property Developer",
      text: "Their expertise in both architectural design and construction management makes them an invaluable partner. They consistently deliver high-quality projects on time and within budget.",
      rating: 5
    }
  ];

  return (
    <div className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 pointer-events-none">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: 45 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-6xl md:text-8xl font-black font-heading tracking-tighter mb-4 sm:mb-6 uppercase leading-[0.9] perspective-1000"
            >
              <span className="text-white block">PRABHAKAR</span>
              <span className="text-gradient-cyan block">ASSOCIATES</span>
            </motion.h1>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 font-light max-w-3xl mx-auto tracking-wide px-4"
            >
              Architectural Design &bull; Building Planning &bull; Construction &bull; Interior Design
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto"
            >
              <Link to="/projects" className="relative group overflow-hidden bg-white text-black px-6 py-3 sm:px-8 sm:py-4 uppercase tracking-widest font-bold transition-all rounded-sm text-sm sm:text-base">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">View Projects</span>
              </Link>
              <Link to="/contact" className="glass-panel text-white px-6 py-3 sm:px-8 sm:py-4 uppercase tracking-widest font-bold hover:bg-white/10 transition-all border border-white/20 hover:border-[#ff003c] rounded-sm text-sm sm:text-base">
                Get Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#ff003c] text-xs font-black uppercase tracking-[0.4em] mb-4 block"
              >
                Our Capabilities
              </motion.span>
              <h2 className="text-3xl md:text-6xl font-black font-heading uppercase tracking-tighter leading-none">
                Crafting <span className="text-gradient-magenta">Excellence</span> In Every Detail
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm font-light leading-relaxed mb-2">
              We provide comprehensive architectural solutions that blend artistic vision with technical precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-panel glass-panel-hover p-8 rounded-2xl group transition-all duration-500 relative overflow-hidden ${
                  index === 0 || index === 3 ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></div>
                
                <div className="mb-8 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-[#00f0ff]/50 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black font-heading mb-4 text-white uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-md">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-[#00f0ff] group-hover:text-white transition-colors">
                  Explore Service <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-32 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tighter">
                Featured <span className="text-gradient-cyan">Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-[#00f0ff] transition-colors">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4'
                }`}
              >
                <Link to={`/projects/${project.id}`}>
                  <div className={`${index === 0 ? 'aspect-[16/10]' : 'aspect-square'} overflow-hidden relative`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    
                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="px-3 py-1 bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-sm">
                          {project.type}
                        </span>
                        <h3 className="text-white text-2xl md:text-3xl font-heading font-black uppercase tracking-tight mb-2 group-hover:text-[#00f0ff] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                          View Details <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {featuredProjects.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-500 text-lg">No featured projects available yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 sm:py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#00f0ff] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Transformation</span>
              <h2 className="text-3xl md:text-6xl font-black font-heading uppercase tracking-tighter leading-none mb-6 sm:mb-8">
                From Vision <br /> To <span className="text-gradient-cyan">Reality</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                Witness the evolution of spaces. We specialize in taking raw concepts and aging structures and breathing new life into them through innovative architectural interventions.
              </p>
              
              <div className="space-y-6">
                {[
                  "Sustainable Material Selection",
                  "Structural Integrity Optimization",
                  "Modern Aesthetic Integration",
                  "Functional Space Reimagining"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00f0ff]/10 flex items-center justify-center border border-[#00f0ff]/20">
                      <div className="w-2 h-2 rounded-full bg-[#00f0ff]"></div>
                    </div>
                    <span className="text-gray-300 font-medium uppercase tracking-widest text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] opacity-20 blur-2xl rounded-3xl"></div>
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                afterImage="https://images.unsplash.com/photo-1600607687940-47a04b629571?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                beforeLabel="Initial Site"
                afterLabel="Final Design"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StatsCounter />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ProjectMap />
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-6xl font-black font-heading mb-6 uppercase tracking-tighter leading-none">
                Our <span className="text-gradient-purple">Blueprint</span> For Success
              </h2>
              <p className="text-gray-400 text-lg font-light tracking-wide">
                A systematic approach to turning your vision into a structural masterpiece.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative z-10 p-8 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#7000ff]/50 transition-all duration-500"
              >
                <div className="text-5xl font-heading font-black text-white/5 group-hover:text-[#7000ff]/20 transition-colors duration-500 mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-black mb-4 uppercase tracking-wide text-white group-hover:text-[#7000ff] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
                <div className="mt-8 w-full h-[1px] bg-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#7000ff] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffea00] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-6xl font-black font-heading mb-6 uppercase tracking-tighter leading-none">
                Voices of <span className="text-gradient-yellow">Satisfaction</span>
              </h2>
              <p className="text-gray-400 text-lg font-light tracking-wide">
                We take pride in the relationships we build and the spaces we create.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#ffea00] hover:border-[#ffea00] transition-all cursor-pointer">
                <ArrowRight size={20} className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#ffea00] hover:border-[#ffea00] transition-all cursor-pointer">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -top-6 -left-6 text-8xl font-serif text-white/5 group-hover:text-[#ffea00]/10 transition-colors duration-500">“</div>
                <div className="flex mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-[#ffea00] fill-[#ffea00] mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 text-xl font-light leading-relaxed mb-10 relative z-10 italic">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#ffea00]"></div>
                  <div>
                    <h4 className="text-white font-black font-heading uppercase tracking-widest text-sm">{testimonial.name}</h4>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-12 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff003c] to-[#7000ff] opacity-30 blur-2xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Office Interior" 
                className="w-full h-auto rounded-2xl relative z-10 border border-white/10"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-heading mb-6 sm:mb-8 uppercase tracking-tighter leading-none">
                Designing the <span className="text-gradient-cyan">Future</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-base sm:text-lg">
                At Prabhakar Associates, we believe that architecture is more than just creating buildings; it's about shaping environments that inspire, function seamlessly, and stand the test of time.
              </p>
              <p className="text-gray-400 mb-10 leading-relaxed text-base sm:text-lg">
                With a focus on modern, functional design, our team of passionate architects and planners work closely with clients to turn visions into reality, ensuring every detail is meticulously crafted.
              </p>
              <Link to="/about" className="inline-block glass-panel px-8 py-4 uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all border border-white/20">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

