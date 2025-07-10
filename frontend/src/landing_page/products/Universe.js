import React from 'react'

function Universe() {
    return (
       <div className='container text-muted  mt-5'>
        <div className='row text-center'>
            <h6>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h6>
        <h2>The Zerodha Universe</h2>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className='col-4 p-3'>
            <img src='media/images/zerodhafundhouse.png'/>
        </div>
        <div className='col-4 p-3'>
            <img src='media/images/sensibull-logo.svg'/>
        </div>
        <div className='col-4 p-3'>
            <img src='media/images/tijori.svg'/>
        </div>
        <div className='col-4 p-3'>
            <img src='media/images/streak-logo.png'/>
        </div>
        <div className='col-4 p-3'>
            <img src='media/images/smallcase-logo.png'/>
        </div>
        <div className='col-4 p-3'>
            <img src='media/images/ditto-logo.png'/>
        </div>
        </div>
       </div>
    )
}

export default Universe
