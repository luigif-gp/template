import React from 'react';

///ROUTERRR
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


export const NavbarPhone = () => {

     let history = useHistory();

     const Navegation = (LINK: string) => {
       history.push(LINK);
     };

    return (
      <div>
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&#9776;</span>
        </label>
        <nav className="navigation__nav">
          <div className="navigation__nav--phone">
            <Link
              to="/about"
              className=" navigation__checkbox--options option-1"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className=" navigation__checkbox--options "
            >
              Portfolio
            </Link>
            <Link
            to="/blog"
              className=" navigation__checkbox--options option-3 "
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>
    );
}