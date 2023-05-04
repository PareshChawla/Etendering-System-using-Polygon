import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className="col-md-12 bid-product">

                <div className="img">
                    <img src="	https://techbid.vercel.app/img/auction/a1.png" alt="" />
                </div>

                <div className="product-content">
                    <div className="card1-title">
                        <h3
                        >Headphone Bluetooth 5.0 Earphone
                        </h3>
                    </div>

                    <div className="card1-content d-flex">
                        <div className="price">
                            <h2>Price:</h2>
                            <p>1000 ETH.</p>
                            <p>{props.id}</p>
                        </div>

                        <div className="auction-id">
                            <h2>Auction ID:</h2>
                            <p>BB54112</p>
                        </div>

                    </div>

                    <div className="card1-bottom">
                        <p style={{ color: "#fff", fontSize: "20px" }}>Ends In : <span style={{ color: "red", fontSize: "18px" }}>19:20:30</span></p>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Card