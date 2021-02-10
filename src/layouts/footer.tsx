import React from 'react';
import { SocialNetworks } from './socialNetworks';
import { useHistory } from "react-router-dom";


export const Footer = () => {

  let history = useHistory();

  const Navegation = (LINK: string) => {
    history.push(LINK);
  };


    return (
      <div className="footer_container">
        <div className="footer">
          <div className="footer__part-1">
            <img
              onClick={() => Navegation("/")}
              src="/logo-portfolio.png"
              alt="logo"
              className="footer__part-1--logo"
            />
            <h1
              onClick={() => Navegation("/contact")}
              className="footer__part-1--greeting"
            >
              Say Hi 👋{" "}
            </h1>
          </div>
          <div className="footer__part-2">
            <p className="footer__part-2--title">Site</p>
            <a
              onClick={() => Navegation("/about")}
              className="footer__part-2--sites"
            >
              About
            </a>
            <a
              onClick={() => Navegation("/portfolio")}
              className="footer__part-2--sites"
            >
              Portfolio
            </a>
            <a
              onClick={() => Navegation("/blog")}
              className="footer__part-2--sites"
            >
              Blog
            </a>
          </div>
          <div className="footer__part-2">
            <p className="footer__part-2--title">Template</p>
            <a
              onClick={() => Navegation("/template-info/changelog")}
              className="footer__part-2--sites"
            >
              Changelog
            </a>
            <a
              onClick={() => Navegation("/template-info/licenses")}
              className="footer__part-2--sites"
            >
              Licenses
            </a>
            <a
              onClick={() => Navegation("/template-info/styles-guide")}
              className="footer__part-2--sites"
            >
              Style Guide
            </a>
          </div>
          <SocialNetworks />
        </div>
        <p className="copyright">
          Copyright © 2021
          <label className="copyright--name"> Luigi Garcia. </label>
          All Rights Reserved.
        </p>
      </div>
    );
}
