import React from "react";
import "./navbar.css";
import logo from "../logo.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <a href="" className="navbar__link">
          <img src={logo} alt="" className="navbar__logo" />
        </a>
        <ul className="navbar__categories">
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Categoria 1
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Categoria 2
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Categoria 3
            </a>
          </li>
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Categoria 4
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
