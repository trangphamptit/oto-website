import React from 'react';

import HomePage from './pages/HomePage';
import MainPage from './pages/Mainpage/MainPage';
import BestSeller from './pages/BestSeller/BestSeller';
import Details from './pages/Details/Details';
import Products from './pages/Products/Products';
import Categories from './components/Categories/Categories';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { BrowserRouter, Route } from 'react-router-dom';
import AppProvider from './services/AppContext';
import Modal from './components/Modals/Modal';
import Cart from './components/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
function App() {
    return (
        <div>
            {/* <HomePage /> */}
            <AppProvider>
                <BrowserRouter>
                    <MainPage>
                        <Modal />
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/products" component={Products}></Route>
                        <Route
                            path="/bestseller"
                            component={BestSeller}
                        ></Route>
                        <Route
                            path="/categories"
                            component={Categories}
                        ></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={Signup}></Route>

                        <Route path="/details/:id" component={Details}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/checkout" component={Checkout}></Route>
                    </MainPage>
                </BrowserRouter>
            </AppProvider>
        </div>
    );
}

export default App;
