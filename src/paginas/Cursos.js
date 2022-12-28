import { Card } from 'antd';
import ImgCarrera from '../assets/carrera.jpg';

const gridStyle = {
  width: '15%',
  textAlign: 'center',
  margin: '2px',
  
  background: '#ECF6FF'
};



const Cursos = () => {
  return (
    <div
      className="container mt-2 mb-3"
      
    >
       <h1 className="text-center text-info py-3">Cátalogo</h1>
     

    <Card>

    <Card.Grid style={gridStyle}>Ingenieria</Card.Grid>
    <Card.Grid style={gridStyle}>Derecho</Card.Grid>
    <Card.Grid style={gridStyle}>Psicologia</Card.Grid>
    <Card.Grid style={gridStyle}>Odontologia</Card.Grid>
    <Card.Grid style={gridStyle}>Medicina</Card.Grid>
    <Card.Grid style={gridStyle}>Veterinaria</Card.Grid>
    <Card.Grid style={gridStyle}>Filosofia</Card.Grid>
  </Card>

    </div>
  );
};

export default Cursos;
