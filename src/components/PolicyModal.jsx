import React from 'react';
import { X } from 'lucide-react';

const PolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[80vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white">Règlement et Politique</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-slate-300 space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-purple-400 uppercase">RÈGLE ET POLITIQUE DE PARTICIPATION AU CONCOURS DE MUSIQUE – LA MARGE DECOUVERTE</h3>
            <p className="text-sm text-slate-500 mt-2">Il a été convenu ce qui suit :</p>
          </div>

          <section>
            <h4 className="font-bold text-white mb-2">Article 1 : Objet du règlement</h4>
            <p>Le présent règlement a pour objet de définir les conditions de participation au concours de musique destiné aux jeunes talents, organisé par La Marge.</p>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 2 : Conditions d’éligibilité</h4>
            <p>Pour participer au concours, le Participant doit :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Être un artiste dans le domaine musical ;</li>
              <li>Fournir un contenu original, non plagié ;</li>
              <li>Accepter toutes les conditions du présent contrat.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 3 : Obligations du Participant</h4>
            <p>Le Participant s’engage à :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Fournir des informations exactes lors de l’inscription.</li>
              <li>Payer les frais de participation de 25 $.</li>
              <li>Soumettre une performance musicale conforme aux règles.</li>
              <li>Respecter les délais et directives de l’Organisateur.</li>
              <li>Utiliser uniquement le beat fourni par La Marge, protégé et interdit d’usage hors concours.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 4 : Obligations de l’Organisateur</h4>
            <p>L’Organisateur s’engage à :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Assurer une évaluation équitable de toutes les performances.</li>
              <li>Garantir le bon déroulement du concours.</li>
              <li>Protéger les données personnelles des Participants.</li>
              <li>Fournir le beat officiel.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 5 : Droits d’utilisation du contenu</h4>
            <p>Le Participant autorise La Marge à utiliser, diffuser, publier et exploiter photos, vidéos, performances ou contenus envoyés, sans compensation supplémentaire, dans le cadre de la promotion du concours ou des activités de La Marge.</p>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 6 : Récompenses</h4>
            <p>Les trois (2) gagnants recevront :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Un feat + clip avec un artiste reconnu, choisi par La Marge ;</li>
              <li>Une surprise spéciale, dévoilée le jour de la proclamation.</li>
            </ul>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 7 : Sanctions et causes d’exclusion</h4>
            <p>Le Participant peut être exclu immédiatement en cas de :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Fraude ou tentative de fraude ;</li>
              <li>Plagiat ou usage illégal du beat ;</li>
              <li>Non-respect des règles du concours ;</li>
              <li>Contenu inapproprié, offensant ou illégal ;</li>
              <li>Implication dans une bagarre, menace, violence physique ou verbale ;</li>
              <li>Tout acte susceptible de troubler le bon déroulement du concours, de créer du désordre ou de mettre en danger les autres participants, le public ou l’équipe de La Marge.</li>
            </ul>
            <p className="mt-2 text-red-400 text-sm">Selon la gravité des faits, l’Organisateur se réserve le droit d’engager des poursuites judiciaires.</p>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 8 : Acceptation des conditions</h4>
            <p>La participation au concours implique l’acceptation totale et irrévocable du présent contrat.</p>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 9 : Litiges</h4>
            <p>En cas de litige, une tentative de résolution amiable sera privilégiée.</p>
            <p>À défaut, l’affaire sera portée devant les juridictions compétentes.</p>
          </section>

          <section>
            <h4 className="font-bold text-white mb-2">Article 10 : Coatching</h4>
            <p>Ce concours n'est pas un espace de coatching.</p>
            <p>Mais un endroit pour faire briller votre art. L'organisateur n'accorde aucune forme d'encadrement musical aux participants.</p>
          </section>
        

        </div>

        

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
