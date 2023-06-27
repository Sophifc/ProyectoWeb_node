import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import delfin from '../images/delfines32.jpeg';
import pinguino from '../images/pinguinos.jpg';
import tortugas from '../images/tortugas22.jpeg'

const captionStyle = {
    color: 'black',
  };

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pinguino}
          alt="First slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h3>La muerte de un pingüino tras tragar una mascarilla alerta sobre los “residuos de la pandemia”</h3>
          <p>El ejemplar, probablemente desorientado, apareció muerto hace dos semanas en una playa cerca de São Paulo; la necropsia ha desvelado que ingirió una mascarilla ​</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={delfin}
          alt="Second slide"
        />

        <Carousel.Caption style={captionStyle}>
          <h3 >España es el país de Europa con más delfines cautivos: una joven reúne 150.000 firmas para liberarlos</h3>
          <p>La activista por los derechos de los animales Olivia Mandle y la ONG World Animal Protection piden en el Congreso la prohibición de los delfinarios</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tortugas}
          alt="Third slide"
        />

        <Carousel.Caption style={captionStyle}>
          <h3>Una tortuga marina desova por primera vez en una playa de Mallorca</h3>
          <p>
          El ejemplar ha puesto 106 huevos que eclosionarán este verano en el arenal urbano de Can Pere Antoni de Palma
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
