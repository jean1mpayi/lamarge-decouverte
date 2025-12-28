import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { sendToTelegram } from '../utils/telegram';
import PolicyModal from './PolicyModal';

const ApplicationForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    nom: '',
    postNom: '',
    telephone: '',
    style: 'Rap',
    
    acceptedPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showPolicy, setShowPolicy] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptedPolicy) return;

    setIsSubmitting(true);
    setError(null);

    const result = await sendToTelegram(formData);

    if (result.success) {
      onSuccess();
    } else {
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-slate-900/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="nom" className="text-sm font-medium text-slate-300">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
            placeholder="Votre nom"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="postNom" className="text-sm font-medium text-slate-300">Post-nom</label>
          <input
            type="text"
            id="postNom"
            name="postNom"
            required
            value={formData.postNom}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
            placeholder="Votre post-nom"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="telephone" className="text-sm font-medium text-slate-300">Numéro de téléphone</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          required
          value={formData.telephone}
          onChange={handleChange}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
          placeholder="ex: 0812345678"
        />
      </div>

      <div className=" gap-6">
        <div className="space-y-2">
          <label htmlFor="style" className="text-sm font-medium text-slate-300">Style de musique</label>
          <select
            id="style"
            name="style"
            value={formData.style}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all appearance-none"
          >
            <option value="Rap">Rap</option>
            <option value="Chant">Chant</option>
            <option value="Les 2">Les 2</option>
          </select>
        </div>

        
      </div>

      <div className="pt-4 rounded-full border-slate-800">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="acceptedPolicy"
            name="acceptedPolicy"
            checked={formData.acceptedPolicy}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-slate-600 text-purple-600 focus:ring-purple-500 bg-slate-950"
          />
          <label htmlFor="acceptedPolicy" className="text-sm text-slate-400">
            J'ai lu et j'accepte <button type="button" onClick={() => setShowPolicy(true)} className="text-purple-400 hover:text-purple-300 underline underline-offset-2">les conditions et la politique de confidentialité</button> du groupe.
          </label>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!formData.acceptedPolicy || isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Envoyer ma candidature
          </>
        )}
      </button>

      <PolicyModal isOpen={showPolicy} onClose={() => setShowPolicy(false)} />
    </form>
  );
};

export default ApplicationForm;
