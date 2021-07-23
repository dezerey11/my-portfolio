import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel"
      // variant="dark"
    >
      {props.images.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              style={{ width: "50%" }}
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
