import React from 'react';

function Offers() {
    return (
        <div
            className="bonuses p-5 d-lg-none d-md-flex flex-column align-items-center justify-content-center commercial bg-danger">
            <h2 className="text-center pt-3 pb-5 text-white">Offers</h2>
            <div className="row m-0">
                <div className="col-4">
                    <h5 className="text-white text-center">Free shipping</h5>
                    <p className="text-white text-center">Lorem ipsum dolor</p>
                </div>
                <div className="col-4">
                    <h5 className="text-white text-center">100 refund</h5>
                    <p className="text-white text-center">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="col-4">
                    <h5 className="text-white text-center">Discounts</h5>
                    <p className="text-white text-center">Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    );
}

export default Offers;