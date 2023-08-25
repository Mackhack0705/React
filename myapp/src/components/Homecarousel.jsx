import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../style/style.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Homecarousel = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img src='https://wallpaperaccess.com/full/109672.jpg' alt=''></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://cdn.wallpapersafari.com/37/84/jF1ZcU.jpg' alt=''></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg' alt=''></img>
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

export default Homecarousel
