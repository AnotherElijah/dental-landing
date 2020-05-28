import React from 'react';
import Product from "./product";
import products from '../../mock-data/products.json';

export class ShopMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: products.products
        };
    }

    componentWillMount() {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <section className="section-content padding-y bg">
                    <div className="container">
                        <div className="row">
                            {this.state.data.map(item => (
                                <div className="col-md-3">
                                    <Product data={item} picture={item.picture}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
