import React from 'react';
import {addProduct, removeProduct} from "../../../store/actions/products";
import {connect} from "react-redux";
import {useRouteMatch} from "react-router";
import Link from "react-router-dom/es/Link";
import {RateStars} from "../../../components/rate-stars/RateStars";

export function Product(props) {

    function addProduct(data) {
        console.log(props)
        props.addProduct(data);
    }

    //exctract data from ref
    let {url} = useRouteMatch();

    return (
        <figure className="card card-product-grid">
            <div className="img-wrap">
                <Link to={`${url}/product/${props.data.id}`} className='h-100 d-flex flex-column justify-content-center'>
                    <img className="h-auto" src={props.picture}/>
                </Link>
            </div>
            <figcaption className="info-wrap border-top">
                <Link to={`${url}/product/${props.data.id}`}>
                    <p className="title mb-2">{props.data.name}</p>
                </Link>
                <div className='rating-stars'>
                    <RateStars rate={props.data.rate}/>
                </div>
                <div className="price mt-2">
                    {props.data.price}
                    <a onClick={() => addProduct(props.data)} className="btn btn-sm btn-outline-primary float-right">
                        Add to cart <i className="fa fa-shopping-cart"></i>
                    </a>
                </div>
            </figcaption>
        </figure>
    )
}

function mapStateToProps(state) {
    // console.log('state', state)
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
