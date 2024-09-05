/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import getImageName from '../../utils/imageAttractionsFormat';

interface ActivityCardProps {
  activity: {
    activity_id: number;
    name: string;
  };
}

function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div
      className="w-[400px] h-[400px] bg-cover bg-center bg-no-repeat rounded-xl relative flex justify-center items-center"
      style={{
        backgroundImage: `url(/src/assets/img/desktop/attractions/${getImageName(activity.name)})`,
      }}
    >
      <h2 className="badgrunge text-6xl text-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]">
        {activity.name.toUpperCase()}
      </h2>
      <Link
        to={`/attractions/${activity.activity_id}`}
        type="button"
        className="text-white text-2xl bg-darkGreenZombie hover:bg-red-700 hover:outline-none hover:text-white focus:outline-none focus:ring-black font-bold rounded-xl px-3 py-1 text-center absolute bottom-1/4 [box-shadow:_1px_1px_0_rgb(0_0_0_/_40%)]"
        aria-label={`Learn more about ${activity.name}`}
      >
        En savoir plus
      </Link>
    </div>
  );
}

export default ActivityCard;
