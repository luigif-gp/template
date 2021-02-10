import React, {useState} from 'react';
import { Icons } from '../components/comp.icons';
import { Navbar } from '../layouts/Navbar';
import { IoPlayCircle } from "react-icons/io5";
import { ModalVideo } from './modalVideo/ModalVideo';
import { Blog } from '../components/comp.myBlog';
import { Footer } from '../layouts/footer';

export const PageAbout = () => {

     const [modalIsOpen, setIsOpen] = useState(false);

    function ActiveModal() {
       setIsOpen(true);
     }
     function closeModal() {
       setIsOpen(false);
     }

    return (
      <div className="page-about">
        <Navbar />
        <div className="page-about__header">
          <div className="page-about__content-area">
            <h1 className="page-about__content-area--title">A bit about me</h1>
            <p className="page-about__content-area--text-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit., Praesent
              ut lacus ornare, maximus purus non, pretium enim. Curabitur
              dapibus posuere mollis. Praesent sodales in risus in suscipit. Nam
              vel massa ornare, pulvinar velit in, tincidunt lectus. Praesent
              imperdiet elit nisl, quis congue ante sodales eu. Vivamus
              tincidunt sed odio ut pellentesque.
            </p>
            <p className="page-about__content-area--text-2">
              Aenean eu bibendum lectus, a faucibus ex. Curabitur fermentum ut
              mauris nec sagittis. Nam imperdiet consequat risus vitae
              pellentesque. Aliquam erat volutpat. Aenean elementum sit amet
              purus vehicula vulputate. Vivamus ipsum lorem, malesuada eu nisi
              gravida, sollicitudin aliquet mi. Vivamus elementum risus nibh, eu
              imperdiet augue pharetra nec. Pellentesque vel odio augue.
            </p>
            <button className="page-about__content-area--btn btn">
              Book Free Call
            </button>
          </div>
          <div className="page-about__pictures">
            <img
              src="/about/image-1.png"
              className="page-about__pictures--img-1"
            />
            <img
              src="/about/image-2.png"
              className="page-about__pictures--img-1 img-about-2"
            />
            <img
              src="/about/image-3.jpg"
              className="page-about__pictures--img-1 img-about-3"
            />
          </div>
        </div>

        <Icons />

        <div className="page-about__workflow">
          <h1 className="page-about__workflow--title">My workflow</h1>
          <div
            onClick={() => ActiveModal()}
            className="page-about__workflow--video"
          >
            <img
              src="/desktop.png"
              className="page-about__workflow--video-img"
            />
            <IoPlayCircle className="page-about__workflow--video-playlogo" />
          </div>
          <div className="page-about__workflow--content">
            <h1 className="page-about__workflow--content-title">
              What’s a Rich Text element?
            </h1>
            <p className="page-about__workflow--content-text">
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content.
            </p>
            <h3 className="page-about__workflow--content-title-2">
              Static and dynamic content editing
            </h3>
            <p className="page-about__workflow--content-text">
              A rich text element can be used with static or dynamic content.
              For static content, just drop it into any page and begin editing.
              For dynamic content, add a rich text field to any collection and
              then connect a rich text element to that field in the settings
              panel. Voila!
            </p>
            <h3 className="page-about__workflow--content-title-2">
              How to customize formatting for each rich text
            </h3>
            <p className="page-about__workflow--content-text">
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a class is added to the rich text
              element using the "When inside of" nested selector system.
            </p>
            <h3 className="page-about__workflow--content-title-2">
              How to customize formatting for each rich text
            </h3>
            <p className="page-about__workflow--content-text--especial">
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a class is added to the rich text
              element using the "When inside of" nested selector system.
            </p>
          </div>
        </div>
        <ModalVideo active={modalIsOpen} close={closeModal} />
        <div className="line-hr">
          <hr className="divider-line" />
        </div>
        <Blog />
        <Footer />
      </div>
    );
}