import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Veuillez entrer votre email.');
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/account/send-reset-email`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        navigate('/se-connecter');
      } else {
        setError('Erreur lors de l\'envoi de l\'email. 1');
      }
    } catch (error) {
      setError('Erreur lors de l\'envoi de l\'email. 2');
    }
  };

  return (
    <div className="w-4/5 md:max-w-5xl mt-40 m-auto">
      <h2 className="text-6xl uppercase text-center md:text-left mb-12">
        Changement de <em className="text-redZombie">mot de passe</em>
      </h2>
      <form onSubmit={sendEmail} className="md:flex md:flex-col">
        <div className="mb-6 flex flex-col">
          <label htmlFor="mail" className="text-3xl leading-loose">
            E-mail
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Entrez votre E-mail"
            className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full mb-6 bg-greenZombie text-black text-3xl border-white border-2 rounded-xl md:max-w-xs self-center"
        >
          Récupérer mon mot de passe
        </button>
      </form>
      <p className="text-center text-2xl mb-40">
        Pas de compte ?
        <Link className="text-redZombie" to="/inscription">
          Créer un compte
        </Link>
      </p>
    </div>
  );
}

export default PasswordReset;