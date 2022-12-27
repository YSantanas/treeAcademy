import React from 'react';

import Carousel from 'react-bootstrap/Carousel';


import Galeria1 from '../assets/carrusel/galeria1.png';
import Galeria2 from '../assets/carrusel/galeria2.png';
import Galeria3 from '../assets/carrusel/galeria3.png';



const Header = () => {
  return (
    <div  expand="lg">
     


     <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block mx-auto img-fluid"
          src={Galeria1}
          alt="First slide"
        />
        <Carousel.Caption class="d-none d-md-block text-center text-white  bg-success bg-gradient pt-2 pb-1 opacity-50" >
          <h3>La mejor educación a tu alcance</h3>
          <p>  .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto img-fluid"
          src={Galeria2}
          alt="Second slide"
        />

        <Carousel.Caption class="d-none d-md-block text-center text-white bg-success bg-gradient pt-2 pb-1 opacity-50">
          <h3>Los mejores Profesores</h3>
          <p>  .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto img-fluid"
          src={Galeria3}
          alt="Third slide"
        />

        <Carousel.Caption class="d-none d-md-block text-center text-white bg-success bg-gradient pt-2 pb-1 opacity-50">
          <h3>Encuentra tu carrera</h3>
          <p>  .</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Header