import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home as HomeIcon, PenTool, Ruler, Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useProjects } from '../hooks/useProjects';

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-6 uppercase"
          >
            <span className="text-white">PRABHAKAR</span><br />
            <span className="text-gradient-cyan">ASSOCIATES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-3xl mx-auto tracking-wide"
          >
            Architectural Design &bull; Building Planning &bull; Construction &bull; Interior Design
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto"
          >
            <Link to="/projects" className="relative group overflow-hidden bg-white text-black px-8 py-4 uppercase tracking-widest font-bold transition-all">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">View Projects</span>
            </Link>
            <Link to="/contact" className="glass-panel text-white px-8 py-4 uppercase tracking-widest font-bold hover:bg-white/10 transition-all border border-white/20 hover:border-[#ff003c]">
              Get Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7000ff] rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4 uppercase tracking-tighter">
              Our <span className="text-gradient-magenta">Expertise</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-2xl group transition-all duration-300"
              >
                <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-white uppercase tracking-wide">{service.title}</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[#00f0ff] group-hover:text-white transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter">
                Featured <span className="text-gradient-cyan">Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-[#00f0ff] transition-colors">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#00f0ff] text-xs font-black uppercase tracking-widest mb-2">{project.category}</span>
                    <h3 className="text-white text-2xl font-heading font-bold uppercase tracking-wide">{project.title}</h3>
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

      {/* Work Process */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4 uppercase tracking-tighter">
              Our <span className="text-gradient-purple">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#7000ff] to-[#ff003c] z-0 opacity-50"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 text-center px-4 group">
                <div className="w-24 h-24 mx-auto bg-[#111] border-2 border-[#333] group-hover:border-[#00f0ff] rounded-full flex items-center justify-center mb-8 text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 group-hover:from-[#00f0ff] group-hover:to-[#7000ff] transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wide text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#111] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffea00] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black font-heading mb-4 uppercase tracking-tighter">
              Client <span className="text-gradient-yellow">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
              What our clients say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl relative"
              >
                <Quote size={48} className="absolute top-4 right-4 text-white/5" />
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#ffea00] fill-[#ffea00] mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-white font-bold font-heading uppercase tracking-widest">{testimonial.name}</h4>
                  <p className="text-[#00f0ff] text-sm uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 relative">
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
              <h2 className="text-4xl md:text-5xl font-black font-heading mb-8 uppercase tracking-tighter">
                Designing the <span className="text-gradient-cyan">Future</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                At Prabhakar Associates, we believe that architecture is more than just creating buildings; it's about shaping environments that inspire, function seamlessly, and stand the test of time.
              </p>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
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

