import React, { useState } from 'react';
import { Navbar } from '../layouts/Navbar';
import { Footer } from '../layouts/footer';
import { SocialNetworks } from '../layouts/socialNetworks';

export const PageContact = () => {

   const [active, setActive] = useState(false);
   const [question, setQuestion] = useState(0);

    function ActiveQuestion(number: number) {
        number === question ? setQuestion(0) : setQuestion(number)
    }

    return (
      <div className="page-contact">
        <Navbar />
        <div className="contact__container">
          <h1 className="contact__container--title big-heading">
            Say 👋 and let's talk about our future collaboration
          </h1>
          <p className="contact__container--information-1">
            <strong>Skype:</strong>tara.portfolio
          </p>
          <p className="contact__container--information-2">
            <strong>Email:</strong>tara.portfollio@gmail.com
          </p>
          <div className="contact__container--socialn">
            <SocialNetworks />
          </div>
          <form className="contact__container__form" action="">
            <input
              className="contact__container__form--input"
              type="text"
              name="name"
              required
              placeholder="Name"
            />
            <input
              className="contact__container__form--input"
              type="text"
              name="email"
              required
              placeholder="Email"
            />
            <textarea
              className="contact__container__form--textarea"
              name="message"
              required
              placeholder="Message"
            ></textarea>
            <button type="submit" className="contact__container__form--btn btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="intro__sections">
          <p className="intro__sections--about_text">FAQ</p>
          <h1 className="intro__sections--big_text-2  mx-width">
            Frequently asked questions
          </h1>
          <div className="contact__questions">
            <a
              onClick={() => ActiveQuestion(1)}
              id={question === 1 ? "question1" : ""}
              className="contact__questions__asked "
            >
              <div className="contact__questions__asked--click ">
                <h3 className="contact__questions__asked--title">
                  Lorem ipsum dolor sit amet, consectetu?
                </h3>
                <label className="contact__questions__asked--icon">
                  &#10095;
                </label>
              </div>
              <p className="contact__questions__asked--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non justo lorem. Donec vitae nisl nisl. Nulla tincidunt, diam at
                tincidunt accumsan, turpis urna bibendum ex.
              </p>
            </a>
            <a
              onClick={() => ActiveQuestion(2)}
              id={question === 2 ? "question1" : ""}
              className="contact__questions__asked"
            >
              <div className="contact__questions__asked--click ">
                <h3 className="contact__questions__asked--title">
                  Lorem ipsum dolor sit amet, consectetu?
                </h3>
                <label className="contact__questions__asked--icon">
                  &#10095;
                </label>
              </div>
              <p className="contact__questions__asked--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non justo lorem. Donec vitae nisl nisl. Nulla tincidunt, diam at
                tincidunt accumsan, turpis urna bibendum ex.
              </p>
            </a>
            <a
              onClick={() => ActiveQuestion(3)}
              id={question === 3 ? "question1" : ""}
              className="contact__questions__asked"
            >
              <div className="contact__questions__asked--click ">
                <h3 className="contact__questions__asked--title">
                  Lorem ipsum dolor sit amet, consectetu?
                </h3>
                <label className="contact__questions__asked--icon">
                  &#10095;
                </label>
              </div>
              <p className="contact__questions__asked--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non justo lorem. Donec vitae nisl nisl. Nulla tincidunt, diam at
                tincidunt accumsan, turpis urna bibendum ex.
              </p>
            </a>
            <a
              onClick={() => ActiveQuestion(4)}
              id={question === 4 ? "question1" : ""}
              className="contact__questions__asked"
            >
              <div className="contact__questions__asked--click ">
                <h3 className="contact__questions__asked--title">
                  Lorem ipsum dolor sit amet, consectetu?
                </h3>
                <label className="contact__questions__asked--icon">
                  &#10095;
                </label>
              </div>
              <p className="contact__questions__asked--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                non justo lorem. Donec vitae nisl nisl. Nulla tincidunt, diam at
                tincidunt accumsan, turpis urna bibendum ex.
              </p>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    );
}