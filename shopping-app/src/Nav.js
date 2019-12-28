import React, {Component} from 'react';

class MyNav extends React.Component{
    render(){
        return(
<nav id="off-canvas-menu">
    <div id="off-canvas-menu-title">MENU<span className="icon icon-cancel-3" id="off-canvas-menu-close"></span></div>
    <ul className="expander-list">
        <li><span className="name"><span className="expander">-</span> <a href="index.html">Home</a></span>
            <ul>
                <li><span className="name"><a href="index_header_alt.html">Header Alternative</a></span></li>
                <li><span className="name"><a href="index_scroll_slider.html">Scroll Slider</a></span></li>
                <li><span className="name"><a href="home_simpleslider.html">Simple Slider</a></span></li>
                <li><span className="name"><a href="home_boxed.html">Boxed</a></span></li>
                <li><span className="name"><a href="home_boxed_with_banners.html">Boxed with banners</a></span></li>
                <li><span className="name"><a href="home_fluid_live_chat.html">Fluid chat</a></span></li>
                <li><span className="name"><a href="home_isotope.html">Isotope</a></span></li>
                <li><span className="name"><a href="home_isotope_newsletter_popup.html">Newsletter popup</a></span></li>
                <li><span className="name"><a href="home_megamenu.html">Megamenu </a></span></li>
                <li><span className="name"><a href="home_usual_menu.html">Usual Menu</a></span></li>
                <li><span className="name"><a href="index_1400.html">Maximum width 1400</a></span></li>
                <li><span className="name"><a href="index_1600.html">Maximum width 1600</a></span></li>
                <li><span className="name"><a href="index_noresponsive.html">Noresponsive</a></span></li>
            </ul>
        </li>
        <li><span className="name"><span className="expander">-</span> <a href="index.html">Layouts</a></span>
            <ul>
                <li><span className="name"><a href="index_corporate.html">Layout Corporative</a></span></li>
                <li><span className="name"><a href="index_electronics.html">Layout Electronics</a></span></li>
                <li><span className="name"><a href="index_food.html">Layout Food</a></span></li>
                <li><span className="name"><a href="index_kids.html">Layout Kids</a></span></li>
                <li><span className="name"><a href="home_boxed_background.html">Background Isotope</a></span></li>
                <li><span className="name"><a href="home_creative.html">Creative</a></span></li>
                <li><span className="name"><a href="home_sidebar.html">Left Column</a></span></li>
            </ul>
        </li>
        <li><span className="name"><span className="expander">-</span> <a href="listing.html">Listing </a></span>
            <ul>
                <li><span className="name"><a href="listing_big_products.html"> Usual </a></span></li>
                <li><span className="name"><a href="listing_big_products_no_leftcolumn.html"> Without Left Column </a> </span>
                </li>
                <li><span className="name"><a href="listing_small_products.html"> Small Previews </a></span></li>
                <li><span className="name"><a href="listing_small_products_no_leftcolumn.html"> Small Previews Without Left Column </a></span>
                </li>
            </ul>
        </li>
        <li><span className="name"><span className="expander">-</span> <a href="product_default.html">Product</a></span>
            <ul>
                <li><span className="name"><a href="product_default.html"> Product Page </a> </span></li>
                <li><span className="name"><a href="product_default_left_preview.html"> Product Left Preview</a> </span>
                </li>
                <li><span className="name"><a
                    href="product_default_left_preview_tabs.html">Product Left Preview + Tabs</a></span></li>
                <li><span className="name"><a href="product_right_big_product.html">Product Big</a></span></li>
                <li><span className="name"><a href="product_right_customblock.html">Product + Custom Block</a></span>
                </li>
                <li><span className="name"><a href="product_right_customblock_advanced.html">Product + Custom Block Advanced</a></span>
                </li>
                <li><span className="name"><a
                    href="product_right_left_preview_tabs_video.html">Product + Video</a></span></li>
                <li><span className="name"><a
                    href="product_right_small_products.html">Product + Small Products</a></span></li>
            </ul>
        </li>
        <li><span className="name"><span className="expander">-</span> <a href="blog.html">Blog</a></span>
            <ul>
                <li><span className="name"><a href="blog_posts_table_view.html"> Table View </a> </span></li>
                <li><span className="name"><a href="blog_single_post.html"> Single Post </a></span></li>
            </ul>
        </li>
        <li><span className="name"><span className="expander">-</span> <a href="gallery_3d.html">Gallery</a></span>
            <ul>
                <li><span className="name"><a href="gallery_3d.html"> Gallery: 3D Effect </a> </span></li>
                <li><span className="name"><a href="gallery_2columns.html"> Gallery: 2 Columns </a></span></li>
                <li><span className="name"><a href="gallery_3columns.html"> Gallery: 3 Columns </a></span></li>
                <li><span className="name"><a href="gallery_4columns.html"> Gallery: 4 Columns </a> </span></li>
                <li><span className="name"><a
                    href="gallery_4columns_nospace.html"> Gallery: 4 Columns no space </a> </span></li>
                <li><span className="name"> <a href="gallery_single_page.html"> Gallery: Single Page </a> </span></li>
            </ul>
        </li>
        <li><span className="name"><span className="expander">-</span> <a href="typography.html">Pages</a></span>
            <ul>
                <li><span className="name"><a href="typography.html">Typography</a></span></li>
                <li><span className="name"><a href="infographic.html">Infographic</a></span></li>
                <li><span className="name"><a href="our_office.html">Our Office</a></span></li>
                <li><span className="name"><a href="our_store.html">Our Store</a></span></li>
                <li><span className="name"><a href="our_services.html">Our Services</a></span></li>
                <li><span className="name"><a href="login.html">Login</a></span></li>
                <li><span className="name"><a href="team_members.html">Team Members</a></span></li>
                <li><span className="name"><a href="shopping_cart.html">Shopping Cart</a></span></li>
                <li><span className="name"><a href="checkout.html">Checkout</a></span></li>
                <li><span className="name"><a href="compare.html">Products Compare</a></span></li>
                <li><span className="name"><a href="pricing_tables.html">Pricing Tables </a> </span></li>
                <li><span className="name"><a href="video_section.html"> Video section </a></span></li>
                <li><span className="name"><a href="faq.html">Faq</a></span></li>
                <li><span className="name"><a href="delivery.html">Delivery</a></span></li>
                <li><span className="name"><a href="sitemap.html"> Sitemap</a></span></li>
            </ul>
        </li>
        <li><span className="name"> <span className="expander">-</span> <a href="listing.html">Women</a> </span>
            <ul>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-dress"></span>Dresses</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Club Dresses</a></span></li>
                        <li><span className="name"><a href="listing.html">Evening Dresses</a></span></li>
                        <li><span className="name"><a href="listing.html">Prom Dresses</a></span></li>
                    </ul>
                </li>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-shirts"></span>Shirts</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #1</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #2</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #3</a></span></li>
                    </ul>
                </li>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-coats"></span>Coats</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #4</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #5</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #6</a></span></li>
                    </ul>
                </li>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-jackets"></span>Jackets</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #7</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #8</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #9</a></span></li>
                    </ul>
                </li>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-shorts"></span>Shorts</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #10</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #11</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #12</a></span></li>
                    </ul>
                </li>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-jeans"></span>Jeans</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #10</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #11</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #12</a></span></li>
                    </ul>
                </li>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-skirts"></span>Skirts</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #16</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #17</a></span></li>
                    </ul>
                </li>
                <li><span className="name"> <span className="expander">-</span> <a href="listing.html"><span
                    className="icon m-icon-lingerie"></span>Lingerie</a> </span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #18</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #19</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #20</a></span></li>
                    </ul>
                </li>
                <li><span className="name"><a href="listing.html"><span
                    className="icon m-icon-tops"></span>Tops</a></span>
                    <ul>
                        <li><span className="name"><a href="listing.html">Empty category #21</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #22</a></span></li>
                        <li><span className="name"><a href="listing.html">Empty category #23</a></span></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><span className="name"><a href="listing.html">ELECTRONICS</a></span></li>
        <li><span className="name"><a href="contacts.html">Contacts</a></span></li>
    </ul>
</nav>
        );
    }
}

export default MyNav;