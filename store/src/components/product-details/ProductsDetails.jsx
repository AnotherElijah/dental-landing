import React from 'react';
import {RateStars} from "../rate-stars/RateStars";

export function ProductDetails(props){

    return <div className="card">
        <div className="row no-gutters">
            <aside className="col-md-6">
                <article className="gallery-wrap">
                    <div className="img-big-wrap">
                        <a href="#"><img src={props.data.picture}/></a>
                    </div>
                </article>
            </aside>
            <main className="col-md-6 border-left">
                <article className="content-body">

                    <h2 className="title">{props.data.name}</h2>

                    <div className="rating-wrap my-3">
                        <ul className="rating-stars">
                            <li>
                                <RateStars rate={props.data.rate}/>
                            </li>
                        </ul>
                        <small className="label-rating text-muted">132 reviews</small>
                        <small className="label-rating text-success">
                            <i className="fa fa-clipboard-check"></i> 154 orders </small>
                    </div>

                    <div className="mb-3">
                        <var className="price h4">{props.data.price}</var>
                    </div>

                    <p>{props.data.description}</p>

                    <dl className="row">
                        <dt className="col-sm-3">Model#</dt>
                        <dd className="col-sm-9">Odsy-1000</dd>

                        <dt className="col-sm-3">Color</dt>
                        <dd className="col-sm-9">Brown</dd>

                        <dt className="col-sm-3">Delivery</dt>
                        <dd className="col-sm-9">Russia, USA, and Europe</dd>
                    </dl>

                    <hr/>
                    <div className="form-row">
                        {/*<div className="form-group col-md flex-grow-0">
                            <label>Quantity</label>
                            <div className="input-group mb-3 input-spinner">
                                <div className="input-group-prepend">
                                    <button className="btn btn-light" type="button" id="button-plus"> +
                                    </button>
                                </div>
                                <input type="text" className="form-control" value="1"/>
                                <div className="input-group-append">
                                    <button className="btn btn-light" type="button"
                                            id="button-minus"> −
                                    </button>
                                </div>
                            </div>
                        </div>*/}
                        {/*<div className="form-group col-md">
                            <label>Select size</label>
                            <div className="mt-1">
                                <label className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="select_size" checked=""
                                           className="custom-control-input"/>
                                    <div className="custom-control-label">Small</div>
                                </label>

                                <label className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="select_size" className="custom-control-input"/>
                                    <div className="custom-control-label">Medium</div>
                                </label>

                                <label className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="select_size" className="custom-control-input"/>
                                    <div className="custom-control-label">Large</div>
                                </label>

                            </div>
                        </div>*/}
                    </div>
                    <a href="#" className="btn  btn-outline-primary">
                        <span className="text">Add to cart</span>
                        <i className="fas fa-shopping-cart"></i></a>
                </article>
            </main>
        </div>
    </div>
}
