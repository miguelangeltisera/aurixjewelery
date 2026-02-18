
import React from 'react';
import { MessageCircle, Award, CheckCircle2 } from 'lucide-react';

const ProductSection: React.FC = () => {
  const whatsappNumber = "04169110641";
  const message = encodeURIComponent("Hola AURIX, deseo agendar una cita para ver los Zarcillos de Esmeralda 35 mm Oro 18k.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="producto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen de Producto - Representando los zarcillos sobre tela blanca */}
          <div className="relative">
            <div className="aspect-square bg-[#F3F4F6] rounded-3xl overflow-hidden shadow-inner border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000" 
                alt="Zarcillos de Esmeralda sobre tela" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
              <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
            </div>
            {/* Tag de precio flotante */}
            <div className="absolute -bottom-6 -right-6 bg-[#0F172A] text-white p-8 rounded-2xl shadow-2xl transform rotate-3">
              <span className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1 font-bold">Inversión Final</span>
              <span className="text-4xl font-bold serif">$25</span>
            </div>
          </div>

          {/* Detalles del Producto */}
          <div className="flex flex-col pt-12 lg:pt-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 serif leading-tight">
              Zarcillos de Esmeralda 35 mm
            </h2>
            <div className="flex items-center space-x-3 mb-8">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xl font-medium text-[#D4AF37] italic serif">Oro 18k con cierre de presión</span>
            </div>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg text-slate-500 leading-relaxed italic">
                "Exquisitez en cada detalle. Cuatro esmeraldas seleccionadas a mano, engastadas en oro sólido para perdurar por generaciones."
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Oro de 18 Quilates",
                  "Cierre de Seguridad",
                  "Esmeraldas Naturales",
                  "Certificado de Autenticidad"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-6 px-8 rounded-2xl flex items-center justify-center space-x-4 transition-all shadow-xl shadow-green-100"
              >
                <MessageCircle className="w-7 h-7" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-tighter opacity-80 font-black">Disponible en Caracas</span>
                  <span className="text-xl">Agendar Cita CCCT</span>
                </div>
                <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </a>
              
              <div className="flex justify-between items-center px-4">
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Atención Directa: <span className="text-slate-900 ml-1">0416-9110641</span>
                </p>
                <div className="h-[1px] flex-grow mx-4 bg-slate-100"></div>
                <span className="text-[10px] font-bold text-emerald-600">EN STOCK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
