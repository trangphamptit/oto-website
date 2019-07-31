import React, { Component } from 'react';
import Products from './Data.js';
import { getAllBrands } from './getbrands';
export const AppContext = React.createContext();
class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: Products,
            brands: [],
            getBrands: async () => {
                const brands = await getAllBrands();
                this.setState({ brands });
            },
        };
    }

    render() {
        return (
            <AppContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
