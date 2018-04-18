import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mt from './mt.svg';
import legend from './legend.svg';
import image from './panoramic.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="image-header"/>
          <h1 className="Header-title">Montana</h1>
        </header>
        <p className="map">
        <img src={mt}/>
        </p>
      </div>
    );
  }
}

export default App;
