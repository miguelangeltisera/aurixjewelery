
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
           {/* Representación fiel del logo proporcionado */}
           <div className="relative w-12 h-12 bg-[#0F172A] rounded-lg flex items-center justify-center shadow-md">
              <div className="relative">
                <span className="text-[#D4AF37] font-bold text-2xl serif leading-none">A</span>
                {/* Pequeño diamante decorativo */}
                <div className="absolute -top-1 -right-2 w-3 h-3 bg-[#D4AF37] rotate-45 border border-[#0F172A] flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
           </div>
           <div className="flex flex-col">
             <span className="text-xl font-bold tracking-[0.2em] text-[#0F172A] uppercase leading-none">AURIX</span>
             <span className="text-[8px] tracking-[0.4em] text-[#D4AF37] font-bold uppercase">Joyas Eternas</span>
           </div>
        </div>
        <div className="hidden sm:block">
          <a href="#contacto" className="text-[10px] uppercase tracking-widest font-bold text-slate-500 border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">
            Cita Exclusiva
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
