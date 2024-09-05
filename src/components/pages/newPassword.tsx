import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Les mots de passe entrés ne correspondent pas.');
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
  
    if (!token) {
      setError('Token non valide ou expiré.');
      return;
    }
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/account/reset-password`,
        { password, token },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        navigate('/se-connecter');
      } else {
        setError('Erreur lors de la réinitialisation du mot de passe.');
      }
    } catch (error) {
      setError('Erreur lors de la réinitialisation du mot de passe.');
    }
  };

  return (
    <div className="w-4/5 md:max-w-5xl mt-40 m-auto">
      <h2 className="text-6xl uppercase text-center md:text-left mb-12">
        Changement de <em className="text-redZombie">mot de passe</em>
      </h2>
      <form onSubmit={handleSubmit} className="md:flex md:flex-col">
        <div className="mb-6 flex flex-col">
          <label htmlFor="password" className="text-3xl leading-loose">
            Votre nouveau mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Entrez votre nouveau mot de passe"
            className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-6 flex flex-col">
          <label htmlFor="confirmPassword" className="text-3xl leading-loose">
            Veuillez retaper votre nouveau mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmez votre nouveau mot de passe"
            className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full mb-6 bg-greenZombie text-black text-3xl border-white border-2 rounded-xl md:max-w-xs self-center"
        >
          Changer mon mot de passe
        </button>
      </form>
    </div>
  );
}

export default NewPassword;