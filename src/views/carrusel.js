
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import delfines from '../images/delfines32.jpeg';
import pinguino from '../images/pinguinos.jpg';
import tortugas from '../images/tortugas22.jpeg';


const captionStyle = {
    color: 'black',
  };

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} responsive>
      <Carousel.Item >
        <img
          className=" w-100"
          expand="lg"
          src={pinguino}
          alt="First slide"

        />
        <Carousel.Caption style={captionStyle}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item d-md-block>
        <img
          className=" w-100 "
          expand="lg"
          src={delfines}
          alt="Second slide"
          
        />

        <Carousel.Caption style={captionStyle}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="  w-100"
          expand="lg"
          src={tortugas}
          alt="Third slide"
        />

        <Carousel.Caption style={captionStyle}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
