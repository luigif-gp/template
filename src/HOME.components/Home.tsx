import React from 'react';



//COMPONENTS
import { Header } from "./comp.Header";
import { AboutMe } from './comp.aboutMe';
import { Portfolio } from './comp.portfolio';
import { Testimonials } from './comp.testimonials';
import { Icons } from './comp.icons';
import { Blog } from './comp.myBlog';
import { Features } from "./comp.features";

///LAYOUT
import { Footer } from '../layouts/footer';




interface Props {}

export const Home:React.FC<Props>  = () => {
    return (
      <div className="">
          <Header/>
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