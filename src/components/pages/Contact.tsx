/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import contactImg from '../../assets/img/desktop/Zombie-contact.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
function Contact() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!privacyChecked) {
      toast.warning('Veuillez accepter la politique de confidentialité.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        className: 'bg-redZombie text-white text-2xl',
        style: { fontFamily: 'League Gothic', top: '104px' },
      });
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          firstname,
          lastname,
          email,
          message,
        }
      );

      if (response.status === 200) {
        toast.success('Votre message a été envoyé avec succès !', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          className: 'bg-greenZombie text-black text-2xl',
          style: { fontFamily: 'League Gothic', top: '104px' },
        });
      }
      setFirstname('');
      setLastname('');
      setEmail('');
      setMessage('');
      setPrivacyChecked(false);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      toast.warning("Une erreur est survenue lors de l'envoi du message.", {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        className: 'bg-redZombie text-white text-2xl',
        style: { fontFamily: 'League Gothic', top: '104px' },
      });
    }
  };

  return (
     <div>
      <Helmet>
        <title>Contact Parc Zombieland | Paris | 0666 666 666 </title>
        <meta
          name="description"
          content="Vous avez une question ? Contactez-nous ! L’équipe de Zombieland est à votre disposition pour répondre à toutes vos demandes et faciliter votre visite."
        />
      </Helmet>
    <main className="bg-black h-full w-full mt-[104px] flex flex-col items-center pt-10 max-w-screen-2xl mx-auto">
      <h1 className="self-center md:self-start text-6xl">
        Nous <em className="text-redZombie">contacter</em>
      </h1>
      <ToastContainer />
      <p className="text-3xl self-start  hidden md:block">
        Vous avez des questions, des remarques ou souhaitez simplement crier à
        l'aide ? Nous sommes là pour vous écouter... avant que les zombies ne le
        fassent !
      </p>

      <div className="md:grid md:grid-cols-2 md:items-center ">
        <img
          src={contactImg}
          alt="zombie au téléphone"
          className="my-8 mx-auto w-4/5 col-start-2"
        />
        <form
          onSubmit={handleSubmit}
          action="#"
          className="m-8 col-start-1 row-start-1 md:flex md:flex-col"
        >
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 flex flex-col">
              <label htmlFor="firstname" className="text-3xl leading-loose">
                Prénom
              </label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Entrez votre prénom"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center text-white bg-zinc-900"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="lastname" className="text-3xl leading-loose">
                Nom
              </label>
              <input
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Entrez votre nom"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center text-white bg-zinc-900"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="email" className="text-3xl leading-loose">
              E-mail
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Entrez votre E-mail"
              className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center text-white bg-zinc-900"
            />
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="message" className="text-3xl leading-loose">
              Message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre message ici..."
              name="message"
              id="message"
              className="w-full text-3xl border-white border-2 rounded-xl p-2 h-60 resize-none text-white bg-zinc-900"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              onChange={(e) => setPrivacyChecked(e.target.checked)}
              type="checkbox"
              name="privacyPolicy-checkbox"
              id="privacyPolicy-checkbox"
              className="mr-4 h-12 w-12 text-white bg-zinc-900"
            />
            <label htmlFor="privacyPolicy-checkbox" className="text-3xl">
              En cochant cette case, j'accepte la{' '}
              <Link
                to="/politique-de-confidentialite"
                className="underline cursor-pointer"
              >
                Politique de confidentialité
              </Link>{' '}
              du site
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-greenZombie text-black text-3xl border-white border-2 rounded-xl md:max-w-xs self-center"
          >
            Envoyer
          </button>
        </form>
      </div>
    </main>
       </div>
  );
}

export default Contact;
