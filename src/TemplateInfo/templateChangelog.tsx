import React from 'react';
import { TemplateNavbar } from './templateNavbar';
import { Footer } from '../layouts/footer';

export const Changelog = () => {
    return (
      <div className="template">
        <TemplateNavbar />
        <div className="">
          <h1 className="template__heading big-heading text-center">
            Changelog
          </h1>
          <p className="template__date">Published on: <strong>December 20</strong></p>
          <Footer/>
        </div>
      </div>
    );
}