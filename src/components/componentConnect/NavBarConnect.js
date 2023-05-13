import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import './NavBar.css';
import { FaUserAlt, FaShoppingCart, FaSignOutAlt, FaBars } from "react-icons/fa";

export default function NavBarConnect() {

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch {
      alert("For some reasons we can't deconnect, please check your internet connexion and retry.");
    }
  };


  return (
    <nav>
      <div class="navbar-left">
        <a href="/private/private-menu">
          Menu
        </a>

        <a href="/private/private-order">
        <FaShoppingCart className="nav-tab-icon" />
          Order
        </a>
        
      </div>
      <div class="navbar-right">
        <a href="/private/private-profil">
        <FaUserAlt className="nav-tab-icon" />
          Profil
        </a>
        <button onClick={logOut}>
        <FaSignOutAlt className="nav-tab-icon" onClick={logOut} />
          Déconnexion
        </button>
      </div>
    </nav>
  );
}