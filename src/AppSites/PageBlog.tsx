import React from 'react';  
import { Footer } from '../layouts/footer';

//COMPONENTS
import { Navbar } from '../layouts/Navbar';
import { Blog } from '../components/comp.myBlog';

export const PageBlog = () => {

    const Active = true; 

    return (
      <div className="page__blog">
        <div className="blog__container">
          <Navbar />
          <div className="blog__container">
            <div className="blog__header">
              <h1 className="blog__header--title">
                My personal blog about art and work
              </h1>
              <p className="blog__header--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus sem sit amet cursus egestas.
              </p>
            </div>
          </div>
        </div>
        <Blog active={Active}/>
      <Footer/>
      </div>
    );
}