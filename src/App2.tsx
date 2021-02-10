import React from 'react';

//ICONS
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";

//COMPONENTS
import { AboutMe } from './components/comp.aboutMe';
import { Portfolio } from './components/comp.portfolio';
import { Testimonials } from './components/comp.testimonials';
import { Icons } from './components/comp.icons';
import { Blog } from './components/comp.myBlog';

import { Footer } from './layouts/footer';
import { Features } from './components/comp.features';
import { Navbar } from './layouts/Navbar';

export const App2 = () => {
    return (
      <div className="">
        <header className="container__header">
          <Navbar />

          <div className="main-content">
            <h3 className="main-content__greeting">👋 Luigi here</h3>
            <h1 className="main-content__big-text">
              I’m a Designer and web developer from Portugal
            </h1>
            <p className="main-content__normal-text">
              I have over <strong>1 year</strong> of experience in startups and
              big companies like Google, Facebook and more.
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

        <main>
          <section className="what-i-do">
            <div className="intro__sections">
              <p className="intro__sections--about_text">WHAT I DO</p>
              <h1 className="intro__sections--big_text">
                For good design you need love
              </h1>
            </div>

            <Features />
          </section>

          <hr className="divider-line" />

          <section className="my-portfolio">
            <div className="intro__sections">
              <p className="intro__sections--about_text">MY PORTFOLIO</p>
              <h1 className="intro__sections--big_text-2 ">
                Works for clients and fulltime
              </h1>
            </div>
            <Portfolio />
          </section>
          <section className="about-me">
            <AboutMe />
          </section>
         
            <Testimonials />
          
          <section className="icons">
            <Icons />
          </section>
            <Blog />
        </main>

        <Footer />
      </div>
    );
} 