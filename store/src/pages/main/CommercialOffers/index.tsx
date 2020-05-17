import React from 'react';

function CommercialOffers() {
    return (
        <div className="mission p-5 d-none d-md-flex flex-column align-items-center justify-content-center commercial">
            <h2 className="text-center pt-3 pb-5">Commercial offers</h2>
            <div className="row m-0">
                <div className="col-4">
                    <a>Original new solutions</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorem hic magni quis
                        quod suscipit, veritatis. Dignissimos, mollitia quod! Atque dolor eius numquam quasi quidem
                        repellendus temporibus! Facilis, iusto.</p>
                </div>
                <div className="col-4">
                    <a>We are open for offers</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorem hic magni quis
                        quod suscipit, veritatis. Dignissimos, mollitia quod! Atque dolor eius numquam quasi quidem
                        repellendus temporibus! Facilis, iusto.</p>
                </div>
                <div className="col-4">
                    <a>Shipping bonuses</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa dolorem hic magni quis
                        quod suscipit, veritatis. Dignissimos, mollitia quod! Atque dolor eius numquam quasi quidem
                        repellendus temporibus! Facilis, iusto.</p>
                </div>
            </div>
            <a className="btn rounded-pill btn-outline-primary text-white bg-primary pt-2 pb-2 pl-3 pr-3"
               href="#contact-form">Get
                your offer</a>
        </div>
    );
}

export default CommercialOffers;