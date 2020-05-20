import React from 'react';
import {addProduct, removeProduct} from "../../../store/actions/products";
import {connect} from "react-redux";

export function Product(props){

    function addProduct(name){
        props.addProduct('Test product');
    }
    //exctract data from ref
    return (
        <figure className="card card-product-grid">
            <div className="img-wrap">
                <img src={require('../../images/items/5.jpg')}/>
            </div>
            <figcaption className="info-wrap border-top">
                <a href="#" className="title">Bell & Ross Nightlum</a>
                                <div className="price mt-2">$299.00 <a onClick={addProduct} className="btn btn-sm btn-outline-primary float-right">Add to
                                    cart <i className="fa fa-shopping-cart"></i>
                                </a></div>
            </figcaption>
        </figure>
    )
}

function mapStateToProps(state){
    console.log('state', state)
    return {
        ...state
    }
}
function mapDispatchToProps(dispatch){
    return {
        addProduct: (name) => dispatch(addProduct(name)),
        removeChair: (name) => dispatch(removeProduct(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
