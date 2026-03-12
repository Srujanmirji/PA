import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Global Visual Elements */}
      <div className="noise-overlay"></div>
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#7000ff] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-float-delayed"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#ff003c] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05] animate-float-slow"></div>
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
