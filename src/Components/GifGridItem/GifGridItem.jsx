import React from "react";

export const GifGridItem = ({ img }) => {
  return (
    <>
      <div className="row">
        <div className="col mx-2 my-3 d-flex justify-content-center">
          <div class="card animate__animated animate__fadeInDownBig">
            <img src={img.url} class="card-img-top" alt={img.title} height="150" width="200" />
            <div class="card-body">
              <h5 class="card-title">{img.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
