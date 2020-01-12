import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const topbar = props => (
    <header id="header">
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="contactinfo">
                            <ul className="nav nav-pills">
                                <li><a href="#"><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                                <li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="social-icons pull-right">
                            <ul className="nav navbar-nav">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="navbar-header">
                            <button type="button"className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="mainmenu pull-left">
                            <div className="logo pull-left">
                                <Link to='/'><img src="images/home/logo.png" alt=""/></Link>
                            </div>
                            <ul className="nav navbar-nav collapse navbar-collapse">
                                <li>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li><Link to='/cart'>My Cart</Link></li>

                                <li>
                                    <Link to='/cart'>
                                        <ButtonContainer>
                                            <span className='mr-2'>
                                                <i className='fa fa-shopping-cart'></i>
                                            </span>
                                            My Cart
                                        </ButtonContainer>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
`

export default topbar;