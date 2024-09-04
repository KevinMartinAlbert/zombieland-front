/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

import NavBar from '../NavBar/NavBar';
import Home from '../pages/Home';
import MyAccount from '../pages/MyAccount';
import Signin from '../pages/Signin';
import ParcMap from '../pages/ParcMap';
import NotFoundPage from '../pages/404';
import Infos from '../pages/Infos';
import Booking from '../pages/Booking';
import Activities from '../pages/Activities';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import ActivityDetail from '../pages/ActivityDetail';
import MyBookings from '../pages/MyBookings';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mon-compte/:id" element={<MyAccount />} />
        <Route path="/inscription" element={<Signin />} />
        <Route path="/se-connecter" element={<Login />} />
        <Route path="/plan-du-parc" element={<ParcMap />} />
        <Route path="/infos-pratiques" element={<Infos />} />
        <Route path="/reserver" element={<Booking />} />
        <Route path="/attractions" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/attractions/:id" element={<ActivityDetail />} />
        <Route path="/mes-reservations" element={<MyBookings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
