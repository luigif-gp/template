import React from "react";

///LAYOUTS
import { Navbar } from '../layouts/Navbar';

//ICONS
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className="container__header">
      <Navbar />

      <div className="main-content">
        <h3 className="main-content__greeting">👋 Luigi here</h3>
        <h1 className="main-content__big-text">
          I’m a Designer and web developer from Portugal
        </h1>
        <p className="main-content__normal-text">
          I have over <strong>2 years</strong> of experience building responsive webs and phone apps.
        </p>
        <form className="main-content__form">
          <input
            className="main-content__form--input"
            type="text"
            required
            placeholder="Enter Your Email..."
          />
          <button type="submit" className="main-content__form--btn btn">
            Subscribe
          </button>
        </form>
        <div>
          <img src="/person.png" alt="" className="main-content__img"></img>
        </div>

        <div className="main-content__icons">
          <p className="main-content__icons--text">Follow me on:</p>
          <FaFacebook className="main-content__icons--display" />

          <AiFillInstagram className="main-content__icons--display" />

          <FaTwitter className="main-content__icons--display" />

          <FaBasketballBall className="main-content__icons--display" />
        </div>
      </div>
    </header>
  );
}; 