import React from 'react';
import { Mic2, Music2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-center py-12 space-y-6">
      <div className="relative inline-block">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
        <div className="relative bg-slate-900 rounded-full p-4 border border-slate-800">
          <Mic2 className="w-10 h-10 text-purple-400" />
        </div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        Révélez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Talent</span>
      </h2>
      
      <p className="text-lg text-slate-300 leading-relaxed max-w-lg mx-auto">
        Le monde attend d'entendre votre voix. Que vous soyez rappeur ou chanteur, 
        <span className="font-semibold text-white"> La Marge Découverte</span> est votre scène. 
        Ne laissez pas votre art dans l'ombre, faites-le briller aujourd'hui.
      </p>

      <div className="flex justify-center gap-4 text-sm text-slate-400 pt-4">
        <div className="flex items-center gap-1">
          <Music2 className="w-4 h-4" />
          <span>Rap & Chant</span>
        </div>
        <div className="flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          <span>Kinshasa</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
