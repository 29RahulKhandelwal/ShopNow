import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import data from "../data";
import Product from "./Product";

function App(){
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">ShopNow</a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign in</a>
                    </div>
                </header>
                <main>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                    <div className="row center">
                        {
                            data.products.map((product)=>{
                                return <Product key={product._id} product={product} />
                            })
                        }
                    </div>
                </main>
                <footer className="row center">All rights reserved.</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;