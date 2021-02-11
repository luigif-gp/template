import React from "react";

///ROUTER
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


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
          <Link
            to="/template-info/styles-guide"
            className=" navigation__checkbox--options option-1"
          >
            Style Guide
          </Link>
          <Link
            to="/template-info/licenses"
            className=" navigation__checkbox--options "
          >
            Licenses
          </Link>
          <Link
            to="/template-info/changelog"
            className=" navigation__checkbox--options option-3 "
          >
            Changelog
          </Link>
        </div>
      </nav>
    </div>
  );
};
