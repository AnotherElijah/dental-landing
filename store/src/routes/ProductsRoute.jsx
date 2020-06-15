import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import {ProductDetailsContainer} from "../components/product-details/ProductDetailsContainer";
import {useRouteMatch} from "react-router";
import {ShopMain} from "../pages/shop/shop-main";

export function ProductsRoute() {
    let {path} = useRouteMatch();
    console.log('products route')
    return (
        <>
            <Switch>
                <Route exact path={`${path}`}>
                    <ShopMain/>
                </Route>
                <Route path={`${path}/product/:productId`} render={(props) => <ProductDetailsContainer {...props} />}></Route>
                {/*<Route path={`${path}/product/:productId`}>
                    <ProductDetailsContainer/>
                </Route>*/}
            </Switch>
        </>)
}
