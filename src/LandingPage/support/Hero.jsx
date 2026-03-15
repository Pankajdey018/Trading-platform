function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 p-5">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" className="mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Account Opening
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>Resident individual</li>
                    <li>Minor</li>
                    <li>Non Resident Indian (NRI)</li>
                    <li>Company, Partnership, HUF and LLP</li>
                    <li>Glossary</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item" className="mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Your Zerodha Account
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>Your Profile</li>
                    <li>Account modification</li>
                    <li>
                      Client Master Report (CMR) and Depository Participant (DP)
                    </li>
                    <li>Nomination</li>
                    <li>Transfer and conversion of securities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item" className="mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Kite
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>IPO</li>
                    <li>Trading FAQs</li>
                    <li>Margin Trading Facility (MTF) and Margins</li>
                    <li>Charts and orders</li>
                    <li>Alerts and Nudges</li>
                    <li>General</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item" className="mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Funds
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>Add money</li>
                    <li>Withdraw money</li>
                    <li>Add bank accounts</li>
                    <li>eMandates</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item" className="mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Console
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>Portfolio</li>
                    <li>Corporate actions</li>
                    <li>Funds statement</li>
                    <li>Reports</li>
                    <li>Profile</li>
                    <li>Segments</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item" className="mb-4 border">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Coin
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <ul>
                    <li>Mutual funds</li>
                    <li>National Pension Scheme (NPS)</li>
                    <li>Fixed Deposit (FD)</li>
                    <li>Features on Coin</li>
                    <li>Payments and Orders</li>
                    <li>General</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 p-5">
          <div class="list-group border-start border-warning ps-3">
            <a href="#" class="list-group-item list-group-item-action">
              F&O contract expiry day changes
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              Adjustment of F&O contracts of PATANJALI on account of bonus
            </a>
          </div>
          <div className="p-2 mt-3">
            <div className="row border p-3 fs-5 bg-body-tertiary">
                Quick Links
            </div>
            <div className="row border p-2">
                1. Track accout opening
            </div>
            <div className="row border p-2">2. Track Segment Activation</div>
            <div className="row border p-2">3. Intraday Margins</div>
            <div className="row border p-2">4. Kite user manual</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
