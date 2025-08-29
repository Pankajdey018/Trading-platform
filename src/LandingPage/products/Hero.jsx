import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="text-center p-5 mt-4">
        <h1 className="fs-3 mb-3">Zerodha Products</h1>
        <p className="fs-5 text-muted">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a className="primary" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
