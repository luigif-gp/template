import React from 'react';
import { useHistory } from 'react-router-dom';


export const AboutMe = () => {

  
   let history = useHistory();

   const Navegation = (LINK: string) => {
     history.push(LINK);
     window.location.reload();
   };

    return (
      <div className="about">
        <div className="about__container">
          
          <p className="about__container--about_text">ABOUT ME</p>
          <h1 className="about__container--big_text-2 ">A bit about me</h1>
          <p className="about__container--paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit., Praesent
            ut lacus ornare, maximus purus non, pretium enim. Curabitur dapibus
            posuere mollis. Praesent sodales in risus in suscipit. Nam vel massa
            ornare, pulvinar velit in, tincidunt lectus. Praesent imperdiet elit
            nisl, quis congue ante sodales eu. Vivamus tincidunt sed odio ut
            pellentesque.
          </p>
          <p className="about__container--paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec diam eu sem interdum molestie. In id dolor at lacus
            accumsan posuere nec ut nulla. Donec eleifend, sem ut placerat
            vestibulum, nisl felis vehicula felis, et iaculis nisl diam non
            arcu.
          </p>
          <a onClick={() => Navegation("/about")} className="about__container--read-more text-border-move">Read More</a>
          <img src="/me.jpg" className="about__container--img"></img>
        </div>
      </div>
    );
}