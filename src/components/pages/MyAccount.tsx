/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { jwtDecode } from 'jwt-decode';

interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

function MyAccount() {
  const { setUser } = useUser();
  const [thisUser, setThisUser] = useState<User | null>(null);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    content: string;
  } | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode<User>(token as string);

    if (!token) {
      navigate('/se-connecter');
      return;
    }

    if (decodedToken.user_id !== Number(id)) {
      navigate('/404');
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/account/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setThisUser(response.data);
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des infos utilisateur:',
          error
        );
        setMessage({
          type: 'error',
          content: 'Impossible de récupérer les informations utilisateur.',
        });
      }
    };

    fetchUser();
  }, [id, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const updateData: {
      first_name?: string;
      last_name?: string;
      email?: string;
      password?: string;
    } = {
      first_name: firstName !== thisUser?.first_name ? firstName : undefined,
      last_name: lastName !== thisUser?.last_name ? lastName : undefined,
      email: email !== thisUser?.email ? email : undefined,
    };

    try {
      if (oldPassword) {
        await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
          email,
          password: oldPassword,
        });

        if (newPassword && newPassword === confirmPassword) {
          updateData.password = newPassword;
        } else {
          setMessage({
            type: 'error',
            content: 'Les nouveaux mots de passe ne correspondent pas.',
          });
          return;
        }
      }

      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/account/${thisUser?.user_id}/update`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setThisUser(response.data);
      setMessage({
        type: 'success',
        content: 'Vos informations ont été mises à jour avec succès.',
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour des informations:', error);
      setMessage({
        type: 'error',
        content:
          "Une erreur s'est produite lors de la mise à jour de vos informations.",
      });
    }
  };

  const handleDelete = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/account/${thisUser?.user_id}/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem('token');
      setUser(null);
      setMessage({
        type: 'success',
        content: 'Votre compte a été supprimé avec succès.',
      });
      navigate('/');
    } catch (error) {
      console.error('Erreur lors de la suppression du compte:', error);
      setMessage({
        type: 'error',
        content:
          "Une erreur s'est produite lors de la suppression de votre compte.",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/se-connecter');
  };

  return (
    <main className="bg-black h-full w-full mt-[104px] flex flex-col items-center pt-10 max-w-screen-2xl mx-auto">
      <h1 className="self-center md:self-start text-6xl">
        MON <em className="text-redZombie">COMPTE</em>
      </h1>
      <Link
        to="/mes-reservations"
        className="text-3xl text-white border-white border-2 rounded-xl px-8 py-2 text-center"
      >
        Mes <em className="text-redZombie ">Réservations</em>
      </Link>

      {message && (
        <p
          className={
            message.type === 'success'
              ? 'text-green-600 mt-4'
              : 'text-red-600 mt-4'
          }
        >
          {message.content}
        </p>
      )}

      <form onSubmit={handleSubmit} className="w-3/4 md:flex md:flex-col mt-10">
        <div className="w-3/4 flex justify-between items-center m-auto gap-8">
          <div className="w-1/2 mt-8">
            <div className="mb-6 flex flex-col">
              <label htmlFor="lastName" className="text-3xl leading-loose">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Entrez votre Nom"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="firstName" className="text-3xl leading-loose">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Entrez votre Prénom"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="email" className="text-3xl leading-loose">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrez votre E-mail"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2">
            <h4 className="text-center text-2xl ">Changer de mot de passe</h4>
            <div className="mb-6 flex flex-col">
              <label htmlFor="oldPassword" className="text-3xl leading-loose">
                Ancien mot de passe
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                placeholder="Entrez votre ancien mot de passe"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label htmlFor="newPassword" className="text-3xl leading-loose">
                Nouveau mot de passe
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Entrez votre nouveau mot de passe"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="confirmPassword"
                className="text-3xl leading-loose"
              >
                Confirmez mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmez mot de passe"
                className="w-full text-3xl border-white border-2 rounded-xl p-2 text-center"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="my-6 m-auto flex gap-10 flex-col md:flex-row">
          <button
            type="submit"
            className="min-w-max bg-greenZombie text-white text-2xl border-white border-2 rounded-xl self-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]"
          >
            Sauvegarder mes infos
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="min-w-max bg-redZombie text-white text-2xl border-white border-2 rounded-xl self-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]"
          >
            Supprimer mon compte
          </button>
          <button
            onClick={handleLogout}
            type="button"
            className="min-w-max bg-darkGreenZombie text-white text-2xl border-white border-2 rounded-xl self-center [text-shadow:_1px_1px_0_rgb(0_0_0_/_80%)]"
          >
            Se déconnecter
          </button>
        </div>
      </form>
    </main>
  );
}

export default MyAccount;
