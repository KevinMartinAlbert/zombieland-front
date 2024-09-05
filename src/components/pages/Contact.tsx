/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import contactImg from '../../assets/img/desktop/Zombie-contact.webp';

function Contact() {
  return (
    <main className="bg-black h-full w-full mt-[104px] flex flex-col items-center pt-10 max-w-screen-2xl mx-auto">
      <h1 className="self-center md:self-start text-6xl">
        Nous <em className="text-redZombie">contacter</em>
      </h1>
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
          action="#"
          className="m-8 col-start-1 row-start-1 md:flex md:flex-col"
        >
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mb-6 flex flex-col">
              <label htmlFor="firstname" className="text-3xl leading-loose">
                Prénom
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Entrez votre prénom"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="lastname" className="text-3xl leading-loose">
                Nom
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Entrez votre nom"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
              />
            </div>
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="mail" className="text-3xl leading-loose">
              E-mail
            </label>
            <input
              type="text"
              id="mail"
              name="mail"
              placeholder="Entrez votre E-mail"
              className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
            />
          </div>
          <div className="mb-6 flex flex-col">
            <label htmlFor="message" className="text-3xl leading-loose">
              Message
            </label>
            <textarea
              placeholder="Votre message ici..."
              name="message"
              id="message"
              className="w-full text-3xl border-white border-2 rounded-xl p-2 h-60 resize-none"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="privacyPolicy-checkbox"
              id="privacyPolicy-checkbox"
              className="mr-4 h-12 w-12"
            />
            <label htmlFor="privacyPolicy-checkbox" className="text-3xl">
              En cochant cette case, j'accepte la Politique de confidentialité
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
  );
}

export default Contact;
