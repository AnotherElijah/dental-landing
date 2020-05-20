import React, {useState} from 'react';
import {CartList} from "../cart-list/CartList";
import "./cartMini.scss";
export function CartMini(props) {
    let [showList, toggleList] = useState(false);
    let amount = props.amount;
    return (
        <>
            <div className="cart-mini widget-header mr-3" onClick={(e) => {
                toggleList(showList = !showList);
                e.preventDefault()
            }}>
                <a href="#"
                   className={amount > 0 && !showList ? "icon icon-sm rounded-circle border"
                       : "icon icon-sm rounded-circle border-0"}>
                    <i className={showList ? "fa fa-times" : "fa fa-shopping-cart"}/>
                </a>
                {
                    !showList
                &&
                <span
                    className={amount > 0 ? "badge badge-pill badge-danger notify text-white" : "badge badge-pill notify bg-light"}>{amount}</span>}

            </div>
            <CartList showList={showList}/>
        </>
    )
}
