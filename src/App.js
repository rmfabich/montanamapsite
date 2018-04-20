import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MtImage from './MontanaBackground.jpg';
import MapCarousel from './carousel.js';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// import mt from './mt.svg';
// import legend from './legend.svg';
// import image from './panoramic.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={image} className="image-header"/> */}
          <h1 className="Header-title">MONTANA</h1>
        </header>
        <p className="map">
        {/* {MapCarousel} */}
        {/* <img src={mt}/> */}
        </p>
        <MapCarousel/>
      </div>
    );
  }
}

export default App;
