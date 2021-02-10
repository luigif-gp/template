import React from 'react';
import { TemplateNavbar } from './templateNavbar';
import { Footer } from '../layouts/footer';
import { ColorsData } from './data-color';

export const StylesGuide = () => {

  return (
    <div className="template">
      <TemplateNavbar />

      <h1 className="template__heading big-heading text-center">
        Tara Style Guide
      </h1>
      <div className="template__styles-container">
        <h3 className="template__styles-container--name ">COLORS</h3>
        <hr className="line-divider" />

        <div className="template__styles-container__colors">
          {ColorsData.map((data) => (
            <div
              style={{ backgroundColor: `${data.color}` }}
              className="template__styles-container__colors--box"
            >
              <div className="template__styles-container__colors--name">
                {data.color}
              </div>
            </div>
          ))}
        </div>
        <h3 className="template__styles-container--name ">TYPOGRAPHY</h3>
        <hr className="line-divider" />
        <div className="template__styles-container--headings">
          <h1>Heading 1 - 4.5rem</h1>
          <h2>Heading 2 - 4.3rem</h2>
          <h3>Heading 3 - 2.5rem</h3>
          <h4>Heading 4 - 2rem</h4>
          <h5>Heading 5 - 1.5rem</h5>
          <h6>HEADING 6 - 1.5rem</h6>
        </div>
        <h3 className="template__styles-container--name ">BUTTONS</h3>
        <hr className="line-divider" />
        <div className="template__styles-container--buttons">
          <button className="template__styles-container--buttons-width btn">
            Primary
          </button>
          <button className="template__styles-container--buttons-width btn-secondary">
            Secondary
          </button>
        </div>
        <h3 className="template__styles-container--name ">RICH TEXT</h3>
        <hr className="line-divider" />
        <div className="template__styles-container-richtext">
          <h2>Sign your contract H2</h2>
          <p className="text">
            The rich text element allows you to create and format headings,
            paragraphs, blockquotes, images, and video all in one place instead
            of having to add and format them individually. Just double-click and
            easily create content.
          </p>
          <h3>Sign your contract H3</h3>
          <p className="text">
            A rich text element can be used with static or dynamic content. For
            static content, just drop it into any page and begin editing. For
            dynamic content, add a rich text field to any collection and then
            connect a rich text element to that field in the settings panel.
            Voila!
          </p>
          <h4>Sign your contract H4</h4>
          <p className="text">
            Headings, paragraphs, blockquotes, figures, images, and figure
            captions can all be styled after a class is added to the rich text
            element using the "When inside of" nested selector system.
          </p>
          <h5>Sign your contract H5</h5>
          <p className="text">
            Headings, paragraphs, blockquotes, figures, images, and figure
            captions can all be styled after a class is added to the rich text
            element using the "When inside of" nested selector system.
          </p>
          <h6>SIGN YOUR CONTRACT H6</h6>
          <p className="text decorated">
            Headings, paragraphs, blockquotes, figures, images, and figure
            captions can all be styled after a class is added to the rich text
            element using the "When inside of" nested selector system.
          </p>
          <ul>
            <li>Aenean leo ligula, porttitor eu.</li>
            <li>Aenean leo ligula, porttitor eu.</li>
            <li>Aenean leo ligula, porttitor eu.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
} 