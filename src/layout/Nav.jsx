import React from "react";
import { Link } from "react-router-dom";
import whale from "../assets/whale.png";
import Account from "../components/Account";
import '../style/layout.css';


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={whale} alt="whale" />
            <h3>Whale & Life</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
