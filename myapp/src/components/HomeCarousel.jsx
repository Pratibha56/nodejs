import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function HomeCarousel() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg" alt='' />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg" alt='' />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt='' />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}
