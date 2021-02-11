import React from 'react';
import { SocialNetworks } from './socialNetworks';

///ROUTER
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
            <Link
              to="/about"
              className="footer__part-2--sites"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="footer__part-2--sites"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="footer__part-2--sites"
            >
              Blog
            </Link>
          </div>
          <div className="footer__part-2">
            <p className="footer__part-2--title">Template</p>
            <Link
              to="/template-info/changelog"
              className="footer__part-2--sites"
            >
              Changelog
            </Link>
            <Link
              to="/template-info/licenses"
              className="footer__part-2--sites"
            >
              Licenses
            </Link>
            <Link
              to="/template-info/styles-guide"
              className="footer__part-2--sites"
            >
              Style Guide
            </Link>
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
