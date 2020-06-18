import React from 'react';
import './slide.scss';
import {connect} from "react-redux";
import {userLogin, userLogout} from "../../../store/actions/user";
import {products} from "../../../store/reducers/products";
import * as ACTION_TYPES from "../../../store/constants/products";
import {removeProduct} from "../../../store/actions/products";

export class CartList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.products)
    }

    removeProduct(product){
        console.log(product);
        this.props.removeProduct(product.name);
    }

    render() {
        return (
            <div
                className={this.props.showList ? "cart-list slide-from-right shadow-sm" : "cart-list offset-right-hidden shadow-sm"}>
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
                        {
                            this.props.products.length > 0 ?
                                this.props.products.map((product, i) => {
                                   return <tr key={i}>
                                        <td>
                                            <figure className="itemside align-items-center">
                                                <div className="aside">
                                                    <img src={product.picture} className="img-sm"/></div>
                                                <figcaption className="info">
                                                    <a href="#" className="title text-dark">{product.name}</a>
                                                    {/*<p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon
                                                    </p>*/}
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
                                                <var className="price">{product.price}</var>
                                                <small className="text-muted"> $315.20 each </small>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <a className="btn btn-light" onClick={(e)=>{this.removeProduct(product); e.preventDefault()}}>Remove</a>
                                        </td>
                                    </tr>
                                }
                                ):<div className='w-100 m-2 ml-3'>Your cart is empty</div>
                        }
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
}

function mapStateToProps(state) {

    return {
        ...state
    }
}
function mapDispatchToProps(dispatch){
    return {
        removeProduct: (name) => dispatch(removeProduct(name)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartList);
