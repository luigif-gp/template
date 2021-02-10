import React from 'react';
import { BrowserRouter as  Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { NavbarPhone } from './NavbarPhone';

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

          <a
            onClick={() => Navegation("/about")}
            className="nav-1 navigation__nav--options  text-border-move-nabvar"
          >
            About
          </a>
          <a
            onClick={() => Navegation("/portfolio")}
            className="nav-2 navigation__nav--options  text-border-move-nabvar"
          >
            Portfolio
          </a>
          <a
            onClick={() => Navegation("/blog")}
            className="nav-3 navigation__nav--options  option-3 text-border-move-nabvar"
          >
            Blog
          </a>
          <a
            onClick={() => Navegation("/contact")}
            className="navigation__nav--options-especial btn-secondary "
          >
            Let's Talk
          </a>
          <NavbarPhone />
        </nav>
      </div>
    );

}