import React from 'react';
import './slide.scss';

export function CartList(props) {
    const showList = props.showList;
    return (
        <div className={showList ? "cart-list slide-from-right shadow-sm" : "cart-list offset-right-hidden shadow-sm"}>
            <div className="cart-list__table-wrapper">
                <table className="cart-list__table table table-borderless table-shopping-cart">
                    <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width="120">Quantity</th>
                        <th scope="col" width="120">Price</th>
                        <th scope="col" className="text-right" width="200"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <figure className="itemside align-items-center">
                                <div className="aside">
                                    <img src={require("../../mock-data/images/11.jpg")} className="img-sm"/></div>
                                <figcaption className="info">
                                    <a href="#" className="title text-dark">Camera Canon EOS M50 Kit</a>
                                    <p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon</p>
                                </figcaption>
                            </figure>
                        </td>
                        <td>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </td>
                        <td>
                            <div className="price-wrap">
                                <var className="price">$1156.00</var>
                                <small className="text-muted"> $315.20 each </small>
                            </div>
                        </td>
                        <td className="text-right">
                            <a href="" className="btn btn-light"> Remove</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <figure className="itemside align-items-center">
                                <div className="aside"><img src={require("../../mock-data/images/11.jpg")}
                                                            className="img-sm"/></div>
                                <figcaption className="info">
                                    <a href="#" className="title text-dark">Camera Canon EOS M50 Kit</a>
                                    <p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon</p>
                                </figcaption>
                            </figure>
                        </td>
                        <td>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </td>
                        <td>
                            <div className="price-wrap">
                                <var className="price">$1156.00</var>
                                <small className="text-muted"> $315.20 each </small>
                            </div>
                        </td>
                        <td className="text-right">
                            <a href="" className="btn btn-light"> Remove</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <figure className="itemside align-items-center">
                                <div className="aside"><img src={require("../../mock-data/images/11.jpg")}
                                                            className="img-sm"/></div>
                                <figcaption className="info">
                                    <a href="#" className="title text-dark">Camera Canon EOS M50 Kit</a>
                                    <p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon</p>
                                </figcaption>
                            </figure>
                        </td>
                        <td>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </td>
                        <td>
                            <div className="price-wrap">
                                <var className="price">$1156.00</var>
                                <small className="text-muted"> $315.20 each </small>
                            </div>
                        </td>
                        <td className="text-right">
                            <a href="" className="btn btn-light"> Remove</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <figure className="itemside align-items-center">
                                <div className="aside"><img src={require("../../mock-data/images/10.jpg")}
                                                            className="img-sm"/></div>
                                <figcaption className="info">
                                    <a href="#" className="title text-dark">ADATA Premier ONE microSDXC</a>
                                    <p className="text-muted small">Size: 256 GB <br/> Brand: ADATA</p>
                                </figcaption>
                            </figure>
                        </td>
                        <td>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </td>
                        <td>
                            <div className="price-wrap">
                                <var className="price">$149.97</var>
                                <small className="text-muted"> $75.00 each </small>
                            </div>
                        </td>
                        <td className="text-right">
                            <a href="" className="btn btn-light btn-round"> Remove</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <figure className="itemside align-items-center">
                                <div className="aside"><img src={require("../../mock-data/images/9.jpg")}
                                                            className="img-sm"/></div>
                                <figcaption className="info">
                                    <a href="#" className="title text-dark">Logitec headset for gaming</a>
                                    <p className="small text-muted">Version: CUH-ZCT2E <br/> Brand: Sony</p>
                                </figcaption>
                            </figure>
                        </td>
                        <td>
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </td>
                        <td>
                            <div className="price-wrap">
                                <var className="price">$98.00</var>
                                <small className="text-muted"> $578.00 each</small>
                            </div>
                        </td>
                        <td className="text-right">
                            <a href="" className="btn btn-light btn-round"> Remove</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="card-body cart-list__bottom shadow">
                <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">$69.00</dd>
                </dl>
                <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right text-danger">$00.00</dd>
                </dl>
                <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right text-dark b"><strong>$69.00</strong></dd>
                </dl>
                <hr/>
                <div className="cart-list__btn-wrapper">
                    <a href="#" className="btn btn-light btn-block float-right">Remove all</a>
                    <a href="#" className="btn btn-primary text-white btn-block">Make Purchase</a>
                </div>
            </div>
        </div>
    )
}
