import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function Awards() {
    return (
        <div className="container py-5">
            {/* Heading Section */}
            <div className="row ">
                <div className="col-6">
                    <h2 className="fw-bold">Unbeatable pricing</h2>
                    <p className="text-muted">
                        We pioneered the concept of discount broking and price <br /> transparency
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-primary text-decoration-none">
                        See pricing →
                    </a>
                </div>

                    {/* Card 1 */}
                    <div className="col">
                        <img src='media/images/pricing-eq.svg' style={{ width: "30%" }} />
                        <p className="text-muted">Free account opening</p>
                    </div>

                    {/* Card 2 */}
                    <div className="col">
                        <img src='media/images/pricing-eq.svg' style={{ width: "30%" }} />
                        <p className="text-muted">Free equity delivery and direct mutual funds</p>
                    </div>

                    {/* Card 3 */}
                    <div className="col">
                        <img src='media/images/other-trades.svg' style={{ width: "30%" }} />
                        <p className="text-muted">Intraday and F&O</p>
                    </div>
                </div>


        </div>
    )
}

export default Awards
