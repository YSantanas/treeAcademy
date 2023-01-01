import React, { useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { getProfessors } from '../features/professors/professors.api';

const Comienzo = () => {
  const dispatch = useDispatch();
  const { professors } = useSelector((state) => state.professors);
  useEffect(() => {
    dispatch(getProfessors());
  }, [dispatch]);

  return (
    <div
      className="container text-center text-wite bg-white text-muted"
      style={{ minHeight: '80vh', paddingTop: '2vh', textAlign: 'center' }}
    >
      <h1 className="text-center text-dark">Tree Academy</h1>

      <Row xs={1} md={2} className="g-2 justify-content-center">
        <Col className="col-md-3 pl-5 w-50">
          <div className="alert alert-info  w-100">
            <h1>Objetivo:</h1>
            <p>hola objetivo</p>
            <hr />
            <p className="mb-0">El conocimiento al alcance de todos.</p>
          </div>
        </Col>

        <Col className="col-md-3 pl-5 w-50">
          <div className="alert alert-info">
            <h1>Vision:</h1>

            <p>hola objetivo</p>
            <hr />
            <p className="mb-0">La raices del mañana.</p>
          </div>
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-2">
        <Col className="p-3 mb-2 bg-light text-dark">
          <Row>
            <h1 className="text-center">Reseñas de profesores</h1>
          </Row>
        </Col>

        <Col>
          <Row xs={1} md={2} className="g-5">
            {professors?.map((professor) => (
              <Col key={professor.id}>
                <Card>
                  <Card.Img variant="top" src={professor.avatar} />
                  <Card.Body>
                    <Card.Title>
                      {professor.name} {professor.lastname}
                    </Card.Title>
                    <Card.Text>Carrera: {professor.career?.name}</Card.Text>

                    {professor.courses?.map((course) => (
                      <span key={course.id}>{course.name}</span>
                    ))}
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
