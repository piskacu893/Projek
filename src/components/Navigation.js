import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../img/Desain_tanpa_judul__1_-removebg-preview.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Gunakan variabel 'logo' sebagai src */}
      </div>
      <nav className="menu">
        <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/Destination" activeClassName="active">Destination</NavLink></li>
          <li><NavLink to="/Booking" activeClassName="active">Booking</NavLink></li>
          <li><NavLink to="/Ulasan" activeClassName="active">Review</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
