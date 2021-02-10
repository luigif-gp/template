import React from 'react';

import { useMediaQuery } from 'react-responsive';
import Whirligig from "react-whirligig";

///DATA TESTIMONIALS
import { DataTs } from '../datas/data.card';



export const Testimonials = () => {


  let whirligig: any
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()


  const MiddleScreen = useMediaQuery({ query: "(max-width: 1300px)" });
  const SmallScreen = useMediaQuery({ query: "(max-width: 780px)" });
  


  var visibleSlides;

   if (!SmallScreen && !MiddleScreen) visibleSlides = 3;
   else if (SmallScreen) visibleSlides = 1;
   else if (MiddleScreen) visibleSlides = 2;
    
     

    return (
      <div className="testimonials">
        <div className="intro__sections">
          <p className="intro__sections--about_text">TESTIMONIALS</p>
          <h1 className="intro__sections--big_text-2  mx-width">
            Kind words from excellent clients
          </h1>
        </div>

        <div className="testimonial-container">
          <Whirligig
            className="carousel"
            preventScroll={true}
            infinite={true}
            visibleSlides={visibleSlides}
            gutter="1em"
            ref={(_whirligigInstance: any) => {
              whirligig = _whirligigInstance;
            }}
          >
            {DataTs.map((data) => (
              <div className="card">
                <div className="card__container">
                  <img
                    src={`${data.img}`}
                    alt=""
                    className="card__container--img"
                  />
                  <h3 className="card__container--name">{data.name}</h3>
                  <small className="card__container--work">{data.work}</small>
                </div>
                <label className="card__start">{data.start}</label>
                <p className="card__content">{data.content}</p>
              </div>
            ))}
          </Whirligig>
          <div className="box">
            <button className="box__carousel-btn" onClick={prev}>
              &#10094;
            </button>
            <button className="box__carousel-btn" onClick={next}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    );
}