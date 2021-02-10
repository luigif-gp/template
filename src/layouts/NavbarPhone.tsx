import React from 'react';
import { useHistory } from 'react-router-dom';



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
            <a
              onClick={() => Navegation("/about")}
              className=" navigation__checkbox--options option-1"
            >
              About
            </a>
            <a
              onClick={() => Navegation("/portfolio")}
              className=" navigation__checkbox--options "
            >
              Portfolio
            </a>
            <a
              onClick={() => Navegation("/blog")}
              className=" navigation__checkbox--options option-3 "
            >
              Blog
            </a>
          </div>
        </nav>
      </div>
    );
}