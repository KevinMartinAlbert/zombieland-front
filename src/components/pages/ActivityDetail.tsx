/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import getImageName from '../../utils/imageAttractionsFormat';

interface Category {
  category_id: number;
  name: string;
}

interface Activity {
  activity_id: number;
  name: string;
  description_short: string;
  description: string;
  minimal_age: number;
  capacity: number;
  x: number;
  y: number;
  categories: Category[];
}

function ActivityDetail() {
  const [attractionDetail, setAttractionDetail] = useState<Activity | null>(
    null
  );
  const [similarAttractions, setSimilarAttractions] = useState<Activity[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const loadData = async () => {
      try {
        // Récupère les détails de l'attraction actuelle
        const { data: attraction } = await axios.get(
          `${import.meta.env.VITE_API_URL}/activities/${id}`
        );
        setAttractionDetail(attraction);

        if (attraction.categories.length > 0) {
          // Récupère les attractions ayant la même catégorie
          const categoryId = attraction.categories[0].category_id;
          const { data: similarActivities } = await axios.get(
            `${import.meta.env.VITE_API_URL}/activities/category/${categoryId}`
          );
          // Exclu l'attraction actuelle des attractions similaires
          const filteredAttractions = similarActivities.filter(
            (activity: Activity) =>
              activity.activity_id !== attraction.activity_id
          );
          setSimilarAttractions(filteredAttractions);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    loadData();
  }, [id]);

  if (!attractionDetail) {
    return <div>Chargement...</div>;
  }

  const categoryName =
    attractionDetail.categories.length > 0
      ? attractionDetail.categories[0].name
      : 'Non spécifié';

  const desktopImage = `/src/assets/img/desktop/attractions/${getImageName(attractionDetail.name)}`;
  const mobileImage = `/src/assets/img/mobile/attractions/${getImageName(attractionDetail.name)}`;

  return (
    <main className="bg-black h-full w-full mt-[104px] flex flex-col items-center pt-10 max-w-screen-2xl mx-auto">
      <h1 className="self-center md:self-start text-6xl">
        {attractionDetail.name}{' '}
        <span className="text-redZombie ali">ATTRACTIONS</span>
      </h1>

      <button className="text-white text-2xl bg-red-700 font-bold rounded-xl px-3 py-1 md:self-start mt-4">
        {categoryName}
      </button>

      <section className="flex flex-wrap mt-4 justify-center">
        <picture className="md:w-1/2">
          <source media="(min-width:465px)" srcSet={desktopImage} />
          <img src={mobileImage} alt={attractionDetail.name} />
        </picture>

        <p className="md:w-1/2 self-center p-8 text-white text-2xl">
          {attractionDetail.description}
        </p>

        <Link
          to="/reserver"
          type="button"
          className="text-white text-2xl text-center font-bold rounded-xl w-5/6 py-1 self-center mt-4 bg-transparent border-2 border-white"
        >
          Acheter un billet
        </Link>
      </section>

      <section className="bg-black py-10 flex flex-col justify-center items-center gap-10 flex-wrap">
        <h2 className="text-white text-2xl mt-4">
          D’autres attractions qui pourraient vous plaire
        </h2>
        <div className="flex gap-10 flex-wrap justify-center">
          {similarAttractions.length > 0 ? (
            similarAttractions.map((currentActivity) => (
              <div
                key={currentActivity.activity_id}
                style={{
                  backgroundImage: `url(/src/assets/img/desktop/attractions/${getImageName(currentActivity.name)})`,
                }}
                className="w-[400px] md:w-[200px] lg:w-[400px] h-[400px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-xl relative flex justify-center items-center"
              >
                <h2 className="badgrunge text-6xl text-center text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]">
                  {currentActivity.name}
                </h2>
                <Link
                  to={`/attractions/${currentActivity.activity_id}`}
                  type="button"
                  className="text-white text-2xl bg-darkGreenZombie hover:bg-red-700 hover:outline-none hover:text-white focus:outline-none focus:ring-black font-bold rounded-xl px-3 py-1 text-center absolute bottom-1/4 [box-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]"
                >
                  En savoir plus
                </Link>
              </div>
            ))
          ) : (
            <p className="text-white text-xl">
              Aucune attraction similaire trouvée.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default ActivityDetail;
