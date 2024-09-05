/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import zombieFace from '../../assets/img/desktop/zombie-apocalypse-zombieland.webp';
import tickets from '../../assets/img/desktop/achat-tickets-parc-zombieland.webp';
import compass from '../../assets/img/desktop/horaires-tickets-parc-zombieland.webp';
import skull from '../../assets/img/desktop/plan-parc-zombieland-_1_.webp';
import plan from '../../assets/img/desktop/plan-parc-zombieland.webp';
import ActivityCard from '../ActivityCard/ActivityCard';

interface Activity {
  activity_id: number;
  name: string;
}

// Slider configuration
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/activities`
        );
        setActivities(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des activités:', error);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  return (
    <>
      <section className=" mt-[104px] h-[850px] w-full bg-[url('/src/assets/img/desktop/bg-parc-zombieland-home.webp')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black bg-opacity-10 h-full w-full max-[600px]:px-8 px-16 flex items-center">
          <div className="px-14 py-5 bg-black bg-opacity-40 max-w-[550px] min-h-[400px] flex flex-col justify-around [box-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]">
            <h1 className="text-6xl text-white [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)] uppercase">
              Bienvenue à Zombieland
            </h1>
            <p className="text-3xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]">
              Vous pensez pouvoir échapper à l'apocalypse ? Venez mettre vos
              nerfs à l'épreuve et découvrez si vous avez ce qu'il faut pour
              survivre. L'expérience vous attend, mais serez-vous prêt à
              l'affronter ?
            </p>
            <div>
              <Link
                to="/reserver"
                type="button"
                className="text-white text-2xl bg-redZombie hover:bg-opacity-90 hover:text-white  focus:animate-ping font-bold rounded-xl px-3 py-1 text-center mr-8 [box-shadow:_1px_1px_0_rgb(0_0_0_/_40%)] overflow-hidden"
                aria-label="Make a reservation"
              >
                Réservation
              </Link>
              <Link
                to="/infos-pratiques"
                type="button"
                className="text-white text-2xl bg-darkGreenZombie hover:bg-opacity-90 hover:text-white  focus:animate-ping font-bold rounded-xl px-3 py-1 text-center [box-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]"
                aria-label="Learn more about practical information"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black min-h-[550px] py-10 flex justify-around items-center">
        {loading ? (
          <p>Chargement...</p>
        ) : (
          <Slider className="custom-slick-slider" {...sliderSettings}>
            {activities.map((activity) => (
              <ActivityCard key={activity.activity_id} activity={activity} />
            ))}
          </Slider>
        )}
      </section>
      <section className="bg-black p-10 flex flex-wrap justify-center items-center gap-20">
        <div>
          <img className="max-h-[350px]" src={zombieFace} alt="heads zombie" />
        </div>
        <div>
          <h2 className="text-7xl mb-5">
            Plongez dans l'<span className="text-redZombie">Apocalypse</span>
          </h2>
          <p className="max-w-[500px] text-2xl">
            Bienvenue chez ZombieLand, le premier parc de zombies immersif où
            l'horreur devient réalité ! Plongez dans un univers
            post-apocalyptique où les morts-vivants rôdent à chaque coin de rue,
            prêts à vous traquer. Ce n'est pas un simple jeu, c'est une
            expérience sensorielle unique qui vous place au cœur de l'action.
            Équipé pour survivre, vous devrez utiliser votre ingéniosité, votre
            courage et votre esprit d'équipe pour échapper aux hordes de zombies
            affamés qui peuplent nos zones infestées. Chaque décision compte,
            chaque minute passée dans le parc vous rapproche de l'adrénaline
            pure.
          </p>
        </div>
      </section>
      <section className="bg-redZombie min-h-[550px] text-center px-10 py-5">
        <h2 className="text-7xl mb-5">
          Infos <span className="text-black">Pratiques</span>
        </h2>
        <div className="flex flex-wrap justify-around items-center py-6">
          <Link to="/reserver">
            <div className="bg-black flex flex-col justify-center items-center gap-5 py-10 px-5 rounded-xl">
              <img className="w-[250px]" src={tickets} alt="tickets" />
              <h3 className="text-white text-6xl badgrunge">BILLETTERIE</h3>
            </div>
          </Link>
          <Link to="/infos-pratiques">
            <div className="bg-black flex flex-col justify-center items-center gap-5 py-10 px-5 rounded-xl">
              <img className="w-[250px]" src={compass} alt="compass" />
              <h3 className="text-white text-6xl badgrunge">HORAIRES</h3>
            </div>
          </Link>
          <Link to="/attractions">
            <div className="bg-black flex flex-col justify-center items-center gap-5 py-10 px-5 rounded-xl">
              <img className="w-[250px]" src={skull} alt="skull" />
              <h3 className="text-white text-6xl badgrunge">ATTRACTIONS</h3>
            </div>
          </Link>
          <Link to="/plan-du-parc">
            <div className="bg-black flex flex-col justify-center items-center gap-5 py-10 px-5 rounded-xl">
              <img className="w-[250px]" src={plan} alt="plan" />
              <h3 className="text-white text-6xl badgrunge">PLAN DU PARC</h3>
            </div>
          </Link>
        </div>
        <style>
          {
            '.custom-slick-slider { width: 95%; } .slick-slide > div {display: grid; place-items: center; .slick-prev { left: 40px} .slick-next {right: 20px} }'
          }
        </style>
      </section>
    </>
  );
}

export default Home;
