import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-4">
      <div className="row mb-5">
        <p style={{ fontSize: "20px" }} className="text-muted text-center mb-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" style={{ textDecoration: "none" }} className="primary">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <div className="">
          <h2 className="text-center fs-4">The Zerodha Universe</h2>
          <p className="text-center ">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      <div className="row text-center mb-5 mt-5">
        <div className="col">
          <div className="mb-4">
            <img src="\media\zerodhaFundhouse.png" style={{ width: "40%" }} />
          </div>
          <div>
            <p className="fs-9 text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="mb-4">
            <img src="\media\sensibull-logo.svg" style={{ width: "45%" }} />
          </div>
          <div>
            <p className="fs-9 text-muted">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="mb-4">
            <img src="\media\tijori.svg" style={{ width: "35%" }} />
          </div>
          <div>
            <p className="fs-9 text-muted">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <div className="mb-4">
            <img src="\media\streak-logo.png" style={{ width: "40%" }} />
          </div>
          <div>
            <p className="fs-9 text-muted">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="mb-4">
            <img src="\media\smallcaseLogo.png" style={{ width: "45%" }} />
          </div>
          <div>
            <p className="fs-9 text-muted">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="mb-4">
            <img src="\media\dittoLogo.png" style={{ width: "30%" }} />
          </div>
          <div>
            <p className="fs-9 text-muted">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 mb-5">
        <button className="btn btn-primary p-3 fs-6">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
