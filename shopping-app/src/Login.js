import React, {Component} from 'react';

class MyLogin extends React.Component{
    render(){
        return(
            <div className="myLogin">
            <section className="container">
                <nav className="breadcrumbs"><a href="#">Home</a> <span className="divider">›</span> Account Login</nav>
            </section>
            <section className="container">
                <div className="row">
                    <section className="col-sm-6 col-md-6 col-lg-6">
                        <section className="container-with-large-icon login-form">
                            <div className="large-icon"><img src="images/large-icon-user.png" alt="" /></div>
                            <div className="wrap">
                                 <h3>NEW CUSTOMER</h3>
                                 <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep
                                track of the orders you have previously made.</p>
                                <br />
                                <button className="btn btn-mega" onClick="location.href='#';">CONTINUE</button>
                            </div>
                        </section>
                    </section>
                    <section className="col-sm-6 col-md-6 col-lg-6">
                        <section className="container-with-large-icon login-form">
                            <div className="large-icon"><img src="images/large-icon-lock.png" alt="" /></div>
                            <div className="wrap">
                                <h3>RETURNING CUSTOMER</h3>
                                <form action="#" id="form-returning">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <div className="form-link"><a href="#">Forgot Your Password?</a></div>
                                    <button type="submit" className="btn btn-mega"
                                            onClick="document.getElementById('form-returning').submit();">Login
                                    </button>
                                </form>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
            </div>
        );
    }
}

export default MyLogin;