import React from "react";

interface Props {
  match?: Number;
}

export const Content3 = (props: Props) => {
  return (
    <>
      {props.match !== 3 ? null : (
        <div className="content">
          <h1 className="big-heading">
            Aut est quis voluptatem asperiores corrupti rerum aliquam ut
            blanditiis.
          </h1>
          <p className="text">
            Vitae est aliquam et sunt voluptatem sed cupiditate. Accusamus
            eligendi odio quibusdam architecto assumenda. Et at voluptatum
            deleniti occaecati sed alias est accusamus dolorem. Repellat aut
            vitae nostrum. Eum nam possimus.
          </p>
          <h2 className="small-heading">
            Voluptas voluptatem est explicabo voluptas provident.
          </h2>
          <p className="text decorated">
            Debitis iste consequatur debitis rerum tempora. Enim ipsa omnis
            rerum animi ipsum nostrum. Exercitationem nisi architecto
            perferendis voluptatem qui. Placeat voluptatum et optio veniam.
          </p>
          <p className="text">
            Eveniet maiores voluptatibus officiis aut quidem illum recusandae
            sed est. Facilis delectus voluptatibus. Quam quia ut sunt quo quis
            est porro non. Magni dolore rerum dolores labore delectus in cumque.
            Quia aperiam aliquam quia ullam voluptatem porro facere maiores. Hic
            officia repudiandae incidunt nihil facere reprehenderit aliquid
            consectetur.
          </p>
          <p className="text">
            Ipsum dicta accusantium velit. Eveniet quia vero et est ipsa maxime
            qui dignissimos neque. Dolor et magni doloribus repellat aut aliquam
            consequatur soluta. Eum veniam modi. Corporis sapiente corporis at
            consequatur nesciunt.
          </p>
        </div>
      )}
    </>
  );
  
};
