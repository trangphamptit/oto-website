import React, { Component } from 'react';
import Products from './Data.js';
export const AppContext = React.createContext();
class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Products,
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
