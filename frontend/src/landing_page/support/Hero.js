import React from 'react'

function Hero() {
    return (
        <div className='container-fluid' id='supportHero'>
            <div className='p-5 mt-5 mb-5' id='supportWrapper'>
                <h3> Support Portal</h3>
                <a href='' style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className='row p-5 mx-5 '>
                <div className='col-7 '>
                    <h5>Search for an answer or browse help topics to create a ticket</h5>
                    <input placeholder='Eg: how do i activate F&O,why my order getting rejected...'></input><br/>
                   <p> <a href='' style={{color:"white"}}>Track account opening</a></p>
                   <p> <a href='' style={{color:"white"}}> Track segment activation</a></p>
                   <p> <a href='' style={{color:"white"}}> Intraday margins</a></p>
                   <p> <a href='' style={{color:"white"}}>Kite user manual</a></p>
                </div>
                <div className='col-1'></div>
                <div className='col-4'>
                    <h5>Featured</h5>
                    <ol>
                      <a href='' style={{color:"white"}}>  <li>Quarterly Settlement of Funds - July 2025</li></a>
                        <a href='' style={{color:"white"}}> <li>Exclusion of F&O contracts on 8 securities from August 29, 2025</li></a>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Hero
