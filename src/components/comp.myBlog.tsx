import React from 'react';
import { DTblog } from '../datas/data.blog';
import { useHistory } from "react-router-dom";

interface Props{
  active?: boolean;
  articleActive?: boolean;
  match?: Number;
}


export const Blog = (props: Props) => {

    var limit: Number;

    !props.match ? limit = 2 : limit = props.match
    

     let history = useHistory();

   const Navegation = (LINK: string) => {
     
     history.push(LINK);
      window.location.reload();
    
   }

   

    return (
      <div>
        {!props?.active && !props?.articleActive ? (
          <div className="intro__sections">
            <p className="intro__sections--about_text">MY BLOG</p>
            <h1 className="intro__sections--big_text-2  sl-width">
              My personal blog about art and work
            </h1>
          </div>
        ) : !props?.articleActive ? null : (
          <h1 className="big-heading text-center">Recent Articles</h1>
        )}
        <div className="blog_container">
          {DTblog.map((data) =>
            data.id === limit && !props?.active ? null : (
              <div className="blog__box">
                <a
                  onClick={() => Navegation(`/post/${data.id}`)}
                  className="blog__box--img"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="blog__box--img-pictures"
                  />
                </a>
                <small className="blog__box--type">{data.type}</small>
                <h3 className="blog__box--title">{data.title}</h3>
                <p className="blog__box--date">{data.date}</p>
                <a
                  onClick={() => Navegation(`/post/${data.id}`)}
                  className="blog__box--read-more text-border-move"
                >
                  Read More
                </a>
              </div>
            )
          )}
        </div>
      </div>
    );
}