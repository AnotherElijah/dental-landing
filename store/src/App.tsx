import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./pages/main";
import Footer from "./pages/main/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Page404} from "./pages/404/404";
import {ShopMain} from "./pages/shop/shop-main";
import './sass/bootstrap.scss';
import './sass/responsive.scss';
import './sass/ui.scss';
import Registration from "./pages/registration/Login";
import HeaderContainer from "./components/containers/headerContainer";
import LoginContainer from "./components/containers/loginContainer";
import CabinetContainer from "./components/containers/cabinetContainer";
import {ProductsRoute} from "./routes/ProductsRoute";

function App() {

    return (
        <>
            <Router>
                <HeaderContainer/>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/shop">
                        <ProductsRoute/>
                    </Route>
                    <Route path="/cabinet">
                        <CabinetContainer/>
                    </Route>
                    <Route path={`/signin`}>
                        <LoginContainer/>
                    </Route>
                    <Route path={`/registration`}>
                        <Registration/>
                    </Route>
                    <Route path="*">
                        <Page404/>
                    </Route>

                </Switch>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
