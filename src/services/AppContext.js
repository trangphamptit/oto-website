import React, { Component } from 'react';
import Products from './Data.js';
import { getAllBrands } from './getbrands';
import { getAllCategories } from './getcategories';

export const AppContext = React.createContext();
class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: Products,
            brands: [],
            categories: [],
            cart: [],
            getBrands: async () => {
                const brands = await getAllBrands();
                this.setState({ brands });
            },

            getCategories: async () => {
                const categories = await getAllCategories();
                this.setState({ categories });
            },
        };
    }

    addToCart = product => {
        this.setState({ cart: this.state.cart.concat(product) });
        console.log('cart', this.state.cart);
    };

    increment = cart => {};
    render() {
        return (
            <AppContext.Provider
                value={{ ...this.state, addToCart: this.addToCart }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
