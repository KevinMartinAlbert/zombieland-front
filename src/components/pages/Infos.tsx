/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import euroImg from '../../assets/img/desktop/infos/Euro.svg';
import clockImg from '../../assets/img/desktop/infos/Clock.svg';
import skullImg from '../../assets/img/desktop/infos/Skull.svg';
import gpsImg from '../../assets/img/desktop/infos/Gps.svg';

function Infos() {
  return (
    <main className="bg-black h-full w-full mt-[104px] flex flex-col items-center pt-10 max-w-screen-2xl mx-auto">
      <h1 className="self-center md:self-start text-6xl">
        Infos <em className="text-redZombie">Pratiques</em>
      </h1>
      <section className="price-schedules-section flex flex-col px-10 md:px-24 max-w-7xl m-auto bg-black py-14">
        <div className="flex mb-10">
          <img src={euroImg} className="mr-8 w-16 md:w-20" alt="icone euro" />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-redZombie">Tarifs</h2>
            <p className="text-3xl">
              Prêt à braver les ténèbres et affronter vos peurs ? Découvrez
              notre tarif unique... à vos risques et périls !
            </p>
          </div>
        </div>
        <div className="text-center mb-10">
          <em className="text-7xl text-redZombie">66,66€</em>
        </div>
        <div>
          <div className="flex">
            <img src={clockImg} className="mr-8 w-20" alt="icone horloge" />
            <div className="flex flex-col">
              <h2 className="text-4xl text-redZombie">Horaires d'ouverture</h2>
              <p className="text-3xl">
                Préparez-vous à plonger dans l'horreur... mais assurez-vous de
                ne pas arriver trop tard, les zombies n'attendent personne !
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center md:ml-20 mb-10">
            <ul className="mt-8">
              <li className="flex items-center mb-6">
                <img src={skullImg} alt="icone crane" />
                <p className="text-3xl ml-8">
                  <em className="text-redZombie">Lundi au Jeudi</em> : 12h00 -
                  22h00
                </p>
              </li>
              <li className="flex items-center mb-6">
                <img src={skullImg} alt="icone crane" />
                <p className="text-3xl ml-8">
                  <em className="text-redZombie">Vendredi</em> : 12h00 - minuit
                  (parfait pour les chasseurs de frissons nocturnes !)
                </p>
              </li>
              <li className="flex items-center mb-6">
                <img src={skullImg} alt="icone crane" />
                <p className="text-3xl ml-8">
                  <em className="text-redZombie">Samedi</em> : 10h00 - minuit
                  (les zombies sont plus affamés le week-end...)
                </p>
              </li>
              <li className="flex items-center mb-6">
                <img src={skullImg} alt="icone crane" />
                <p className="text-3xl ml-8">
                  <em className="text-redZombie">Dimanche</em> : 10h00 - 20h00
                  (on ferme tôt, même les morts-vivants ont besoin de repos !)
                </p>
              </li>
              <li className="flex items-center mb-6">
                <img src={skullImg} alt="icone crane" />
                <p className="text-3xl ml-8">
                  <em className="text-redZombie">Nocturnes Apocalyptiques</em> :
                  Tous les derniers vendredis du mois, le parc reste ouvert
                  jusqu'à 02h00 du matin pour une expérience terrifiante à la
                  lumière de la lune.
                </p>
              </li>
              <li className="flex items-center mb-6">
                <img src={skullImg} alt="icone crane" />
                <p className="text-3xl ml-8">
                  <em className="text-redZombie">Vacances de la Toussaint</em> :
                  Ouverture prolongée de 10h00 à minuit chaque jour.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="how-to-come bg-redZombie pb-10 w-screen">
        <div className="section-container max-w-7xl m-auto">
          <div className="section-title flex mx-10 md:mx-24 pt-16 items-center">
            <img src={gpsImg} className="mr-8 w-20" alt="GPS Icon" />
            <div className="">
              <h2 className="text-4xl text-black">Venir au parc</h2>
              <p className="text-3xl">
                Vous êtes prêts à affronter les horreurs qui vous attendent ?
                Voici comment rejoindre notre parc... si vous en avez le courage
                !
              </p>
            </div>
          </div>
          <div
            id="venirAuParc"
            className="md:grid md:grid-cols-2 mt-16 gap-6 text-3xl leading-loose items-center"
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.0482887118997!2d2.323566812376017!3d48.83821760200589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671c96b3d5b29%3A0x791b7d9ef14e006f!2sCimeti%C3%A8re%20du%20Montparnasse!5e0!3m2!1sfr!2sfr!4v1725263621045!5m2!1sfr!2sfr"
              loading="lazy"
              className="w-full h-96 md:h-full"
            />
            <div className="means-of-transportation flex flex-col mx-10 md:mx-0">
              <div className="adress flex">
                <h3 className="text-black">Adresse :</h3>
                <p className="ml-2">66 rue de l'Enfer, 75000 Paris, France</p>
              </div>
              <div className="car">
                <h3 className="text-black">En voiture :</h3>
                <p>
                  Prenez la sortie 13 de l'autoroute A13 et suivez les panneaux
                  indiquant "ZombieLand". Un grand parking est disponible sur
                  place, mais attention : garez vous à vos risques et périls...
                  qui sait ce qui rôde dans l'ombre ?
                </p>
              </div>
              <div className="public-transport">
                <h3 className="text-black">Transports en commun :</h3>
                <ul className="list-disc text-black ml-8">
                  <li>
                    <p className="text-white">
                      <em className="text-black">Métro :</em> Ligne 7, station
                      "Terreur-sur-Seine". Marchez ensuite 15 minutes vers
                      l'est, en suivant les cris...
                    </p>
                  </li>
                  <li>
                    <p className="text-white">
                      <em className="text-black">Bus :</em> Ligne 666, arrêt
                      "Cimetière des Damnés", juste en face de l'entrée du parc.
                    </p>
                  </li>
                  <li>
                    <p className="text-white">
                      <em className="text-black">Train :</em> Descendez à la
                      gare "Apocalypse Centrale" (ligne RER B) puis prenez la
                      navette Zombie Express (gratuite pour tous les visiteurs
                      du parc).
                    </p>
                  </li>
                </ul>
              </div>
              <div className="on-foot">
                <h3 className="text-black">A pied :</h3>
                <p>
                  Pour les plus courageux, il est possible de marcher jusqu'au
                  parc depuis le centre-ville. Suivez les indications
                  "Zombieland", mais gardez un oeil ouvert... des créatures
                  affamées ne sont jamais loin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Infos;
