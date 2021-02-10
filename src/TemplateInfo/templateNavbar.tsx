import React from 'react';
import { useHistory } from 'react-router-dom';
import { TemplateNavbarPhone } from './TemplateNavbarPhone';

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

      <a
        onClick={() => Navegation("/template-info/styles-guide")}
        className="navigation__nav-template--options text-border-move-nabvar nabvar-link-1"
      >
        Style Guide
      </a>
      <a
        onClick={() => Navegation("/template-info/licenses")}
        className="navigation__nav-template--options text-border-move-nabvar nabvar-link-2"
      >
        Licenses
      </a>
      <a
        onClick={() => Navegation("/template-info/changelog")}
        className="navigation__nav-template--options text-border-move-nabvar nabvar-link-3"
      >
        Changelog
      </a>
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