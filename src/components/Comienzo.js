import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import profe1 from "../assets/profe1.png";
import profe2 from "../assets/profe2.png";
import profe3 from "../assets/profe3.png";
import profe4 from "../assets/profe4.png";
import profe5 from "../assets/profe5.png";
import profe6 from "../assets/profe6.png";

const fotos = [profe1, profe2, profe3, profe4, profe5, profe6];
const nombres =["Lara","Esteban","Oscar","Daniela","Ana","Rodrigo"]
const carreras =["Derecho","Computación","Ciencias","Odontologia","Medicina","Psicologia"]

const Comienzo = () => {
  return (
    <div
      className="container text-center text-wite bg-white text-muted"
      style={{ minHeight: "100vh" }}
    >
      <h1 class="text-center">Tree Academy</h1>

      <Row xs={1} md={2} className="g-2">
        <Col class="col-md-3 pl-5">
        
          <div class="alert alert-info">
              <h1>Objetivo:</h1>
              <p>hola objetivo</p>
              <hr />
              <p className="mb-0">
                El conocimiento al alcance de todos.
              </p>
            </div>
        
        </Col>

        <Col class="col-md-3 pl-5">
     
          <div class="alert alert-info">
              <h1>Vision:</h1>
             
              <p>hola objetivo</p>
              <hr />
              <p className="mb-0">La raices del mañana.</p>
            </div>
       
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-2">
        <Col class="p-3 mb-2 bg-light text-dark">
          <Row>
            <h1 class="text-center">Reseñas de profesores</h1>
          </Row>
        </Col>

        <Col>
          <Row xs={1} md={2} className="g-5">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={fotos[idx]} />
                  <Card.Body>
                    <Card.Title>{nombres[idx]}</Card.Title>
                    <Card.Text>Carrera: {carreras[idx]}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Comienzo;
