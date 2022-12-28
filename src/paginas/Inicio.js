import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Galeria1 from '../assets/carrusel/galeria1.png';

const Inicio = () => {
  return (


<div class="container justify-content-center"  style={{ minHeight: '100vh', paddingTop: '3vh', marginTop: '3vh' }}>
<Card style={{ width: 'auto' }}>
      <Card.Img variant="top" src={Galeria1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>

);
};
export default Inicio;
