import React from 'react';

import HomePage from './pages/HomePage';
import MainPage from './pages/Mainpage/MainPage';
import BestSeller from './pages/BestSeller/BestSeller';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import Categories from './components/Categories/Categories';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { BrowserRouter, Route } from 'react-router-dom';
import AppProvider from './services/AppContext';
function App() {
    return (
        <div>
            {/* <HomePage /> */}
            <AppProvider>
                <BrowserRouter>
                    <MainPage>
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
                    </MainPage>
                </BrowserRouter>
            </AppProvider>
        </div>
    );
}

export default App;
