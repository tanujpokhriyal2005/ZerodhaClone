import React from 'react'

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-6 p-4'>
                    <a href ="" style={{textDecoration:"none"}}>
                        <h3 className='fs-5'>Brokerage Calculator</h3></a>
                        <ul className="text-muted" style={{textAlign:"left", lineHeight:"2.5"}}>
                            <li>Securities/Commodities transaction tax</li>
                            <li>Transaction/Turnover Charges</li>
                            <li>Call & trade</li>
                            <li>Stamp charges</li>
                            <li>NRI brokerage charges</li>
                            <li>Account with debit balance</li>
                            <li>Charges for Investor's Protection Fund Trust (IPFT) by NSE</li>
                            <li>GST</li>
                        </ul>
                </div>
                <div className='col-6 p-4'>
                    <a href='' style={{textDecoration:"none"}}>
                        <h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
    )
}

export default Brokerage
