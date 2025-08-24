import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="\media\homeHero.png" alt="Hero image" className="mb-5" />
        <h2 className="mt-5">Invest in everything</h2>
        <p className="fs-5 mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="fs-5 p-2 btn btn-primary mt-3"
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
