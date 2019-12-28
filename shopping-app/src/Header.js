import React, {Component} from 'react';

class MyHedaer extends React.Component{
    render(){
        return(
            <header>
                <div className="back-to-top"><span className="icon-arrow-up-4"></span></div>
                <section className="navbar">
                    <div className="background">
                        <div className="container">
                            <div className="wrappertop">
                                <div className="navbar-logo pull-left"> <a href="index.html"><img src="images/header-logo.png" alt="Megatron" /></a></div>
                                <div className="navbar-welcome pull-left compact-hidden hidden-xs">Default welcome msg!</div>
                                <div className="clearfix visible-sm"></div>
                                <div className="navbar-secondary-menu pull-right hidden-xs">
                                    <div className="btn-group compact-hidden"> <a href="#"  className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span className="icon icon-vcard"></span> Account <span className="caret"></span> </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">Account</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                            <li><a href="#">Checkout</a></li>
                                            <li className="divider"></li>
                                            <li><a href="login.html">Log In</a></li>
                                            <li><a href="login.html">Sign Up</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-group compact-hidden"> <a href="#"  className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span className="icon icon-bubbles"></span> English <span className="caret"></span> </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#"> <span className="icon-flag icon-flag-en">&nbsp;</span> English</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-de">&nbsp;</span> German</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-fr">&nbsp;</span> French</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-da">&nbsp;</span> Danish</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-el">&nbsp;</span> Greek</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-es">&nbsp;</span> Spanish</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-it">&nbsp;</span> Italian</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-nl">&nbsp;</span> Dutch</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-pl">&nbsp;</span> Polish</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-pt">&nbsp;</span> Portuguese</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-ru">&nbsp;</span> Russian</a></li>
                                            <li><a href="#"> <span className="icon-flag icon-flag-sv">&nbsp;</span> Swedish</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-group compact-hidden"> <a href="#"  className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span className="icon icon-credit "></span> US Dollar<span className="caret"></span> </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">($) US Dollars</a></li>
                                            <li><a href="#">(€) Euro</a></li>
                                            <li><a href="#">(&pound;) British Pounds</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-group compact-hidden"> <a href="#"  className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span className="icon icon-justice"></span> Compare (0) <span className="caret"></span> </a>
                                        <div className="dropdown-menu pull-right shoppingcart-box empty" role="menu"> No items to compare </div>
                                    </div>
                                    <div className="btn-group shoppingcart"> <a href="#"  className="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown"> <span className="compact-hidden">Cart - <strong>$245</strong></span> <span className="icon-xcart-animate"><span className="box">3</span><span className="handle"></span></span> </a>
                                        <div className="dropdown-menu pull-right shoppingcart-box" role="menu"> Recently added item(s)
                                            <ul className="list">
                                                <li className="item"> <a href="product_default.html" className="preview-image"><img className="preview" src="images/products/product-07-small.jpg" alt="" /></a>
                                                    <div className="description"> <a href="#">Mauris et ligula quis</a> <strong className="price">1 x $44.95</strong> </div>
                                                </li>
                                            </ul>
                                            <div className="total">Total: <strong>$44.95</strong></div>
                                            <a href="#" className="btn btn-mega">Proceed to Checkout</a>
                                            <div className="view-link"><a href="shopping_cart.html">View shopping cart </a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-secondary-menu pull-right compact-hidden visible-xs">
                                    <div className="btn-group visible-xs"><a href="#"
                                                                             className="btn btn-xs btn-default dropdown-toggle"
                                                                             data-toggle="dropdown">En <span
                                        className="caret"></span> </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-en">&nbsp;</span> English</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-de">&nbsp;</span> German</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-fr">&nbsp;</span> French</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-da">&nbsp;</span> Danish</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-el">&nbsp;</span> Greek</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-es">&nbsp;</span> Spanish</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-it">&nbsp;</span> Italian</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-nl">&nbsp;</span> Dutch</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-pl">&nbsp;</span> Polish</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-pt">&nbsp;</span> Portuguese</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-ru">&nbsp;</span> Russian</a></li>
                                            <li><a href="#"> <span
                                                className="icon-flag icon-flag-sv">&nbsp;</span> Swedish</a></li>
                                        </ul>
                                    </div>
                                    <div className="btn-group visible-xs"><a href="#"
                                                                             className="btn btn-xs btn-default dropdown-toggle"
                                                                             data-toggle="dropdown">$ <span
                                        className="caret"></span> </a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">($) US Dollars</a></li>
                                            <li><a href="#">(€) Euro</a></li>
                                            <li><a href="#">(&pound;) British Pounds</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <form className="navbar-search form-inline hidden-xs pull-right" role="form">
                                    <div className="form-group">
                                        <button type="submit" className="button"><span className="icon-search-2"></span>
                                        </button>
                                        <input type="text" className="form-control" value="Search"
                                               onBlur="if (this.value == '') {this.value = 'Search';}"
                                               onFocus="if(this.value == 'Search') {this.value = '';}" />
                                    </div>
                                    <div className="dropdown-search">
                                        <ul>
                                            <li><a href="#"><span className="amount">12</span>search auto</a></li>
                                            <li><a href="#"><span className="amount">22</span>search auto</a></li>
                                            <li><a href="#"><span className="amount">2</span>search auto</a></li>
                                            <li><a href="#"><span className="amount">45</span>search auto</a></li>
                                            <li><a href="#"><span className="amount">11</span>search auto</a></li>
                                            <li><a href="#"><span className="amount">4</span>search auto</a></li>
                                        </ul>
                                    </div>
                                </form>
                            </div>

                            <dl className="navbar-main-menu hidden-xs">
                                <dt className="item">
                                    <ul className="sf-menu">
                                        <li><a href="index.html" className="btn-main"><span
                                            className="icon icon-home"></span></a>
                                            <ul>
                                                <li><a href="index_header_alt.html">Header Alternative</a></li>
                                                <li><a href="index_scroll_slider.html">Scroll Slider</a></li>
                                                <li><a href="home_simpleslider.html">Simple Slider</a></li>
                                                <li><a href="home_boxed.html">Boxed</a></li>
                                                <li><a href="home_boxed_with_banners.html">Boxed with banners</a></li>
                                                <li><a href="home_fluid_live_chat.html">Fluid chat</a></li>
                                                <li><a href="home_isotope.html">Isotope</a></li>
                                                <li><a href="home_isotope_newsletter_popup.html">Newsletter popup</a>
                                                </li>
                                                <li><a href="home_megamenu.html">Megamenu</a></li>
                                                <li><a href="home_usual_menu.html">Usual Menu</a></li>
                                                <li><a href="index_1400.html">Maximum width 1400</a></li>
                                                <li><a href="index_1600.html">Maximum width 1600</a></li>
                                                <li><a href="index_noresponsive.html">Noresponsive</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </dt>
                                <dd></dd>
                                <dt className="item">
                                    <ul className="sf-menu">
                                        <li><a href="index.html">Layouts</a>
                                            <ul>
                                                <li><a href="index_corporate.html">Layout Corporative</a></li>
                                                <li><a href="index_electronics.html">Layout Electronics</a></li>
                                                <li><a href="index_food.html">Layout Food</a></li>
                                                <li><a href="index_kids.html">Layout Kids</a></li>
                                                <li><a href="home_boxed_background.html">Background Isotope</a></li>
                                                <li><a href="home_creative.html">Creative</a></li>
                                                <li><a href="home_sidebar.html">Left Column</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </dt>
                                <dd></dd>
                                <dt className="item">
                                    <ul className="sf-menu">
                                        <li><a href="listing.html"> Listing </a>
                                            <ul>
                                                <li><a href="listing_big_products.html"> Usual </a></li>
                                                <li><a href="listing_big_products_no_leftcolumn.html"> Without Left
                                                    Column </a></li>
                                                <li><a href="listing_small_products.html"> Small Previews </a></li>
                                                <li><a href="listing_small_products_no_leftcolumn.html"> Small Previews
                                                    Without Left Column </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </dt>
                                <dd></dd>
                                <dt className="item">
                                    <ul className="sf-menu">
                                        <li><a href="product_default.html"> Product </a>
                                            <ul>
                                                <li><a href="product_default.html"> Product Page </a></li>
                                                <li><a href="product_default_left_preview.html"> Product Left
                                                    Preview</a></li>
                                                <li><a href="product_default_left_preview_tabs.html">Product Left
                                                    Preview + Tabs</a></li>
                                                <li><a href="product_right_big_product.html">Product Big</a></li>
                                                <li><a href="product_right_customblock.html">Product + Custom Block</a>
                                                </li>
                                                <li><a href="product_right_customblock_advanced.html">Product + Custom
                                                    Block Advanced</a></li>
                                                <li><a href="product_right_left_preview_tabs_video.html">Product +
                                                    Video</a></li>
                                                <li><a href="product_right_small_products.html">Product + Small
                                                    Products</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </dt>
                                <dd></dd>
                                <dt className="item">
                                    <ul className="sf-menu">
                                        <li><a href="blog.html"> Blog </a>
                                            <ul>
                                                <li><a href="blog_posts_table_view.html"> Table View </a></li>
                                                <li><a href="blog_single_post.html"> Single Post </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </dt>
                                <dd></dd>
                                <dt className="item">
                                    <ul className="sf-menu">
                                        <li><a href="gallery_3d.html"> Gallery </a>
                                            <ul>
                                                <li><a href="gallery_3d.html"> Gallery: 3D Effect </a></li>
                                                <li><a href="gallery_2columns.html"> Gallery: 2 Columns </a></li>
                                                <li><a href="gallery_3columns.html"> Gallery: 3 Columns </a></li>
                                                <li><a href="gallery_4columns.html"> Gallery: 4 Columns </a></li>
                                                <li><a href="gallery_4columns_nospace.html"> Gallery: 4 Columns no
                                                    space </a></li>
                                                <li><a href="gallery_single_page.html"> Gallery: Single Page </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </dt>
                                <dd></dd>
                                <dt className="item">
                                    <ul className="sf-menu">
                                        <li><a href="typography.html"> Pages </a>
                                            <ul>
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="infographic.html">Infographic</a></li>
                                                <li><a href="our_office.html">Our Office</a></li>
                                                <li><a href="our_store.html">Our Store</a></li>
                                                <li><a href="our_services.html">Our Services</a></li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="team_members.html">Team Members</a></li>
                                                <li><a href="shopping_cart.html">Shopping Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="compare.html">Products Compare</a></li>
                                                <li><a href="pricing_tables.html">Pricing Tables </a></li>
                                                <li><a href="video_section.html"> Video section </a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                                <li><a href="delivery.html">Delivery</a></li>
                                                <li><a href="sitemap.html"> Sitemap</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </dt>
                                <dd></dd>
                                <dt className="item compact-hidden"><a href="#" className="btn-main line">Woman</a></dt>
                                <dd className="item-content">
                                    <div className="navbar-main-submenu">
                                        <ul className="exclusive">
                                            <li><span className="icon icon-dropbox"></span> <a href="listing.html">Gifts
                                                exclusive</a></li>
                                            <li><span className="icon icon-coins"></span> <a
                                                href="listing.html">Offers</a></li>
                                        </ul>
                                        <div className="wrapper-border">
                                            <div className="row">

                                                <div className="col-xs-9">
                                                    <div className="row">
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-dress"></span> <a
                                                                className="name" href="listing.html">Dresses</a>
                                                                <ul>
                                                                    <li><a href="listing.html">Club Dresses</a></li>
                                                                    <li><a href="listing.html">Evening Dresses</a></li>
                                                                    <li><a href="listing.html">Prom Dresses</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-shirts"></span> <a
                                                                className="name" href="listing.html">SHIRTS</a>
                                                                <ul>
                                                                    <li><a href="listing.html">Empty category #1</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #2</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #3</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-coats"></span> <a
                                                                className="name" href="listing.html">COATS</a>
                                                                <ul>
                                                                    <li><a href="listing.html">Empty category #4</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #5</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #6</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-jackets"></span> <a
                                                                className="name" href="listing.html">JACKETS</a>
                                                                <ul>
                                                                    <li><a href="listing.html">Empty category #7</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #8</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #9</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-shorts"></span> <a
                                                                className="name" href="listing.html">SHORTS</a> <span
                                                                className="label label-mega">-15%</span>
                                                                <ul>
                                                                    <li><a href="listing.html">Empty category #10</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #11</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #12</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-jeans"></span> <a
                                                                className="name" href="listing.html">JEANS</a>
                                                                <ul>
                                                                    <li><a href="listing.html">Empty category #10</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #11</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #12</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-skirts"></span> <a
                                                                className="name" href="listing.html">SKIRTS</a>
                                                                <ul>
                                                                    <li><a href="listing.html">Empty category #16</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #17</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-lingerie"></span> <a
                                                                className="name" href="listing.html">LINGERIE</a>
                                                                <ul>
                                                                    <li><a href="listing.html">Empty category #18</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #19</a>
                                                                    </li>
                                                                    <li><a href="listing.html">Empty category #20</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-6 col-md-4 col-lg-3">
                                                            <div className="submenu-block"><span
                                                                className="icon m-icon-tops"></span> <a className="name"
                                                                                                        href="listing.html">Tops</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xs-3">
                                                    <div className="img-fullheight"><img className="img-responsive"
                                                                                         src="images/menu-img-right.png"
                                                                                         alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="exclusive">
                                            <li><span className="icon icon-tag "></span> <a href="listing.html">SPECIAL
                                                OFFER</a></li>
                                            <li><span className="icon icon-sale"></span> <a href="listing.html">UP TO
                                                50% OFF DISCOUNTS</a></li>
                                        </ul>
                                    </div>
                                </dd>
                                <dt className="item compact-hidden"><a href="#"
                                                                       className="btn-main line">Electronics</a></dt>
                                <dd className="item-content">
                                    <div className="navbar-main-submenu">
                                        <div className="row wrapper">
                                            <div className="col-xs-4 col-md-3 col-lg-2">
                                                <div className="submenu-block submenu-block-other"><img
                                                    src="images/temp/category-image-01-159x96.jpg"
                                                    className="img-responsive" alt="" />
                                                    <div className="title"><a className="name"
                                                                              href="listing.html">DRESSES</a> <span
                                                        className="label label-mega">-15%</span></div>
                                                    <ul>
                                                        <li><a href="listing.html">Empty category #10</a></li>
                                                        <li><a href="listing.html">Empty category #11</a></li>
                                                        <li><a href="listing.html">Empty category #12</a></li>
                                                    </ul>
                                                    <p>This is a HTML block; you can create it via admin panel. There
                                                        are many blocks like this on site.</p>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-md-3 col-lg-2">
                                                <div className="submenu-block submenu-block-other"><img
                                                    src="images/temp/category-image-02-159x96.jpg"
                                                    className="img-responsive" alt="" />
                                                    <div className="title"><a className="name"
                                                                              href="listing.html">SHIRTS</a></div>
                                                    <ul>
                                                        <li><a href="listing.html">Empty category #10</a></li>
                                                        <li><a href="listing.html">Empty category #11</a></li>
                                                        <li><a href="listing.html">Empty category #12</a></li>
                                                    </ul>
                                                    <p>This is a HTML block; you can create it via admin panel. There
                                                        are many blocks like this on site.</p>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-md-3 col-lg-2">
                                                <div className="submenu-block submenu-block-other"><img
                                                    src="images/temp/category-image-03-159x96.jpg"
                                                    className="img-responsive" alt="" />
                                                    <div className="title"><a className="name"
                                                                              href="listing.html">COATS</a></div>
                                                    <ul>
                                                        <li><a href="listing.html">Empty category #10</a></li>
                                                        <li><a href="listing.html">Empty category #11</a></li>
                                                    </ul>
                                                    <p>This is a HTML block; you can create it via admin panel. There
                                                        are many blocks like this on site.</p>
                                                </div>
                                            </div>
                                            <div className=" clearfix visible-sm"></div>
                                            <div className="col-xs-4 col-md-3 col-lg-2">
                                                <div className="submenu-block submenu-block-other"><img
                                                    src="images/temp/category-image-04-159x96.jpg"
                                                    className="img-responsive" alt="" />
                                                    <div className="title"><a className="name"
                                                                              href="listing.html">JACKETS</a></div>
                                                    <ul>
                                                        <li><a href="listing.html">Empty category #10</a></li>
                                                        <li><a href="listing.html">Empty category #11</a></li>
                                                        <li><a href="listing.html">Empty category #12</a></li>
                                                    </ul>
                                                    <p>This is a HTML block; you can create it via admin panel. There
                                                        are many blocks like this on site.</p>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-md-3 col-lg-2">
                                                <div className="submenu-block submenu-block-other"><img
                                                    src="images/temp/category-image-05-159x96.jpg"
                                                    className="img-responsive" alt="" />
                                                    <div className="title"><a className="name"
                                                                              href="listing.html">SHORTS</a></div>
                                                    <ul>
                                                        <li><a href="listing.html">Empty category #10</a></li>
                                                        <li><a href="listing.html">Empty category #11</a></li>
                                                        <li><a href="listing.html">Empty category #12</a></li>
                                                    </ul>
                                                    <p>This is a HTML block; you can create it via admin panel. There
                                                        are many blocks like this on site.</p>
                                                </div>
                                            </div>
                                            <div className="col-xs-4 col-md-3 col-lg-2">
                                                <div className="submenu-block submenu-block-other"><img
                                                    src="images/temp/category-image-06-159x96.jpg"
                                                    className="img-responsive" alt="" />
                                                    <div className="title"><a className="name"
                                                                              href="listing.html">JEANS</a></div>
                                                    <ul>
                                                        <li><a href="listing.html">Empty category #10</a></li>
                                                        <li><a href="listing.html">Empty category #11</a></li>
                                                        <li><a href="listing.html">Empty category #12</a></li>
                                                    </ul>
                                                    <p>This is a HTML block; you can create it via admin panel. There
                                                        are many blocks like this on site.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </dd>
                                <dt className="item"><a href="contacts.html" className="btn-main line">Contacts</a></dt>
                                <dd></dd>
                            </dl>


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