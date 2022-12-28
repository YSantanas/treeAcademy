import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Badge, Alert } from "antd";

const Planes = () => {
  return (
    <div className="container mt-2 mb-3">
      <h1
        className="text-center text-info pb-3"
        style={{ minHeight: "auto", paddingTop: "2vh", marginTop: "5vh" }}
      >
        Planes
      </h1>

      <Row xs={1} md={3} className="g-2 justify-content-center">
        <Col className="col-md-3 pl-5">
          <Card  style={{ width: "auto" }}>
            <Card.Header className="bg-primary opacity-50 text-white">
            <b>Básico</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>$1,600 /año</Card.Title>
              <Card.Text>
                Este plan permite acceder a 3 cursos completos cada mes.
                <br />
                <ul>
                  <li type="disc">No permite descargar el contenido.</li>
                  <li type="disc">Duración de 4 meses máximo al contenido.</li>
                  <li type="disc">
                    Acceder a clases Sincronas sin posibilidad de grabación.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer class="d-flex justify-content-center pb-2">
              <div className="w-100 px-3 pb-2">
                <Badge.Ribbon text="-15%" color="red">
                  <Button className="btn btn-info text-white opacity-70 w-100">
                    <b> Suscribirse</b>
                  </Button>
                </Badge.Ribbon>
              </div>
            </Card.Footer>
          </Card>
        </Col>



        <Col className="col-md-3 pl-5">
          <Card  style={{ width: "auto" }}>
            <Card.Header className="bg-primary opacity-70 text-white">
            <b>Experto</b>
            </Card.Header>
            <Card.Body>
              <Card.Title><b>$4,000 /año</b></Card.Title>
              <Card.Text>
                Este plan permite acceder a todos los cursos completos cada mes.
                <br />
                <ul>
                  <li type="disc">Permite descargar el contenido.</li>
                  <li type="disc">Tiempo ilimitado al contenido.</li>
                  <li type="disc">Certificación incluida</li>
                  <li type="disc">
                    Acceder a clases Sincronas con posibilidad de grabación si el usuario lo desea.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer class="d-flex justify-content-center pb-2">
              <div className="w-100 px-3 pb-2">
                <Badge.Ribbon text="-15%" color="red">
                  <Button className="btn btn-info text-white opacity-70 w-100">
                    <b> Suscribirse</b>
                  </Button>
                </Badge.Ribbon>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        <Col className="col-md-3 pl-5">
          <Card  style={{ width: "auto" }}>
            <Card.Header className="bg-primary opacity-50 text-white">
            <b>Avanzado</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>$3,000 /año</Card.Title>
              <Card.Text>
                Este plan permite acceder a 5 cursos completos cada mes.
                <br />
                <ul>
                  <li type="disc">No permite descargar el contenido.</li>
                  <li type="disc">Duración de 6 meses máximo al contenido.</li>
                  <li type="disc">
                    Acceder a clases Sincronas con grabación autorizable por el docente.
                  </li>
                </ul>
              </Card.Text>
  

            </Card.Body>
            <Card.Footer class="d-flex justify-content-center pb-2">
              <div className="w-100 px-3 pb-2">
                <Badge.Ribbon text="-15%" color="red">
                  <Button className="btn btn-info text-white opacity-70 w-100">
                    <b> Suscribirse</b>
                  </Button>
                </Badge.Ribbon>
              </div>
            </Card.Footer>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default Planes;
