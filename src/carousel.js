import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import firstImage from './mt-tracts-sqrt.svg';
import secondImage from './mt-tracts-log.svg';
import finalImage from './mt.svg';

const items = [
  {
    src: firstImage,
    altText: 'Slide 1',
    caption: 'Used D3 geo-projection to generate choropleth with Viridis color scheme (scale Sequential)'
  },
  {
    src: secondImage,
    altText: 'Slide 2',
    caption: 'Used D3 geo-projection to generate choropleth with Viridis color scheme (scale Log)'
  },
  {
    src: finalImage,
    altText: 'Slide 3',
    caption: 'Used D3 geo-projection to generate choropleth with Scale-Chromatic OrRd color scheme (scale Threshold)'
  }
];

class MapCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, paused: false };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.pause = this.pause.bind(this);
    this.cycle = this.cycle.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  pause() {
      this.setState({ paused: true});
  }

  cycle() {
      this.setState({ paused: false});
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        interval={0}
        next={this.next}
        previous={this.previous}
        pause={"hover"}
        // hoverStart={this.paused}
        // hoverEnd={this.cycle}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default MapCarousel;