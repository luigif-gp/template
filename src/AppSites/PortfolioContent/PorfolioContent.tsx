import React from "react";

///LAYOUTS
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/Navbar";

///COMPONENTS
import { Portfolio } from '../../components/comp.portfolio';
import { ContentPortf } from './contentPortf';

//DATA PORTFOLIO
import { Data } from "../../datas/data.Portfolio";

interface Props {
  match: any;
}


export const PortfolioContent = (props: Props) => {

    const match = props.match.params.id;
    const param = parseFloat(match);

    return (
      <div className="portfolio-content">
        <Navbar />
        {Data.map((data) =>
          data.id !== param ? null : (
            <div className="portfolio_C">
              <label className={`portfolio_C--label ${data.background}`}>
                {data.type}
              </label>
              <h1 className="portfolio_C--title">{data.title}</h1>
              <p className="portfolio_C--text">{data.content}</p>
              
                <img className="portfolio_C--img" src={data.bigimg} alt="" />
              <div className="portfolio_C__graph">
                <div>
                  <h3 className="portfolio_C__graph--name">Client</h3>
                  <p className="portfolio_C__graph--description">
                    {data.client}
                  </p>
                </div>
                <div>
                  <h3 className="portfolio_C__graph--name">Date</h3>
                  <p className="portfolio_C__graph--description">{data.date}</p>
                </div>
                <div>
                  <h3 className="portfolio_C__graph--name">Website</h3>
                  <a
                    href={data.website}
                    className="portfolio_C__graph--description link"
                  >
                    Live Link
                  </a>
                </div>
              </div>
            </div>
          )
        )}
        <ContentPortf />
        <div className="margin">
          <h1 className="big-heading text-center">My other works</h1>
          <Portfolio match={param} />
        </div>
        <Footer />
      </div>
    );
}