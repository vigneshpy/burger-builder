import React, { Component } from 'react';
// import './App.css';
import Layout from '../src/Components/Layout/Layout';
import BurgerBuilder from '../src/Containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Layout className="App">
      <BurgerBuilder></BurgerBuilder>
    </Layout>
    );
  }
}

export default App;
