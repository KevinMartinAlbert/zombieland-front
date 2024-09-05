/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import map from '../../assets/img/desktop/zombieland_map.webp';

interface Attraction {
  activity_id: number;
  name: string;
  description_short: string;
  x: number;
  y: number;
}

function ParcMap() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [hoveredAttraction, setHoveredAttraction] = useState<Attraction | null>(
    null
  );

  // Fetch attractions data from the endpoint
  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/activities`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch attractions data');
        }
        const data: Attraction[] = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      }
    };

    fetchAttractions();
  }, []);

  const handleAttractionMouseEnter = (attraction: Attraction) => {
    setHoveredAttraction(attraction);
  };

  const handleAttractionMouseLeave = () => {
    setHoveredAttraction(null);
  };

  return (
    <div className="relative mt-[104px] max-w-[1200px] mx-auto flex gap-4 flex-wrap justify-center mb-12">
      <h2 className="ml-4 w-full uppercase text-6xl text-white mb-8">
        Plan<span className="text-redZombie"> du parc</span>
      </h2>
      <div className="relative">
        {/* Image de la carte */}
        <img
          className="w-[500px] h-[500px]"
          src={map}
          alt="Plan des attractions de ZombieLand"
        />

        {/* Points interactifs */}
        {attractions.map((attraction) => (
          <div
            key={attraction.activity_id}
            className={`absolute divide-y divide-red-800 pt-0 text-center text-lg font-medium p-2 transition-all duration-300 ease-in-out rounded ${
              hoveredAttraction &&
              hoveredAttraction.activity_id === attraction.activity_id
                ? 'bg-redZombie w-[200px]' // Taille étendue et couleur lorsqu'elle est survolée
                : 'bg-red-800 inline-block w-[110px] h-[25px]' // Taille par défaut et couleur pour les non-survolés
            }`}
            style={{
              left: `${attraction.x}%`,
              top: `${attraction.y}%`,
              transform: 'translate(-50%, 0)', // Centrer horizontalement mais ne pas déplacer verticalement
              minWidth: '50px', // Taille minimale pour les points interactifs par défaut
              minHeight: '27px', // Taille minimale pour les points interactifs par défaut
              display: 'flex',
              flexDirection: 'column', // Empile les enfants verticalement
              alignItems: 'center', // Centre horizontalement le contenu
              zIndex:
                hoveredAttraction &&
                hoveredAttraction.activity_id === attraction.activity_id
                  ? 10
                  : 1, // Set higher z-index on hover
            }}
            onMouseEnter={() => handleAttractionMouseEnter(attraction)}
            onMouseLeave={handleAttractionMouseLeave}
          >
            {/* Nom de l'attraction */}
            <div className="text-white whitespace-nowrap">
              {attraction.name}
            </div>

            {/* Contenu déroulant pour la description */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                hoveredAttraction &&
                hoveredAttraction.activity_id === attraction.activity_id
                  ? 'max-h-60 mt-2 opacity-100 delay-100' // Dérouler le contenu avec un délai
                  : 'max-h-0 opacity-0' // Cacher le contenu par défaut
              }`}
              style={{
                width: '100%', // Prend toute la largeur de la div principale
                textAlign: 'center', // Centre le texte de la description
                transition: 'max-height 0.1s ease, opacity 0.1s ease 0.1s', // Animer l'opacité après l'expansion
              }}
            >
              {/* Texte de description */}
              {hoveredAttraction &&
                hoveredAttraction.activity_id === attraction.activity_id && (
                  <div className="divide-y divide-red-800">
                    <p className="text-white font-light pt-2">
                      {attraction.description_short}
                    </p>
                    <Link
                      className="mt-4 p-1 rounded bg-white visited:text-redZombie text-redZombie hover:text-redZombie hover:bg-red-100"
                      to={`../attractions/${attraction.activity_id}`}
                    >
                      En savoir plus
                    </Link>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParcMap;
