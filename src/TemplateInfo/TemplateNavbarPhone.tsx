import React from "react";
import { useHistory } from "react-router-dom";
import { Licenses } from './templateLicenses';
import { Changelog } from './templateChangelog';

export const TemplateNavbarPhone = () => {


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
          <a
            onClick={() => Navegation("/template-info/styles-guide")}
            className=" navigation__checkbox--options option-1"
          >
            Style Guide
          </a>
          <a
            onClick={() => Navegation("/template-info/licenses")}
            className=" navigation__checkbox--options "
          >
            Licenses
          </a>
          <a
            onClick={() => Navegation("/template-info/changelog")}
            className=" navigation__checkbox--options option-3 "
          >
            Changelog
          </a>
        </div>
      </nav>
    </div>
  );
};
