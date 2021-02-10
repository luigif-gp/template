import React from 'react';
import { TemplateNavbar } from './templateNavbar';
import { Footer } from '../layouts/footer';


export const Licenses = () => {
    return (
      <div className="template">
        <TemplateNavbar />
        <div className="template__container">
          <h1 className="template__heading big-heading text-center">
            Licenses
          </h1>
          <p className="template__text text">
            All graphical assets in this template are licensed for personal and
            commercial use.
          </p>
          <div className="template__container--2">
            <div className="template__licenses">
              <h3 className="template__licenses--name small-heading">
                Unsplash
              </h3>
              <div>
                <a
                  target="_blank"
                  href="https://unsplash.com/"
                  className="template__licenses--btn btn-secondary"
                >
                  Source
                </a>
                <a
                  href="https://unsplash.com/license"
                  target="_blank"
                  className="template__licenses--btn btn-secondary"
                >
                  Lincense
                </a>
              </div>

              <h3 className="template__licenses--name small-heading">Icons8</h3>
              <div>
                <a
                  href="https://icons8.com/"
                  target="_blank"
                  className="template__licenses--btn btn-secondary"
                >
                  Source
                </a>
                <a
                  href="https://icons8.com/terms-and-conditions"
                  target="_blank"
                  className="template__licenses--btn btn-secondary"
                >
                  Lincense
                </a>
              </div>

              <h3 className="template__licenses--name small-heading">
                illustrations
              </h3>
              <div>
                <a
                  href="https://icons8.com/illustrations"
                  target="_blank"
                  className="template__licenses--btn btn-secondary"
                >
                  Source
                </a>
                <a
                  href="https://icons8.com/terms-and-conditions"
                  target="_blank"
                  className="template__licenses--btn btn-secondary"
                >
                  Lincense
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}