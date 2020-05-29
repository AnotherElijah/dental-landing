import React from 'react';
import {addProduct, removeProduct} from "../../../store/actions/products";
import {connect} from "react-redux";
import {useRouteMatch} from "react-router";
import Link from "react-router-dom/es/Link";

export function Product(props) {

    function addProduct(name) {
        props.addProduct('Test product');
    }

    //exctract data from ref
    let {url} = useRouteMatch();

    return (
        <figure className="card card-product-grid">
            <div className="img-wrap" >
                <Link to={`${url}/product/${props.data.id}`}>
                    <img src={props.picture}/>
                </Link>
            </div>
            <figcaption className="info-wrap border-top">
                <Link to={`${url}product/${props.data.id}`}>
                    <p className="title">{props.data.name}</p>
                </Link>
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
