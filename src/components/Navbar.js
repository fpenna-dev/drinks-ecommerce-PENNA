import React from "react";
import "./navbar.css";
import logo from "../logo.png";
import CartWidget from "./CartWidget";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const data = useContext(CartContext);
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar__link">
          <img src={logo} alt="" className="navbar__logo" />
        </Link>
        <ul className="navbar__categories">
          <li className="navbar__item">
            <Link to="/category/fernet" className="navbar__link">
              Fernet
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/aperitivos" className="navbar__link">
              Aperitivos
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/vodka" className="navbar__link">
              Vodka
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/whiskies" className="navbar__link">
              Whiskies
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/licores" className="navbar__link">
              Licores
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/category/combos" className="navbar__link">
              Combos
            </Link>
          </li>
          <li className="navbar__item">
            <CartWidget count={data.calcCart()} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
