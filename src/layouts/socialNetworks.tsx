import React from 'react';

//ICONS
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";

export const SocialNetworks = () => {

    return (
      <div className="footer__part-3 main-content__icons">
        <p className="main-content__icons--text">Follow me on:</p>
        <FaFacebook className="main-content__icons--display" />

        <AiFillInstagram className="main-content__icons--display" />

        <FaTwitter className="main-content__icons--display" />

        <FaBasketballBall className="main-content__icons--display" />
      </div>
    );
}