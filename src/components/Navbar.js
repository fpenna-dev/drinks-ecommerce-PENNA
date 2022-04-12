import React from "react";
import "./navbar.css";
import logo from "../logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar__link">
          <img src={logo} alt="" className="navbar__logo" />
        </Link>
        <ul className="navbar__categories">
          <li className="navbar__item">
            <Link to="/category/2" className="navbar__link">
              Fernet
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/14" className="navbar__link">
              Aperitivos
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/17" className="navbar__link">
              Vodka
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/5" className="navbar__link">
              Whiskies
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/3" className="navbar__link">
              Licores
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/8" className="navbar__link">
              Combos
            </Link>
          </li>
          <li className="navbar__item">
            <CartWidget count="5" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
