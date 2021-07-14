import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel"
      // slide={false}
      // fade={false}
    >
      {props.images.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={slide.image}
              alt="slider image"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
