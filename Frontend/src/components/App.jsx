import React from "react";

function App(){
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">ShopNow</a>
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign in</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="./img/iphone13.jpg" alt="product" />
                        </a>
                        <div className="card-body">
                            <a href="product.html">
                                <h2>Iphone 13</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="price">
                                ₹74999
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="./img/adidas-shoes.jpg" alt="product" />
                        </a>
                        <div className="card-body">
                            <a href="product.html">
                                <h2>Iphone 13</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="price">
                                ₹74999
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="./img/shirt.jpg" alt="product" />
                        </a>
                        <div className="card-body">
                            <a href="product.html">
                                <h2>Iphone 13</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="price">
                                ₹74999
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="./img/Headphone.jpg" alt="product" />
                        </a>
                        <div className="card-body">
                            <a href="product.html">
                                <h2>Iphone 13</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                            </div>
                            <div className="price">
                                ₹74999
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="./img/AppleMacbook.jpg" alt="product" />
                        </a>
                        <div className="card-body">
                            <a href="product.html">
                                <h2>Iphone 13</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star-half-o"></i></span>
                            </div>
                            <div className="price">
                                ₹74999
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="row center">All rights reserved.</footer>
        </div>
    );
}

export default App;