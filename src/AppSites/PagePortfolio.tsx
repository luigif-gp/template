import React from 'react';

//COMPONENTS
import { Navbar } from '../layouts/Navbar';
import { Portfolio } from '../components/comp.portfolio';
import { DataImg } from '../datas/data.imgPortfolio';
import { Testimonials } from '../components/comp.testimonials';
import { Icons } from '../components/comp.icons';
import { Footer } from '../layouts/footer';




export const PagePortfolio = () => {

    const Active = true;

    return (
      <div className="page-portfolio" id="PagePortfolio">
        <Navbar />
        <div className="portfolio__container">
          <div className="portfolio__header">
            <h1 className="portfolio__header--title">
              My works from clients and fulltime jobs
            </h1>
            <p className="portfolio__header--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dapibus sem sit amet cursus egestas.
            </p>
          </div>
          <Portfolio active={Active} />
          <div className="portfolio__shots">
            <div className="portfolio__shots--container">
              <div className="portfolio__shots--container-header">
                <h1 className="portfolio__shots--container-header__text">
                  My latest dribbble shots
                </h1>
                <a
                  href="https://dribbble.com/Milos_Knezevic"
                  className="portfolio__shots--container-header__btn btn-secondary"
                >
                  View All Shots
                </a>
              </div>
              <div className="portfolio__shots--container__img">
                {DataImg.map((data) => (
                  <a href={data.link} className="portfolio__shots--container__img--box">
                    <img
                      src={data.img}
                      alt=""
                      className="portfolio__shots--container__img--pictures"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
        <div className="portfolio__else">
          <Icons />
        </div>
        <Footer />
      </div>
    );
}
