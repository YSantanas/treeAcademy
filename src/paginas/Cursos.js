import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Badge from "react-bootstrap/Badge";

const cursos = () => {
  return (
    <div class="container border justify-content-center alert alert-light" style={{ minHeight: "100vh", paddingTop:"5vh", marginTop:"5vh" }}>
      <Tab.Container  id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row >
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1" variant="info">
                Ingenieria  
                <Badge bg="warning" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" variant="info">
                Derecho 
                <Badge bg="warning" pill>
                  15
                </Badge>
              </ListGroup.Item>


              <ListGroup.Item action href="#link3" variant="info">
                Psicologia 
                <Badge bg="warning" pill>
                  10
                </Badge>
              </ListGroup.Item>

              <ListGroup.Item action href="#link4" variant="info">
                Quimica 
                <Badge bg="warning" pill>
                  11
                </Badge>
              </ListGroup.Item>

              <ListGroup.Item action href="#link5" variant="info">
              Odontologia 
                <Badge bg="warning" pill>
                  13
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item action href="#link6" variant="info">
                Medicina  
                <Badge bg="warning" pill>
                  14
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={5}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">Cursos relacionados con la carrera de Ingenieria</Tab.Pane>
              <Tab.Pane eventKey="#link2">Cursos relacionados con la carrera de Derecho</Tab.Pane>
              <Tab.Pane eventKey="#link3">Cursos relacionados con la carrera de Psicologia</Tab.Pane>
              <Tab.Pane eventKey="#link4">Cursos relacionados con la carrera de Quimica</Tab.Pane>
              <Tab.Pane eventKey="#link5">Cursos relacionados con la carrera de Odontologia</Tab.Pane>
              <Tab.Pane eventKey="#link6">Cursos relacionados con la carrera de Medicina</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default cursos;
