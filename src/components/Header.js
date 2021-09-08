import React from 'react';
import Navbar from './Navbar';

const Header = props => {

    const { history, auth } = props;

    return (
            <div class="header-top">
                        <div class="bg-gradient">
                            <div class="container pt-3 pb-3">
                                <div class="row align-items-center">
                                <div class="col-12 col-lg-6 d-flex">
                                    <a href="index.html" class="site-logo">
                                        <img src={process.env.PUBLIC_URL + "/logo.png"} />
                                    </a>

                                    <a href="#" class="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                                        class="icon-menu h3"></span></a>

                                </div>
                                <div class="col-12 col-lg-6 ml-auto d-flex">
                                    <div class="ml-md-auto top-social d-none d-lg-inline-block">
                                    <a href="#" class="d-inline-block p-3"><span class="icon-facebook"></span></a>
                                        <a href="#" class="d-inline-block p-3"><span class="icon-twitter"></span></a>
                                        <a href="#" class="d-inline-block p-3"><span class="icon-instagram"></span></a>
                                    </div>
                                    <form action="#" class="search-form d-inline-block">

                                    <div class="d-flex">
                                        <input type="email" class="form-control-app" placeholder="Search..." />
                                        <button type="submit" class="btn btn-secondary" ><span class="icon-search"></span></button>
                                    </div>
                                    </form>

                                    
                                </div>
                                <div class="col-6 d-block d-lg-none text-right">
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <Navbar history={history} auth={auth} />
            </div>
    );
};

export default Header;