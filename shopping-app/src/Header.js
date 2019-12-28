import React, {Component} from 'react';

class MyHedaer extends React.Component{
    render(){
        return(
            <header>
                <div class="back-to-top"><span class="icon-arrow-up-4"></span></div>
                <section class="navbar">
                    <div class="background">
                        <div class="container">
                            <div class="wrappertop">
                                <div class="navbar-logo pull-left"> <a href="index.html"><img src="images/header-logo.png" alt="Megatron" /></a></div>
                                <div class="navbar-welcome pull-left compact-hidden hidden-xs">Default welcome msg!</div>
                                <div class="clearfix visible-sm"></div>
                                <div class="navbar-secondary-menu pull-right hidden-xs">
                                    <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="icon icon-vcard"></span> Account <span class="caret"></span> </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#">Account</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                            <li><a href="#">Checkout</a></li>
                                            <li class="divider"></li>
                                            <li><a href="login.html">Log In</a></li>
                                            <li><a href="login.html">Sign Up</a></li>
                                        </ul>
                                    </div>
                                    <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="icon icon-bubbles"></span> English <span class="caret"></span> </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#"> <span class="icon-flag icon-flag-en">&nbsp;</span> English</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-de">&nbsp;</span> German</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-fr">&nbsp;</span> French</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-da">&nbsp;</span> Danish</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-el">&nbsp;</span> Greek</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-es">&nbsp;</span> Spanish</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-it">&nbsp;</span> Italian</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-nl">&nbsp;</span> Dutch</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-pl">&nbsp;</span> Polish</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-pt">&nbsp;</span> Portuguese</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-ru">&nbsp;</span> Russian</a></li>
                                            <li><a href="#"> <span class="icon-flag icon-flag-sv">&nbsp;</span> Swedish</a></li>
                                        </ul>
                                    </div>
                                    <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="icon icon-credit "></span> US Dollar<span class="caret"></span> </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#">($) US Dollars</a></li>
                                            <li><a href="#">(€) Euro</a></li>
                                            <li><a href="#">(&pound;) British Pounds</a></li>
                                        </ul>
                                    </div>
                                    <div class="btn-group compact-hidden"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="icon icon-justice"></span> Compare (0) <span class="caret"></span> </a>
                                        <div class="dropdown-menu pull-right shoppingcart-box empty" role="menu"> No items to compare </div>
                                    </div>
                                    <div class="btn-group shoppingcart"> <a href="#"  class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span class="compact-hidden">Cart - <strong>$245</strong></span> <span class="icon-xcart-animate"><span class="box">3</span><span class="handle"></span></span> </a>
                                        <div class="dropdown-menu pull-right shoppingcart-box" role="menu"> Recently added item(s)
                                            <ul class="list">
                                                <li class="item"> <a href="product_default.html" class="preview-image"><img class="preview" src="images/products/product-07-small.jpg" alt="" /></a>
                                                    <div class="description"> <a href="#">Mauris et ligula quis</a> <strong class="price">1 x $44.95</strong> </div>
                                                </li>
                                            </ul>
                                            <div class="total">Total: <strong>$44.95</strong></div>
                                            <a href="#" class="btn btn-mega">Proceed to Checkout</a>
                                            <div class="view-link"><a href="shopping_cart.html">View shopping cart </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></div>
                </section>
                <section className="social-widgets hidden-xs">
                    <ul className="items">
                        <li className="item item-01 facebook"><a href="social/facebook.html" className="tab-icon"><span
                            className="icon-facebook-3"></span></a>
                            <div className="tab-content">
                                <div className="title">FACEBOOK</div>
                                <div className="loading"><img src="images/ajax-loader.gif" className="ajaxloader"
                                                              alt="loader" /></div>
                            </div>
                        </li>
                        <li className="item item-02 twitter"><a href="social/twitter.html" className="tab-icon"><span
                            className="icon-twitter-3"></span></a>
                            <div className="tab-content">
                                <div className="title">TWITTER FEEDS</div>
                                <div className="loading"><img src="images/ajax-loader.gif" className="ajaxloader"
                                                              alt="loader" /></div>
                            </div>
                        </li>
                        <li className="item item-03 youtube"><a href="social/youtubevideo.html"
                                                                className="tab-icon"><span
                            className="icon icon-youtube-3"></span></a>
                            <div className="tab-content">
                                <div className="title">Video</div>
                                <div className="loading"><img src="images/ajax-loader.gif" className="ajaxloader"
                                                              alt="loader" /></div>
                            </div>
                        </li>
                        <li className="item item-04 contacts"><a href="social/googlemap.html" className="tab-icon"><span
                            className="icon-globe"></span></a>
                            <div className="tab-content">
                                <div className="title">Find Us</div>
                                <div className="loading"><img src="images/ajax-loader.gif" className="ajaxloader"
                                                              alt="loader" /></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <div className="navbar-height-inner"></div>
                <div className="navbar-height"></div>
            </header>
        );
    }
}

export default MyHedaer;