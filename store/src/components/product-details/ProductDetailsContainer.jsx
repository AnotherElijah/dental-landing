import React from 'react';
import {ProductDetails} from "./ProductsDetails";
import products from "../../mock-data/products";

export class ProductDetailsContainer extends React.Component {

    constructor(props) {
        super(props);
        const productId = this.props.match.params.productId;
        this.state = {
            data: products.products.find(item=>item.id===productId)
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <ProductDetails data={this.state.data}/>
        )
    }
}
