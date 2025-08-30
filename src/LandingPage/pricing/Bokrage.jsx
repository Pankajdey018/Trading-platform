function Bokrage() {
    return <div className="container border-top p-5">
        <div className="row mt-5 ">
            <div className="col-8">
                <h2 className="mb-4 fs-3" ><a href="#" style={{textDecoration:"none"}} className="primary">Brokerage calculator</a></h2>
                <ul style={{lineHeight:"30px"}}>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged 220 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or 2100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
                </ul>
            </div>
            <div className="col-1"></div>
            <div className="col-3">
                <h2 className="fs-3"><a href="#" style={{textDecoration:"none"}} className="primary">List of charges</a></h2>
            </div>
        </div>
    </div>
}

export default Bokrage;