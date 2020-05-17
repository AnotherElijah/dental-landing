import React from 'react';

function CallToActionTop() {
    return (
        <section className="m-0 pl-2 pr-2 pb-1 pt-1 m-sm-5 bg-light title-block">
            <div className="d-flex flex-row header align-items-center justify-content-between w-100 p-5 m-0">
                <div className="pl-5 ml-5 title-block-txt-wrapper">
                    <h1 className="text-white">Simple. Accessible. <br/> Enjoyable.</h1>
                    <p className="text-white">Everything you need to support healthy oral care habits for life.</p>
                    <button
                        className="btn rounded-pill btn-outline-primary text-white bg-primary pt-3 pb-3 pl-5 pr-5">Store
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CallToActionTop;
