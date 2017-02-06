import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import Booklist from './components/Booklist/Booklist';
import EnterBook from './components/Enter-book/Enter-book';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>I Love Books!</h2>
          <EnterBook />
          <Booklist />
        </div>
      </div>
    );
  }
}

export default App;
