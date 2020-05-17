import React from 'react';
import '../../style.css';
import {Link} from "react-router-dom";
function Navigation() {

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
                        <a href="" target="_blank">
                            <li className="text-center"><Link to={`/signin`}>Sign in</Link></li>
                        </a>
                    </ul>
                </div>
                <h2 className="logo-1 text-danger p-3 w-25 logo-mobile">BRUSHER</h2>
            </nav>

            <nav className="desktop-nav navbar-expand-lg d-md-flex d-sm-none d-none navbar-light p-0 text-center">
                <nav className="col-1 navbar navbar-expand-lg navbar-light ml-3">
                    <a className="navbar-brand" href="#"><Link to='shop'>Store</Link></a>

                    <a className="navbar-brand" href="#">Contact</a>
                </nav>
                <h2 className="logo-2 col-2 offset-4 text-danger p-3 mb-0">BRUSHER</h2>
                <nav className="col-1 offset-2 navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">Help</a>
                    <a className="navbar-brand" href="#">Review</a>
                </nav>
                <nav className="col-1 navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">Contact us</a>
                    <a className="navbar-brand btn text-danger">
                        <Link to={`/signin`}>Sign in</Link>
                    </a>
                </nav>
            </nav>
        </header>

    );
}

export default Navigation;
