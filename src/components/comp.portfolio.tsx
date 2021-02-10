import React,{useState} from 'react';
import {Data} from '../datas/data.Portfolio';
import { useHistory } from 'react-router-dom';

interface Props {
  active?: boolean
  match?: Number;

}


export const Portfolio = (props: Props) => {

  const [dataSelect, setDataSelect] = useState('all');

   var limit: Number;

   !props.match ? (limit = 5) : (limit = props.match);

   
     let history = useHistory();

     const Navegation = (LINK: string) => {
       history.push(LINK);
       window.location.reload();
     };

    

    return (
      <div className="portfolio">
        {props.match ? null : (
          <div className="portfolio__buttons">
            <a
              onClick={() => setDataSelect("all")}
              className={
                dataSelect !== "all"
                  ? "portfolio__buttons--display"
                  : "portfolio__buttons--display btn-active"
              }
            >
              All Works
            </a>
            <a
              onClick={() => setDataSelect("mobile")}
              className={
                dataSelect !== "mobile"
                  ? "portfolio__buttons--display"
                  : "portfolio__buttons--display btn-active"
              }
            >
              Mobile App
            </a>
            <a
              onClick={() => setDataSelect("web-desing")}
              className={
                dataSelect !== "web-desing"
                  ? "portfolio__buttons--display"
                  : "portfolio__buttons--display btn-active"
              }
            >
              Web Design
            </a>
            <a
              onClick={() => setDataSelect("illustrations")}
              className={
                dataSelect !== "illustrations"
                  ? "portfolio__buttons--display"
                  : "portfolio__buttons--display btn-active"
              }
            >
              Illustration
            </a>
          </div>
        )}
        <div className="portfolio__list">
          {Data.map((data) =>
            dataSelect !== data.select &&
            dataSelect !== "all" ? null : data.id === limit &&
              props?.active !== true ? null : (
              <div className="portfolio__list--box">
                <a
                  onClick={() => Navegation(`/work/${data.id}`)}
                  className="portfolio__list--imgbox"
                >
                  <img
                    className="portfolio__list--img"
                    src={data.img}
                    alt="image-1"
                  />

                  <label
                    className={`portfolio__list--label ${data.background}`}
                  >
                    {data.type}
                  </label>
                </a>
                <div className="portfolio__list--box-text">
                  <h2 className="portfolio__list--box-text-title">
                    {data.title}
                  </h2>
                  <p className="portfolio__list--box-text-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vulputate pellentesque orci et rutrum.
                  </p>
                  <a
                    onClick={() => Navegation(`/work/${data.id}`)}
                    className="portfolio__list--box-text-case text-border-move"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            )
          )}
        </div>
        {props?.active ? null : (
          <button onClick={() => Navegation("/portfolio")} className="portfolio__viewall-btn">View All Works</button>
        )}
      </div>
    );
}


