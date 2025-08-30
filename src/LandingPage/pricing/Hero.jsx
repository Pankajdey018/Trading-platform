import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mb-5 mt-4 p-5">
        <h1 className="fs-3">Charges</h1>
        <p className="text-muted fs-5">List of all charges and taxes</p>
      </div>
      <div className="row text-center mt-5">
        <div className="col">
          <img src="\media\pricing0.svg" style={{width:"60%"}}/>
          <div>
            <h1 className="fs-4 mb-4">Free equity delivery</h1>
            <p className="fs-7 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
        </div>
        <div className="col">
          <img src="\media\intradayTrades.svg" style={{width:"60%"}} />
          <div>
            <h1 className="fs-4 mb-4">Intraday and F&O trades</h1>
            <p className="fs-7 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
        </div>
        <div className="col">
          <img src="\media\pricing0.svg" style={{width:"60%"}} />
          <div>
            <h1 className="fs-4 mb-4">Free direct MF</h1>
            <p className="fs-7 text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
