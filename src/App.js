import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>gBay</h1>
                    <small>yes, granny buy!</small>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="https://github.com/kenanbek">Kenan Bek</a>, 
                    based on <a href="https://twitter.com/krzysu">Kris Urbas</a>, 
                    source code available on <a href="https://github.com/kenanbek/gbay-mobile-web">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
