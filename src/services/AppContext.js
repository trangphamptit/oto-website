import React, { Component } from 'react';

import { getAllBrands } from './getbrands';
import { getAllCategories } from './getcategories';
import { getAllProducts } from './getproducts';
export const AppContext = React.createContext();
class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            brands: [],
            categories: [],
            cart: [],
            modalOpen: false,

            getBrands: async () => {
                const brands = await getAllBrands();
                this.setState({ brands });
            },

            getCategories: async () => {
                const categories = await getAllCategories();
                this.setState({ categories });
            },
            getProducts: async () => {
                const products = await getAllProducts();
                this.setState({ products });
            },
        };
    }

    addToCart = item => {
        item.cartQuantity = 1;
        this.setState({ cart: this.state.cart.concat(item) });
        this.openModal();
        console.log('cart', this.state.cart);
    };

    increment = item => {
        let tempCart = [...this.state.cart];

        let index = tempCart.indexOf(item);
        tempCart[index].cartQuantity += 1;
        console.log('temp', tempCart);
        this.setState({ cart: [...tempCart] });
        console.log('hi', this.state.cart);
    };
    decrement = item => {
        let tempCart = [...this.state.cart];
        let index = tempCart.indexOf(item);
        tempCart[index].cartQuantity -= 1;
        this.setState({ cart: [...tempCart] });
        console.log('hi', this.state.cart);
    };

    removeItem = _id => {
        let tempCart = this.state.cart.filter(item => item._id !== _id);
        this.setState({ cart: tempCart });
    };

    getTotal = cart => {
        let total = 0;
        cart.map(item => {
            total += item.cartQuantity * item.price;
        });
        return total;
    };
    login = user => {
        this.setState({ user });
        localStorage.setItem('user', JSON.stringify(user));
    };

    openModal = () => {
        this.setState(() => {
            return { modalOpen: true };
        });
    };

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };

    login = user => {
        this.setState({ user });
        localStorage.setItem('user', JSON.stringify(user));
    };

    logout = user => {
        this.setState({ user: null });
        localStorage.removeItem('user');
    };
    render() {
        return (
            <AppContext.Provider
                value={{
                    ...this.state,
                    addToCart: this.addToCart,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    getTotal: this.getTotal,
                    login: this.login,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    login: this.login,
                    logout: this.logout,
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
