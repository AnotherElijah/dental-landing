import React from 'react';

export function CartMini(props) {
    let amount = props.amount;
    return (
        <div className="widget-header  mr-3">
            <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
            <span className="badge badge-pill badge-danger notify">{amount}</span>
        </div>
    )
}
