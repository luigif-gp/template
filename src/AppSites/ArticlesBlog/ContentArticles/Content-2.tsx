import React from "react";

interface Props {
  match?: Number;
}

export const Content2 = (props: Props) => {
  return (
    <>
      {props.match !== 2 ? null : (
        <div className="content">
          <h1 className="big-heading">
            Doloremque sapiente quae modi qui magnam itaque adipisci.
          </h1>
          <p className="text">
            Explicabo quo doloribus rerum rerum perspiciatis culpa et. Et animi
            et optio numquam. Qui optio enim dolores mollitia nihil consequatur
            quo dolorem corrupti. Explicabo temporibus ut.
          </p>
          <h2 className="small-heading">
            Iste doloremque corporis rem cupiditate quas similique labore.
          </h2>
          <p className="text decorated">
            Eum laboriosam eligendi nobis enim eveniet nobis. Tempora est ex in
            iusto beatae. Voluptatem numquam nihil non cumque amet temporibus.
          </p>
          <p className="text">
            Itaque qui aspernatur eum neque est sapiente. Non excepturi tempora
            autem veritatis vel laudantium eveniet. Ad consequatur et rerum aut
            illum maiores adipisci rerum. Est impedit ad nihil. Omnis enim
            libero iusto voluptas id neque amet voluptatem. Eveniet impedit et.
          </p>
          <p className="text ">
            Molestiae dolorem esse voluptate corrupti iure molestiae. Earum sed
            consequatur quas sit consequatur pariatur qui error quas. Illum quam
            et. Sed et iste quae distinctio nihil officiis suscipit iusto id.
          </p>
          <h1 className="big-heading">Sapiente fugiat aperiam qui.</h1>
          <p className="text">
            At tempora voluptatibus in voluptatem quibusdam. Et ex rem voluptas
            id sunt sequi quas accusamus. Magni voluptas pariatur nihil
            provident quis omnis. Corporis et quo fugiat quod.
          </p>
          <h2 className="small-heading">
            Veniam dicta dolorum sequi quis sit laudantium aut et est.
          </h2>

          <p className="text decorated">
            Nostrum ex dolor sed repellat id veritatis voluptate. Nemo eaque
            sint accusamus omnis. Nostrum natus accusamus nihil iusto sapiente
            qui ut. Eum non consequatur quidem cumque magnam culpa dignissimos
            iusto. Perspiciatis aut similique magnam iste velit accusantium.
          </p>
          <p className="text">
            Quos fugit quam est voluptate autem qui qui. Labore impedit officia
            aliquid vitae dolor beatae eveniet ut. Dolorum dicta voluptatem. Vel
            quae autem voluptas sint deleniti. Est placeat atque qui optio
            dolores laudantium sit facere.
          </p>
          <p className="text">
            Voluptas velit ea omnis dolore eos repellat voluptas omnis. Nostrum
            consequatur unde fuga alias ratione et. Laborum et expedita quis
            provident est sequi at ullam quasi. Dolorum est esse minima qui
            quisquam. Qui earum omnis nemo facere est aliquid ipsum.
          </p>
        </div>
      )}
    </>
  );
};
