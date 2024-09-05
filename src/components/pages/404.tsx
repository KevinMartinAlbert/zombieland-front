/* eslint-disable react/react-in-jsx-scope */
import pageNotFoundImg from '../../assets/img/desktop/404page 1.webp';

function NotFoundPage() {
  return (
    <div className="mt-36 flex flex-col items-center justify-between">
      <img
        src={pageNotFoundImg}
        alt="page 404 not found"
        className="w-[400px]"
      />
    </div>
  );
}

export default NotFoundPage;
