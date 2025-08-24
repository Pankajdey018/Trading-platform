import React from "react";

function OpenAcconts() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h2 className="mt-5">Open a Zerodha account</h2>
        <p className="fs-5 mt-2 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="fs-5 p-2 btn btn-primary mt-3"
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default OpenAcconts;
