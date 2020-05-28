import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/containers/headerContainer";
import React from "react";
import {ProductDetails} from "./components/product-details/ProductDetails";

export function TestRoute() {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/test">
                        <ProductDetails/>
                    </Route>
                </Switch>
            </Router>
        </>)
}
