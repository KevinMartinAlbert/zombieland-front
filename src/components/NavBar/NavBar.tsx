/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import useWindowDimensions from './utils/dimensions';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useContext(UserContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (isNavOpen && width > 768) {
      setIsNavOpen(false);
    }
  }, [width, isNavOpen]);

  return (
    <header>
      <nav className="px-10 bg-black fixed w-full z-20 top-0 start-0 border-b border-red-700">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="badgrunge self-center text-7xl font-semibold whitespace-nowrap dark:text-white">
              ZOMBIELAND
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <>
                {width > 768 && (
                  <p className="text-white text-xl">
                    Bonjour {user.first_name} !
                  </p>
                )}
                <Link
                  to={`/mon-compte/${user.user_id}`}
                  aria-label="account"
                  className="text-white text-2xl hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="hover:fill-green-300 size-10 fill-greenZombie"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </>
            ) : (
              <Link to="/se-connecter" aria-label="login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hover:fill-red-700 size-10 fill-redZombie"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}

            <Link
              to="/reserver"
              type="button"
              className="text-white text-2xl bg-redZombie hover:bg-red-700 hover:outline-none hover:text-white focus:outline-none focus:ring-black font-bold rounded-xl px-3 py-1 text-center"
            >
              Réservation
            </Link>
            <button
              onClick={() => setIsNavOpen((prev) => !prev)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex bg-black items-center p-2 w-10 h-10 justify-center text-sm text-redZombie rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              isNavOpen
                ? 'absolute right-0 top-20 bg-black w-1/2'
                : 'items-center justify-between w-full md:flex md:w-auto md:order-1 hidden'
            }
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
              <li>
                <Link
                  to="/attractions"
                  className="block py-2 px-3 text-white text-2xl hover:text-red-500 rounded md:bg-transparent md:p-0"
                >
                  Les attractions
                </Link>
              </li>
              <li>
                <Link
                  to="/infos-pratiques"
                  className="block py-2 px-3 text-white text-2xl hover:text-red-500 rounded md:bg-transparent md:p-0"
                >
                  Infos Pratiques
                </Link>
              </li>
              <li>
                <Link
                  to="/plan-du-parc"
                  className="block py-2 px-3 text-white text-2xl hover:text-red-500 rounded md:bg-transparent md:p-0"
                >
                  Plan du Parc
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-white text-2xl hover:text-red-500 rounded md:bg-transparent md:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
