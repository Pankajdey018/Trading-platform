import React from "react";

function Education() {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col">
          <img src="\media\education.svg" style={{width: "75%"}} />
        </div>
        <div className="col">
          <h1 className="mb-3 fs-2">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the vasics to advanced trading
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Versity &rarr;
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all you market related queries.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A&rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
