import React from 'react';
import '../../style.css';
import {Link} from "react-router-dom";
import {CartMini} from "../../components/cart-mini/CartMini";

function Navigation(props) {
    const loggedIn = props.loggedIn;
    const productsAmount = props.store.length;
    const cabinetURL = '/cabinet';
    const signInURL = '/signin';
    return (
        <header className="bg-white">
            <nav role="navigation" className="mobile-nav shadow-sm">
                <div id="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu" className="bg-white shadow-sm">
                        <a href="#">
                            <li className="text-center"><Link to='shop'>Store</Link></li>
                        </a>
                        <a href="#">
                            <li className="text-center">Contact</li>
                        </a>
                        <a href="#">
                            <li className="text-center">Help</li>
                        </a>
                        <a href="#">
                            <li className="text-center">Review</li>
                        </a>
                        <a href="" target="_blank">
                            <li className="text-center">Contact us</li>
                        </a>


                        <div className="text">
                            <span className="text-muted">Welcome!</span>
                            <div>
                                <a className="mr-2" href="#">Sign in</a> |
                                <a className="ml-2" href="#">Register</a>
                            </div>
                        </div>

                        {
                            loggedIn ? <a href="" target="_blank">
                                <li className="text-center"><Link to={cabinetURL}>My profile</Link></li>
                            </a> : <a href="" target="_blank">
                                <li className="text-center"><Link to={signInURL}>Log In</Link></li>
                            </a>
                        }

                    </ul>
                </div>
                <h2 className="logo-1 text-danger p-3 w-25 logo-mobile">BRUSHER</h2>
                <CartMini amount={productsAmount}/>
            </nav>

            <nav className="desktop-nav navbar-expand-lg d-md-flex d-sm-none d-none navbar-light p-0 text-center">
                <nav className="col-4 navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <Link to='shop'>Store</Link>
                    </a>
                    <a className="navbar-brand" href="#">Contact</a>
                    <a className="navbar-brand" href="#">Help</a>
                    <a className="navbar-brand" href="#">Review</a>
                    <a className="navbar-brand" href="#">Contact us</a>
                </nav>
                <h2 className="logo-2 col-2 offset-1 text-danger p-3 mb-0">BRUSHER</h2>
                <nav className="offset-1 col-4 navbar navbar-expand-lg navbar-light justify-content-end">
                    <div className="nav-right-wrapper d-flex flex-row align-items-center justify-content-end">
                        <CartMini className="" amount={productsAmount}/>
                        {
                            loggedIn ? <a href="" target="_blank">
                                    <Link to={cabinetURL}>
                                        <a href="#" className="icon icon-sm rounded-circle border">
                                            <i className="fa fa-user"></i></a></Link>
                                </a> :
                                <div className="text mr-3">
                                    <a href="#" className="d-inline mr-1"><Link to={signInURL}>Sign in</Link></a>
                                    |
                                    <a href="#" className="d-inline ml-1"><Link to='/registration'>Register</Link></a>
                                </div>

                        }
                    </div>
                </nav>
            </nav>
        </header>

    );
}

export default Navigation;
