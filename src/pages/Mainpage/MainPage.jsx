import React, { Component } from 'react';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Footer/Footer';
class MainPage extends Component {
  render() {
    return (
      <div className="mainpage">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainPage;
