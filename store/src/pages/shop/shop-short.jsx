import React from 'react';
import Product from "./product";
import products from '../../mock-data/products.json';

export class ShopShort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: products.products
        };
    }

    render() {
        return (

            <>
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="row">

                            {this.state.data.map((item, i) => {
                                    if (i < this.props.max) return <div className="col-md-3">
                                        <Product data={item} picture={item.picture}/>
                                    </div>
                                }
                            )}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
