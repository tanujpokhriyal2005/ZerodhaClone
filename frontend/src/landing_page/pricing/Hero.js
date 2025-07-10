import React from 'react'

function Hero() {
    return (
        <div className=' container text-center mt-5 mb-5 py-5'>
            <h1 >Charges</h1>
            <p className='text-muted fs-4'>List of all charges and taxes</p>
            <div className='row mt-5 mb-5'>
                <div className='col-4 mt-5'>
                    <img src="media/images/pricing-eq.svg" style={{width:"55%"}}/>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="media/images/other-trades.svg" style={{width:"55%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="media/images/pricing-eq.svg" style={{width:"55%"}}/>
                    <h3>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
