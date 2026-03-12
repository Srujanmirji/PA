import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl cursor-ew-resize select-none border border-white/10"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      {/* Before Image (Foreground) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 * (100 / sliderPosition)}%` }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold rounded-full border border-white/10">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-[#00f0ff]/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold rounded-full border border-white/10">
        {afterLabel}
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 z-30 w-[2px] bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-black/20">
          <div className="flex gap-1">
            <div className="w-[2px] h-4 bg-black/20 rounded-full"></div>
            <div className="w-[2px] h-4 bg-black/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Hint Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 text-white text-xs font-bold uppercase tracking-[0.2em]">
          Drag to Compare
        </div>
      </motion.div>
    </div>
  );
}
