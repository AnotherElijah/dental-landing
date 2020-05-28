import React from 'react';
import {addProduct, removeProduct} from "../../../store/actions/products";
import {connect} from "react-redux";

export function Product(props) {

    const data = {
        id: "1",
        name: "Bell & Ross Nightlum",
        price: "$299.00",
        picture: require("../../../"+"mock-data/images/1.jpg")
    };

    function addProduct(name) {
        props.addProduct('Test product');
    }

    //exctract data from ref

    return (
        <figure className="card card-product-grid">
            <div className="img-wrap">
                <img src={props.picture}/>
            </div>
            <figcaption className="info-wrap border-top">
                <a href="#" className="title">{props.data.name}</a>
                <div className="price mt-2">
                    {props.data.price}
                    <a onClick={addProduct} className="btn btn-sm btn-outline-primary float-right">
                        Add to cart <i className="fa fa-shopping-cart"></i>
                    </a>
                </div>
            </figcaption>
        </figure>
    )
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: (name) => dispatch(addProduct(name)),
        removeChair: (name) => dispatch(removeProduct(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
