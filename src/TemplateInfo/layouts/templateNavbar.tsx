import React from 'react';

///LAYOUT
import { TemplateNavbarPhone } from './TemplateNavbarPhone';

///ROUTERR
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const TemplateNavbar = () => {


let history = useHistory();

const Navegation = (LINK: string) => {
  history.push(LINK);
};

return (
  <div className="navigation">
    <nav className="navigation__nav-template">
      <div
        onClick={() => Navegation("/")}
        className="navigation__nav--logo-box"
      >
        <img
          src="/logo-portfolio.png"
          alt="Logo"
          className="navigation__nav--logo-box-img"
        />
      </div>

      <Link
        to="/template-info/styles-guide"
        className="navigation__nav-template--options text-border-move-nabvar nabvar-link-1"
      >
        Style Guide
      </Link>
      <Link
        to="/template-info/licenses"
        className="navigation__nav-template--options text-border-move-nabvar nabvar-link-2"
      >
        Licenses
      </Link>
      <Link
        to="/template-info/changelog"
        className="navigation__nav-template--options text-border-move-nabvar nabvar-link-3"
      >
        Changelog
      </Link>
      <a
        href="https://webflow.com/templates/html/tara-portfolio-website-template"
        className="navigation__nav--options-especial btn-secondary"
      >
        Buy Now
      </a>
    </nav>
    <TemplateNavbarPhone/>
  </div>
);
}