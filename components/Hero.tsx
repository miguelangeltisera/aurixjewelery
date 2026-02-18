
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#FCFBFA]">
      <div className="absolute inset-0 z-0 flex justify-end">
        {/* Imagen representativa de la modelo con esmeralda */}
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200" 
          alt="AURIX High Jewelry" 
          className="h-full w-full lg:w-2/3 object-cover object-center opacity-95"
        />
        {/* Degradado para fundir la imagen con el fondo claro en escritorio */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#FCFBFA] via-[#FCFBFA]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-xl">
          <span className="inline-block text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-[10px] mb-6 bg-[#D4AF37]/10 px-3 py-1 rounded">
            Heritage Collection
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] text-[#0F172A] serif">
            Belleza <br/>
            <span className="italic text-[#D4AF37]">Inmortal</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-8 leading-relaxed serif">
            Zarcillos de Esmeralda: Una inversión en elegancia y patrimonio.
          </p>
          <div className="flex space-x-4">
            <div className="w-12 h-[1px] bg-[#D4AF37] self-center"></div>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">Caracas, Venezuela</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
