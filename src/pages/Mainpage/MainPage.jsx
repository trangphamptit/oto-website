import React, { Component } from 'react';
import '../../components/Header';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default MainPage;
