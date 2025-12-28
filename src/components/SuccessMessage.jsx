import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SuccessMessage = () => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="flex justify-center mb-6">
        <div className="bg-green-500/20 p-4 rounded-full">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">Candidature Reçue !</h3>
      <p className="text-slate-300 text-lg">
        Merci de votre participation. <br />
        <span className="font-semibold text-purple-400">La Marge Découverte</span> va vous recontacter via votre numéro.
      </p>
      <p className="mt-6 text-sm text-slate-500">
        Gardez votre téléphone allumé et préparez-vous à briller.
      </p>
    </div>
  );
};

export default SuccessMessage;
