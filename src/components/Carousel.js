import { Carousel as AntCarousel } from 'antd';
import Galeria1 from '../assets/carrusel/galeria1.png';
import Galeria2 from '../assets/carrusel/galeria2.png';
import Galeria3 from '../assets/carrusel/galeria3.png';

const contentStyle = {
  margin: 0,
  height: '400px',
  width: '100%',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const images = [Galeria1, Galeria2, Galeria3];

export const Carousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <AntCarousel afterChange={onChange}>
      {images.map((image) => (
        <div key={image}>
          <div style={contentStyle}>
            <img src={image} alt="Galeria 1" style={imageStyle} />
          </div>
        </div>
      ))}
    </AntCarousel>
  );
};
