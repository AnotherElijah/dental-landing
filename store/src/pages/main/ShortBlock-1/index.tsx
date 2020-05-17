import React from 'react';

function ShortBlock1() {
    return (
        <section className="narrow-section p-2 m-0 row align-content-center">
            <div className="row w-100 m-0 text-center">
                <a className="pt-2 pb-2 col-12 col-md-4">
                    Original new solutions
                    <i className="fas fa-glasses d-block text-danger pt-2"></i></a>
                <a className="pt-2 pb-2 col-12 col-md-4">Best electric brush in ReviewFinder
                    <span className="d-block">
                    <i aria-hidden="true" className="fas fa-star text-secondary text-danger pt-2"></i>
                    <i aria-hidden="true" className="fas fa-star text-secondary text-danger pt-2"></i>
                    <i aria-hidden="true" className="fas fa-star text-secondary text-danger pt-2"></i>
                    <i aria-hidden="true" className="fas fa-star text-secondary text-danger pt-2"></i>
                    <i aria-hidden="true" className="fas fa-star text-secondary text-danger pt-2"></i>
                </span>
                </a>
                <a className="pt-2 pb-2 col-12 col-md-4">
                    Top 3 in StoreTop
                    <i aria-hidden="true" className="fas fa-trophy d-block text-danger pt-2"></i></a>
            </div>
        </section>
    );
}

export default ShortBlock1;