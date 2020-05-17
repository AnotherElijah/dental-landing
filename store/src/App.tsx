import React from 'react';
import './App.css';
import Navigation from "./pages/navigation";
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
import Login from "./pages/login/Login";
import './sass/bootstrap.scss';
import './sass/responsive.scss';
import './sass/ui.scss';
import Registration from "./pages/registration/Login";

function App() {

    return (
        <>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/shop">
                        <ShopMain/>
                    </Route>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path={`/signin`}>
                        <Login/>
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
