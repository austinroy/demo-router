import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components//navBar';

class App extends Component {
  render() {
    return (
      <div >
          <NavBar />
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
