import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-5 p-5">
          <img src={imageUrl} style={{width:"120%"}}/>
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5">
          <h1 className="mb-4 mt-5 fs-2">{productName}</h1>
          <p className="text-muted fs-8">{productDescription}</p>
          <div className="mb-4">
            <a
              href={tryDemo}
              className="primary"
              style={{ textDecoration: "none" }}
            >
              Try demo &rarr;
            </a>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; ; &nbsp; &nbsp;
            <a
              href={learnMore}
              className="primary"
              style={{ textDecoration: "none" }}
            >
              learnMore &rarr;
            </a>
          </div>
          <a>
            <img src="\media\googlePlayBadge.svg" />
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a>
            <img src="\media\appstoreBadge.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
