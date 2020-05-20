import React from 'react';

export function Cabinet() {
    return (<>
            <section className="section-pagetop bg">
                <div className="container">
                    <h2 className="title-page">My account</h2>
                </div>
            </section>

            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside
                            className="col-md-3">
                            <ul
                                className="list-group">
                                <a className="list-group-item active"
                                    href="#"> Account
                                    overview </ a>
                                <a className="list-group-item"
                                    href="#"> My
                                    Orders </ a>
                                <a className="list-group-item"
                                    href="#"> My
                                    wishlist </ a>
                                <a className="list-group-item"
                                    href="#"> Return
                                    and
                                    refunds </ a>
                                <a className="list-group-item"
                                    href="#"> Settings </ a>
                                <a className="list-group-item"
                                    href="#"> My
                                    Selling
                                    Items </ a>
                                <a className="list-group-item"
                                    href="#"> Received
                                    orders </ a>
                            </ ul>
                        </ aside>
                        <main className="col-md-9">

                            <article className="card mb-3">
                                <header className="card-header">
                                    Great information block
                                </header>
                                <div className="card-body">

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>

                            </article>


                            <article className="card  mb-3">
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>

                            </article>


                        </main>
                    </div>

                </div>
            </section>
        </>
    )
}
