/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import axios from 'axios';

interface Booking {
  booking_id: number;
  client_id: number;
  date: string;
  status: string;
  nb_tickets: string;
  created_at: string;
}

function MyBookings() {
  const { user } = useUser();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 4;
  const formatter = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'short' });

  useEffect(() => {
    const loadUserBookings = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/booking`
        );
        const filteredBookings = response.data.filter(
          (booking: Booking) => booking.client_id === Number(user?.user_id)
        );
        setBookings(filteredBookings);
      } catch (error) {
        console.error('Erreur lors du chargement des réservations:', error);
      }
    };

    loadUserBookings();
  }, [user?.user_id]);

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  const totalPages = Math.ceil(bookings.length / bookingsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="bg-black h-full w-full mt-[104px] flex flex-col items-center pt-5 max-w-screen-2xl mx-auto">
      <h1 className="text-6xl text-center md:text-left mb-12">
        MON <em className="text-redZombie">COMPTE</em>
      </h1>
      <Link
        to={`/mon-compte/${user?.user_id}`}
        className="text-3xl text-white border-white border-2 rounded-xl px-8 py-2 text-center mb-10"
      >
        Mes <em className="text-redZombie ">Informations</em>
      </Link>
      <div className="w-3/4 mx-auto">
        <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-3 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-semibold leading-none text-slate-800">
                    #
                  </p>
                </th>
                <th className="p-3 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-semibold leading-none text-slate-800">
                    Nombre de billet(s)
                  </p>
                </th>
                <th className="p-3 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-semibold leading-none text-slate-800">
                    Status
                  </p>
                </th>
                <th className="p-3 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-semibold leading-none text-slate-800">
                    Date de visite
                  </p>
                </th>
                <th className="p-3 border-b border-slate-200 bg-slate-50">
                  <p className="text-sm font-semibold leading-none text-slate-800">
                    Réservé le
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentBookings.map((booking) => (
                <tr
                  key={booking.booking_id}
                  className="hover:bg-slate-50 border-b border-slate-200"
                >
                  <td className="p-3">
                    <p className="block font-semibold text-sm text-slate-600">
                      {booking.booking_id}
                    </p>
                  </td>
                  <td className="p-3 ">
                    <p className="text-sm text-slate-500">
                      {booking.nb_tickets}
                    </p>
                  </td>
                  <td className="p-3 ">
                    <p className="text-sm text-slate-500">{booking.status}</p>
                  </td>
                  <td className="p-3 ">
                    <p className="text-sm text-slate-500">
                      {formatter.format(new Date(booking.date))}
                    </p>
                  </td>
                  <td className="p-3 ">
                    <p className="text-sm text-slate-500">
                      {formatter.format(new Date(booking.created_at))}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center px-4 py-3">
            <div className="text-sm text-slate-500">
              Affichage
              <b>
                {indexOfFirstBooking + 1}-
                {Math.min(indexOfLastBooking, bookings.length)}
              </b>{' '}
              of {bookings.length}
            </div>
            <div className="flex space-x-1">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal ${
                    currentPage === i + 1
                      ? 'text-white bg-slate-800 border-slate-800'
                      : 'text-slate-500 bg-white border-slate-200'
                  } rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MyBookings;
