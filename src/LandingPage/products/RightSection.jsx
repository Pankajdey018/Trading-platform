import React from "react";

function RightSection({ imgUrl, productTitle, productDescription }) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 p-5 mt-5">
          <h1 className="mt-5 mb-4 fs-3">{productTitle}</h1>
          <p className="text-muted fs-8">{productDescription}</p>
          <a className="primary" style={{ textDecoration: "none" }}>
            Learn more &rarr;
          </a>
        </div>

        <div className="col-6">
          {" "}
          <img src={imgUrl} style={{ width: "100%" }} />{" "}
        </div>
      </div>
    </div>
  );
}

export default RightSection;
