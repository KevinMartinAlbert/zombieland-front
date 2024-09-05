/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
function Footer() {
  useEffect(() => {
    const links = document.querySelectorAll('a');

    // Ajouter l'événement onClick à chaque lien pour défiler vers le haut
    links.forEach((link) => {
      link.addEventListener('click', () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    });
  }, []);
  return (
    <footer className="w-screen bg-black text-white">
      <div className="flex flex-wrap gap-2 justify-around p-4 pb-0">
        <div className="w-[150px] ">
          <h2 className="badgrunge text-3xl">ZombieLand</h2>
          <p className="">
            A seulement quelques minutes de Paris, ZombieLand est un parc de
            zombies immersif où l&apos;horreur devient réalité !
          </p>
        </div>
        <div className="w-[150px] ">
          <h3 className="text-xl uppercase">
            Liens <span className="text-redZombie">utiles</span>
          </h3>
          <ul>
            <li>
              <Link
                className="text-white hover:text-red-500"
                to="/infos-pratiques"
              >
                Infos pratiques
              </Link>
            </li>
            <li>
              <Link className="text-white hover:text-red-500" to="/attractions">
                Attractions
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-red-500"
                to="/se-connecter"
              >
                Se connecter
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[150px]">
          <h3 className="text-2xl uppercase">
            Nous <span className="text-redZombie">Contacter</span>
          </h3>
          <ul>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#C90000"
                className="size-6"
              >
                <path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
              </svg>
              <a
                className="text-white hover:text-red-500"
                href="tel:+330666666666"
              >
                +33 0666 666 666
              </a>
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#C90000"
                className="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <Link className="text-white hover:text-red-500" to="/contact">
                Formulaire de contact
              </Link>
            </li>
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#C90000"
                className="size-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <HashLink
                to="infos-pratiques#venirAuParc"
                className="text-white hover:text-red-500"
              >
                66 rue de l&apos;enfer <br /> 75000 Paris
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="w-[150px]">
          <h3 className="text-2xl uppercase">
            Suivez-<span className="text-redZombie">nous</span>
          </h3>
          <ul className="flex gap-2">
            <li>
              <a
                href="http://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="hover:fill-white"
                  fill="#C90000"
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M59.5 1H4.5C2.5 1 1 2.6 1 4.5V59.5C1 61.5 2.6 63 4.5 63H34.1V38.9H26.1V29.6H34.1V22.7C34.1 14.7 38.9 10.3 46.1 10.3C48.5 10.3 50.9 10.4 53.3 10.7V19H48.5C44.7 19 43.9 20.8 43.9 23.5V29.4H53L51.7 38.8H43.7V62.6H59.5C61.5 62.6 63 61.1 63 59.1V4.5C62.9 2.5 61.3 1 59.5 1Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="http://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="hover:fill-white"
                  fill="#C90000"
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32.1 43.6004C38.5065 43.6004 43.7 38.4069 43.7 32.0004C43.7 25.5939 38.5065 20.4004 32.1 20.4004C25.6935 20.4004 20.5 25.5939 20.5 32.0004C20.5 38.4069 25.6935 43.6004 32.1 43.6004Z" />
                  <path d="M44.7 1H19.3C9.2 1 1 9.2 1 19.3V44.5C1 54.8 9.2 63 19.3 63H44.5C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1ZM32.1 47.2C23.6 47.2 16.9 40.3 16.9 32C16.9 23.7 23.7 16.8 32.1 16.8C40.4 16.8 47.2 23.7 47.2 32C47.2 40.3 40.5 47.2 32.1 47.2ZM53.1 18.2C52.1 19.3 50.6 19.9 48.9 19.9C47.4 19.9 45.9 19.3 44.7 18.2C43.6 17.1 43 15.7 43 14C43 12.3 43.6 11 44.7 9.8C45.8 8.6 47.2 8 48.9 8C50.4 8 52 8.6 53.1 9.7C54.1 11 54.8 12.5 54.8 14.1C54.7 15.7 54.1 17.1 53.1 18.2Z" />
                  <path d="M49.0016 11.5996C47.7016 11.5996 46.6016 12.6996 46.6016 13.9996C46.6016 15.2996 47.7016 16.3996 49.0016 16.3996C50.3016 16.3996 51.4016 15.2996 51.4016 13.9996C51.4016 12.6996 50.4016 11.5996 49.0016 11.5996Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="http://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="hover:fill-white"
                  fill="#C90000"
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M55.619 1H8.38095C4.3111 1 1 4.3111 1 8.38095V55.619C1 59.6889 4.3111 63 8.38095 63H55.619C59.6889 63 63 59.6889 63 55.619V8.38095C63 4.3111 59.6889 1 55.619 1ZM49.7231 28.0482C49.3846 28.0811 49.0447 28.0984 48.7046 28.0999C46.8681 28.1002 45.0604 27.6431 43.4448 26.7699C41.8291 25.8968 40.4563 24.635 39.4503 23.0986V40.1294C39.4503 42.6189 38.7121 45.0526 37.329 47.1226C35.9458 49.1926 33.9799 50.806 31.6799 51.7587C29.3798 52.7114 26.8489 52.9607 24.4072 52.475C21.9654 51.9893 19.7226 50.7905 17.9622 49.0301C16.2018 47.2697 15.0029 45.0268 14.5172 42.5851C14.0316 40.1433 14.2808 37.6124 15.2335 35.3124C16.1863 33.0123 17.7996 31.0464 19.8696 29.6633C21.9396 28.2801 24.3733 27.5419 26.8629 27.5419C27.1256 27.5419 27.3825 27.5655 27.6408 27.5818V33.7847C27.3825 33.7537 27.1286 33.7065 26.8629 33.7065C25.159 33.7065 23.5249 34.3833 22.3201 35.5881C21.1153 36.7929 20.4385 38.427 20.4385 40.1309C20.4385 41.8347 21.1153 43.4688 22.3201 44.6736C23.5249 45.8784 25.159 46.5552 26.8629 46.5552C30.4116 46.5552 33.5456 43.7593 33.5456 40.2106L33.6076 11.2861H39.5419C39.813 13.8645 40.9818 16.2656 42.844 18.0696C44.7062 19.8735 47.1433 20.9654 49.729 21.1544V28.0482" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center text-sm mt-2">
        <p>Mentions légales</p>
        <p>&copy; 2024 ZombieLand - Tout droits reservés</p>
      </div>
    </footer>
  );
}

export default Footer;
