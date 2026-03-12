import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

interface ProjectHotspot {
  city: string;
  projects: number;
  x: number; // Percentage from left
  y: number; // Percentage from top
}

export default function ProjectMap() {
  const hotspots: ProjectHotspot[] = [
    { city: "Mumbai", projects: 42, x: 18, y: 62 },
    { city: "Delhi NCR", projects: 35, x: 32, y: 25 },
    { city: "Bangalore", projects: 28, x: 35, y: 82 },
    { city: "Hyderabad", projects: 22, x: 38, y: 68 },
    { city: "Pune", projects: 18, x: 22, y: 65 },
    { city: "Chennai", projects: 15, x: 45, y: 85 },
    { city: "Kolkata", projects: 12, x: 78, y: 52 },
    { city: "Ahmedabad", projects: 10, x: 15, y: 48 }
  ];

  return (
    <div className="relative w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-1">
          <span className="text-[#7000ff] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Our Reach</span>
          <h2 className="text-3xl md:text-5xl font-black font-heading uppercase tracking-tighter leading-none mb-6">
            National <br /> <span className="text-gradient-magenta">Footprint</span>
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
            From urban skyscrapers in Mumbai to sustainable retreats in the Himalayas, our architectural influence spans across the subcontinent.
          </p>
          
          <div className="space-y-4">
            {hotspots.slice(0, 4).map((spot, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#7000ff]/30 transition-colors group">
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-[#7000ff]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">{spot.city}</span>
                </div>
                <span className="text-[10px] font-black px-2 py-1 bg-[#7000ff]/10 text-[#7000ff] rounded-md">
                  {spot.projects} PROJECTS
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Map Area */}
        <div className="lg:col-span-2 relative aspect-[4/5] md:aspect-[1/1] max-h-[600px] mx-auto w-full">
          {/* Stylized India SVG Map (Simplified) */}
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full text-white/5 fill-current stroke-white/10 stroke-[0.2]"
          >
            {/* This is a very simplified geometric representation of India's shape */}
            <path d="M30,10 L45,15 L55,10 L65,20 L75,35 L85,50 L80,65 L65,85 L50,95 L35,85 L20,70 L10,55 L15,35 L20,20 Z" />
            
            {/* Grid Lines */}
            {[...Array(10)].map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} className="stroke-white/5 stroke-[0.1]" />
            ))}
            {[...Array(10)].map((_, i) => (
              <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" className="stroke-white/5 stroke-[0.1]" />
            ))}
          </svg>

          {/* Hotspots */}
          {hotspots.map((spot, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="absolute"
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            >
              <div className="relative group">
                {/* Pulse Effect */}
                <div className="absolute -inset-4 bg-[#7000ff] rounded-full opacity-20 animate-ping"></div>
                
                {/* Marker Dot */}
                <div className="relative w-3 h-3 bg-[#7000ff] rounded-full border-2 border-white shadow-[0_0_10px_rgba(112,0,255,0.8)] cursor-pointer"></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg whitespace-nowrap shadow-2xl">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">{spot.city}</p>
                    <p className="text-[8px] text-[#7000ff] font-bold uppercase">{spot.projects} Projects</p>
                  </div>
                  <div className="w-2 h-2 bg-black/80 border-r border-b border-white/10 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
