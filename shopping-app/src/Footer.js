import React, {Component} from 'react';

class MyFooter extends React.Component{
    render(){
        return(
            <footer>
                <section className="footer-navbar dark">
                    <div className="container content nopad-xs">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 col-lg-3 collapsed-block">
                                <h3>Information<a className="expander visible-xs" href="#TabBlock-3">+</a></h3>
                                <div className="tabBlock" id="TabBlock-3">
                                    <ul className="menu">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Shipping &amp; Returns</a></li>
                                        <li><a href="#">Privacy Notice</a></li>
                                        <li><a href="#">Conditions of Use</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 collapsed-block">
                                <h3><span className="attention"><span className="attention_icon"></span></span>Customer service<a
                                    className="expander visible-xs" href="#TabBlock-4">+</a></h3>
                                <div className="tabBlock" id="TabBlock-4">
                                    <ul className="menu">
                                        <li><a href="#">Online support</a></li>
                                        <li><a href="#">Help & FAQs</a></li>
                                        <li><a href="#">Call Center</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix visible-sm"></div>
                            <div className="col-sm-6 col-md-3 col-lg-3 collapsed-block">
                                <h3>My account<a className="expander visible-xs" href="#TabBlock-5">+</a></h3>
                                <div className="tabBlock" id="TabBlock-5">
                                    <ul className="menu">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">Order history</a></li>
                                        <li><a href="#">Advanced search</a></li>
                                        <li><a href="#">Reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 collapsed-block">
                                <h3>CUSTOM HTML BLOCK<a className="expander visible-xs" href="#TabBlock-6">+</a></h3>
                                <div className="tabBlock" id="TabBlock-6">
                                    <ul className="menu">
                                        <li><span className="icon icon-house"></span> 7563 St. Vincent Place, Glasgow</li>
                                        <li><span className="icon icon-phone-4"></span> 321321321, 321321321</li>
                                        <li><span className="icon icon-envelop"></span> <a
                                            href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                                        <li><span className="icon icon-skype-2"></span> <a href="#">shop.test</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-bottom-block container">
                    <div className="row">
                        <div className="col-sm-5 col-md-4 copyright-text"> &copy; 2015<a href="#">Megatron</a>. All Rights Reserved.
                        </div>
                        <div className="col-sm-3 col-md-4"> Select Store:
                            <div className="btn-group btn-select dropup"><a href="#"
                                                                            className="btn btn-default btn-xs dropdown-toggle"
                                                                            data-toggle="dropdown"> <span className="value">Main store</span>
                                <span className="caret min"></span> </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Simple store</a></li>
                                    <li><a href="#">Style store</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <ul className="payment-list pull-right">
                                <li><img src="images/icon-payment-01.png" width="36" height="22" alt="" /></li>
                                <li><img src="images/icon-payment-02.png" width="36" height="22" alt="" /></li>
                                <li><img src="images/icon-payment-03.png" width="36" height="22" alt="" /></li>
                                <li><img src="images/icon-payment-04.png" width="36" height="22" alt="" /></li>
                                <li><img src="images/icon-payment-05.png" width="36" height="22" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}

export default MyFooter;