import React from 'react';

////ROUTERR
import { useHistory } from "react-router-dom";
import { NavbarPhone } from './NavbarPhone';
import { Link } from "react-router-dom";

export const Navbar = () => {

   let history = useHistory();

   const Navegation = (LINK: string) => {
     history.push(LINK);
   }

    return (
      <div className="navigation">
        <nav className="navigation__nav">
          <div
            onClick={() => Navegation("/")}
            className="navigation__nav--logo-box "
          >
            <img
              src="/logo-portfolio.png"
              alt="Logo"
              className="navigation__nav--logo-box-img"
            />
          </div>

          <Link
            to="/about"
            className="nav-1 navigation__nav--options  text-border-move-nabvar"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="nav-2 navigation__nav--options  text-border-move-nabvar"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="nav-3 navigation__nav--options  option-3 text-border-move-nabvar"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="navigation__nav--options-especial btn-secondary "
          >
            Let's Talk
          </Link>
          <NavbarPhone />
        </nav>
      </div>
    );

}