import React, {
    Component
} from 'react';

export default class Header extends Component {
    render() {
        return ( 
            <>
             {/* <div class="css-loader">
                <div class="loader-inner line-scale d-flex align-items-center justify-content-center"></div>
            </div>  */}
              <header class="position-absolute w-100">
        <div class="container">
            <div class="top-header d-none d-sm-flex justify-content-between align-items-center">
                <div class="contact">
                    <a href="tel:+1234567890" class="tel"><i class="fa fa-phone" aria-hidden="true"></i>+1234567890</a>
                    <a href="mailto:info@yourmail.com"><i class="fa fa-envelope"
                            aria-hidden="true"></i>info@yourmail.com</a>
                </div>
                <nav class="d-flex aic">
                    <a href="https://www.facebook.com/fh5co" class="login"><i class="fa fa-user" aria-hidden="true"></i>Login</a>
                    <ul class="nav social d-none d-md-flex">
                        <li><a href="https://www.facebook.com/fh5co"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.facebook.com/fh5co"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="https://www.facebook.com/fh5co"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </nav>
            </div>
            <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="Multipurpose"/></a>
                <div class="group d-flex align-items-center">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>
                    <a class="login-icon d-sm-none" href="https://www.facebook.com/fh5co"><i class="fa fa-user"></i></a>
                    <a class="cart" href="https://www.facebook.com/fh5co"><i class="fa fa-shopping-cart"></i></a>
                </div>
                <a class="search-icon d-none d-md-block" href="https://www.facebook.com/fh5co"><i class="fa fa-search"></i></a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/fh5co">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/fh5co">About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/fh5co">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/fh5co">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/fh5co">Shop</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.facebook.com/fh5co">Contact Us</a></li>
                    </ul>
                    <form class="bg-white search-form" method="get" id="searchform">
                        <div class="input-group">
                            <input class="field form-control" id="s" name="s" type="text" placeholder="Search"/>
                            <span class="input-group-btn">
                                <input class="submit btn btn-primary" id="searchsubmit" name="submit" type="submit"
                                    value="Search"/>
                            </span>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    </header>
            </>
        )
    }
}