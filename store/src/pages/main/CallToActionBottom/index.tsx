import React from 'react';

function CallToActionBottom() {
    return (
        <section className="buy-wrapper pt-2 pb-2">
            <section
                className="buy m-0 p-2 m-sm-5 bg-light d-flex flex-column align-items-start justify-content-center">
                <div className="w-50 pl-5 ml-5">
                    <h2 className="text-white text-left pl-5">Order now.<b>Get in 2 days!</b></h2>
                    <p className="text-white text-left w-75 pl-5">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        Assumenda cum,
                        distinctio ducimus ea.</p>
                    <button
                        className="btn rounded-pill btn-outline-primary text-white bg-primary ml-5 pt-3 pb-3 pl-5 pr-5">Buy
                        Now
                    </button>
                </div>
            </section>
        </section>
    );
}

export default CallToActionBottom;
