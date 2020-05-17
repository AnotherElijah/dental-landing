import React from 'react';

export function ShopMain() {
    return (

        <section className="section-content padding-y bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <figure className="card card-product-grid">
                            <div className="img-wrap"><img src={require('../images/items/5.jpg')}/></div>
                            <figcaption className="info-wrap border-top">
                                <a href="#" className="title">Bell & Ross Nightlum</a>
                                <div className="price mt-2">$299.00</div>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-3">
                        <figure className="card card-product-grid">
                            <div className="img-wrap">
                                <img src={require("../images/items/6.jpg")}/>
                                <span className="topbar">
					<a href="#" className="float-right"><i className="fa fa-heart"></i></a>
				</span>
                                <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                            </div>
                            <figcaption className="info-wrap border-top">
                                <a href="#" className="title">Leather Sleeve - Macbook 13’’</a>
                                <div className="price mt-2">$3753.00</div>

                            </figcaption>
                        </figure>

                    </div>

                    <div className="col-md-3">
                        <figure className="card card-product-grid">
                            <div className="img-wrap">
				<span className="topbar">
					<span className="badge badge-success"> NEW </span>
				</span>
                                <img src={require("../images/items/7.jpg")}/>
                            </div>
                            <figcaption className="info-wrap border-top">
                                <a href="#" className="title">H&M Polo Shirt Slim Fit</a>
                                <div className="price-wrap mt-2">
                                    <span className="price">$12.99</span>
                                    <del className="price-old">$14.99</del>
                                </div>
                            </figcaption>
                        </figure>

                    </div>

                    <div className="col-md-3">
                        <figure className="card card-product-grid">
                            <div className="img-wrap">
                                <img src={require("../images/items/1.jpg")}/>
                            </div>
                            <figcaption className="info-wrap border-top text-center">
                                <small className="text-uppercase font-weight-bolder text-warning">ELECTRONICS</small>
                                <p><a href="#" className="title">IKEA Poäng Swivel Chair</a></p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                        <a href="#" className="card card-product-grid">
                            <div className="img-wrap"><img src={require("../images/items/1.jpg")}/></div>
                            <figcaption className="info-wrap">
                                <p className="title text-truncate">Just another long text product name</p>
                                <small className="text-muted">Sizes: S, M, XL</small>
                                <div className="price mt-2">$179.00</div>
                            </figcaption>
                        </a>
                    </div>

                    <div className="col-md-3">
                        <figure className="card card-product-grid">
                            <a href="#" className="img-wrap">
                                <img src={require("../images/items/3.jpg")}/>
                            </a>
                            <figcaption className="info-wrap">
                                <a href="#" className="title">Fjällräven Kånken Backpack Blue Ridge</a>
                                <div className="mt-2">
                                    <var className="price">$84.00</var>
                                    <a href="#" className="btn btn-sm btn-outline-primary float-right">Add to
                                        cart <i className="fa fa-shopping-cart"></i></a>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-md-3">
                        <a href="#" className="card card-product-grid">
                            <div className="img-wrap">
                                <img src={require("../images/items/2.jpg")}/>
                            </div>
                            <div className="info-wrap text-center ">
                                <p className="title text-truncate">Bose Headphones 700 best for Gaming</p>
                                <ul className="rating-stars">
                                    <li style={{width: '80%'}} className="stars-active">
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i>
                                    </li>
                                </ul>
                                <small className="text-muted">34</small>
                                <div className="price-wrap mt-2 text-center">
                                    <span className="price">$399.95</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-3">
                        <figure className="card card-product-grid">
                            <a href="#" className="img-wrap">
                                <img src={require("../images/items/4.jpg")}/>
                            </a>
                            <figcaption className="info-wrap">
                                <a href="#" className="title">Apple Homkit - Ecobee3 Lite Smart Thermostat</a>
                                <div className="mt-2">
                                    <var className="price">$169.95</var>
                                    <ul className="rating-stars float-right">
                                        <li style={{width: '80%'}} className="stars-active">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <figure className="card card-product-grid card-lg">
                            <div className="img-wrap"><img src={require("../images/items/9.jpg")}/></div>
                            <figcaption className="info-wrap">
                                <a className="title">Headset for gaming</a>
                                <p className="text-muted">Logitec</p>
                            </figcaption>
                            <div className="bottom-wrap">
                                <a href="" className="btn btn-primary float-right">Order Now</a>
                                <ul className="rating-stars">
                                    <li style={{width: '80%'}} className="stars-active">
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i><i className="fa fa-star"></i><i
                                        className="fa fa-star"></i>
                                    </li>
                                </ul>
                                <div className="price-wrap">
                                    <span className="price">$19.00</span>
                                </div>

                            </div>

                        </figure>
                    </div>


                    <div className="col-md-4">
                        <figure className="card card-product-grid card-lg">
                            <a href="#" className="img-wrap"><img src={require("../images/items/10.jpg")}/></a>
                            <figcaption className="info-wrap">
                                <p>
                                    <a href="#" className="title">Another name of item</a>
                                </p>
                                <span className="tag">32 GB</span> <span className="tag">Brand new</span>
                                <span className="tag">256 px</span>
                                <span className="tag">Water proof</span>
                            </figcaption>
                            <div className="bottom-wrap d-flex align-items-center">
                                <div className="mr-3"><span className="price h5">$1280</span></div>

                                <div className="ml-auto form-inline">
                                    <select className="form-control mr-2">
                                        <option>Size</option>
                                        <option>XL</option>
                                        <option>XS</option>
                                    </select>
                                    <select className="form-control mr-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <a href="#" className="btn btn-primary"><i
                                        className="fa fa-shopping-cart"></i></a>
                                </div>
                            </div>

                        </figure>
                    </div>


                    <div className="col-md-4">
                        <figure className="card card-product-grid card-lg">
                            <a href="#" className="img-wrap"><img src={require("../images/items/11.jpg")}/></a>
                            <figcaption className="info-wrap">
                                <a href="#" className="title">Another name of item</a>
                                <div className="rating-wrap">
                                    <ul className="rating-stars">
                                        <li style={{width: '80%'}} className="stars-active">
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i><i className="fa fa-star"></i><i
                                            className="fa fa-star"></i>
                                        </li>
                                    </ul>
                                </div>

                            </figcaption>
                            <div className="bottom-wrap">
                                <a href="#" className="btn  btn-primary float-right"> Buy now </a>
                                <div className="price-wrap">
                                    <span className="price h5">$1280</span> <br/> <small
                                    className="text-success">Free shipping</small>
                                </div>

                            </div>

                        </figure>
                    </div>


                </div>


                <br/>


                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <figure className="card-product-grid mb-0 card-sm">
                                <div className="img-wrap"><img src={require("../images/items/1.jpg")}/></div>
                                <figcaption className="info-wrap text-center">
                                    <a href="#" className="title">Just another product name goes here</a>
                                    <div className="price mt-2">$299.00</div>

                                </figcaption>
                            </figure>

                        </div>


                        <div className="col-md-3">
                            <figure className="card-product-grid mb-0 card-sm">
                                <div className="img-wrap"><img src={require("../images/items/2.jpg")}/></div>
                                <figcaption className="info-wrap text-center">
                                    <a href="#" className="title">Just another product name goes here</a>
                                    <div className="price mt-2">$299.00</div>

                                </figcaption>
                            </figure>

                        </div>


                        <div className="col-md-3">
                            <figure className="card-product-grid mb-0 card-sm">
                                <div className="img-wrap">
                                    <img src={require("../images/items/3.jpg")}/>
                                    <span className="topbar">
						<a href="#" className="float-right"><i className="fa fa-heart"></i></a>
					</span>
                                </div>
                                <figcaption className="info-wrap text-center">
                                    <a href="#" className="title">Just another product name goes here</a>
                                    <div className="price mt-2">$299.00</div>

                                </figcaption>
                            </figure>

                        </div>


                        <div className="col-md-3">
                            <figure className="card-product-grid mb-0  card-sm">
                                <div className="img-wrap"><img src={require("../images/items/4.jpg")}/>
                                    <span className="topbar">
						<a href="#" className="float-right"><i className="fa fa-heart"></i></a>
					</span>
                                </div>
                                <figcaption className="info-wrap text-center">
                                    <a href="#" className="title">Just another product name goes here</a>
                                    <div className="price mt-2">$299.00</div>

                                </figcaption>
                            </figure>

                        </div>

                    </div>

                </div>


                <br/><br/>


                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <a href="#" className="itemside">
                                <div className="aside"><img src={require("../images/items/4.jpg")}
                                                            className="img-sm"/></div>
                                <div className="info align-self-center">
                                    <p className="title">Some name of item goes here nice</p>
                                    <div className="price-wrap">
                                        <span className="price">$1280</span>
                                        <del className="price-old text-muted">$1980</del>
                                    </div>

                                </div>
                            </a>
                        </div>


                        <div className="col-md-3">
                            <a href="#" className="itemside">
                                <div className="aside"><img src={require("../images/items/3.jpg")}
                                                            className="img-sm"/></div>
                                <div className="info align-self-center">
                                    <p className="title">Some name of item goes here nice</p>
                                    <div className="price-wrap">
                                        <span className="price">$1280</span>
                                        <del className="price-old text-muted">$1980</del>
                                    </div>

                                </div>
                            </a>
                        </div>


                        <div className="col-md-3">
                            <a href="#" className="itemside">
                                <div className="aside"><img src={require("../images/items/2.jpg")}
                                                            className="img-sm"/></div>
                                <div className="info align-self-center">
                                    <p className="title">Some name of item goes here nice</p>
                                    <div className="price">$1280</div>

                                </div>
                            </a>
                        </div>


                        <div className="col-md-3">
                            <a href="#" className="itemside">
                                <div className="aside"><img src={require("../images/items/1.jpg")}
                                                            className="img-sm"/></div>
                                <div className="info align-self-center">
                                    <p className="title">Some name of item goes here nice</p>
                                    <div className="price">$1280</div>

                                </div>
                            </a>
                        </div>

                    </div>

                </div>


                <br/> <br/>


                <div className="card card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/1.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Some name of item goes here
                                        nice</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/2.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Great product name is here</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/3.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Best name of item goes here
                                        demo</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/4.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Some name of item goes here
                                        nice</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/5.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Another name of item goes here</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/6.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Great item name goes here nice</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/7.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Some name of item goes here
                                        nice</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>


                        <div className="col-md-3">
                            <figure className="itemside mb-4">
                                <div className="aside"><img src={require("../images/items/9.jpg")}
                                                            className="border img-sm"/></div>
                                <figcaption className="info align-self-center">
                                    <a href="#" className="title">Some name of item goes here
                                        nice</a>
                                    <a href="#" className="btn btn-light text-primary btn-sm"> Add
                                        to cart </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}