import React from 'react';

///LAYOUTS
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/Navbar";

////COMPONENTS

import { DTblog } from '../../datas/data.blog';
import { Blog } from "../../components/comp.myBlog";

///CONTENTS
import { Content1 } from './ContentArticles/Content-1';
import { Content2 } from './ContentArticles/Content-2';
import { Content3 } from './ContentArticles/Content-3';
import { Content4 } from './ContentArticles/Content-4';

interface Props {
  match: any;
}


export const Articles = (props: Props) => {

  const activeContent = true;

  const match = props.match.params.id;
   const param = parseFloat(match);

    return (
      <div className="articles">
        <Navbar />
        <div className="articles__container">
          {!match
            ? null
            : DTblog.map((data) =>
                data.id !== param ? null : (
                  <div
                    style={{ backgroundImage: `url(${data.bgimg})` }}
                    className="articles__container--img"
                  >
                    <div className="articles__container-label">
                      <small className="articles__container-label--type">
                        {data.type}
                      </small>
                      <h1 className="articles__container-label--text">
                        {data.title}
                      </h1>
                    </div>
                  </div>
                )
              )}
        </div>
        <Content1 match={param} />
        <Content2 match={param} />
        <Content3 match={param} />
        <Content4 match={param} />
        <div className="articles__else">
          <Blog articleActive={activeContent} match={param} />
          <Footer />
        </div>
      </div>
    );
}