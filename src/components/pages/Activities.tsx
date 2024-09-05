/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import getImageName from '../../utils/imageAttractionsFormat';

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

interface Category {
  category_id: number;
  name: string;
}

function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/activities`
        );
        setActivities(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des activités:', error);
      }
    };

    const loadCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/category`
        );
        setCategories(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des catégories:', error);
      }
    };

    loadActivities();
    loadCategories();
  }, []);

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory =
      selectedCategory === null ||
      activity.categories.some(
        (category) => category.category_id === selectedCategory
      );

    const matchesSearchTerm = activity.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearchTerm;
  });

  return (
    <main className="bg-black h-full w-full mt-[104px] flex flex-col items-center pt-10 max-w-screen-2xl mx-auto">
      <h1 className="self-center md:self-start text-6xl">
        LES <span className="text-redZombie">ATTRACTIONS</span>
      </h1>
      <form className="inline-flex justify-center items-center py-14 gap-10 w-full max-sm:block relative">
        <label
          htmlFor="activity"
          className="cursor-pointer input input-bordered flex items-center gap-2 relative xl:w-[600px] lg:w-[500px] md:w-[400px] sm:w-[300px]"
        >
          <input
            type="text"
            name="activity"
            id="activity"
            className="grow bg-white text-black p-3 pr-14 max-sm:mb-5 text-2xl rounded-xl"
            placeholder="Votre recherche..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#000000"
            className="size-10 absolute right-3"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          className="rounded-xl text-white text-3xl pl-5 pr-10 h-14 bg-redZombie focus:outline-none cursor-pointer"
          onChange={(e) => {
            const categoryId =
              e.currentTarget.value === ''
                ? null
                : Number(e.currentTarget.value);
            setSelectedCategory(categoryId);
          }}
          value={selectedCategory ?? ''}
        >
          <option value="">Catégories</option>
          {categories.map((currentCategory) => (
            <option
              key={currentCategory.category_id}
              value={currentCategory.category_id}
            >
              {currentCategory.name}
            </option>
          ))}
        </select>
      </form>
      <section className="bg-black py-10 flex justify-center items-center gap-10 flex-wrap">
        {filteredActivities.map((currentActivity) => (
          <div
            key={currentActivity.activity_id}
            style={{
              backgroundImage: `url(/src/assets/img/desktop/attractions/${getImageName(currentActivity.name)})`,
            }}
            className="w-[400px] md:w-[200px] lg:w-[400px] h-[400px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-xl relative flex justify-center items-center"
          >
            <h2 className="badgrunge text-white text-6xl text-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]">
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
        ))}
      </section>
    </main>
  );
}

export default Activities;
