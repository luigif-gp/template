import React from 'react';

///ROUTER
import { Link } from "react-router-dom";

interface Props{}


export const Features: React.FC<Props> = () => {
 

  return (
    <div className="row">
      <div className="feature-box">
        <div className="feature-box--background">
          <img
            src="/features/image-1.png"
            className="feature-box__image feature-box__image--1"
          />
          <h3 className="feature-box__heading ">UX/UI Design</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
          <Link to="/contact" className="feature-box__little-text">
            Let’s Talk
          </Link>
        </div>
      </div>

      <div className="feature-box">
        <div className="feature-box--background">
          <img src="/features/image-2.png" className="feature-box__image" />
          <h3 className="feature-box__heading ">Mobile Design</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
          <Link to="/contact" className="feature-box__little-text">
            Let’s Talk
          </Link>
        </div>
      </div>

      <div className="feature-box">
        <div className="feature-box--background">
          <img src="/features/image-3.png" className="feature-box__image" />
          <h3 className="feature-box__heading">Webflow Magic</h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
          <Link to="/contact" className="feature-box__little-text">
            Let’s Talk
          </Link>
        </div>
      </div>
    </div>
  );
};