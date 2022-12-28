import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Badge, Space } from "antd";

const Planes = () => {
  return (
    <div className="container mt-2 mb-3">


      <h1 className="text-center text-info pb-3" style={{ minHeight: 'auto', paddingTop: '2vh', marginTop: '5vh' }}>Planes</h1>

      <Row xs={1} md={3} className="g-2 justify-content-center">
        <Col className="col-md-3 pl-5">
          <Card border="info" style={{ width: "auto" }}>
            <Card.Header className="bg-success opacity-50 text-white">
              Básico
            </Card.Header>
            <Card.Body>
              <Card.Title>Plan Básico</Card.Title>
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
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Badge.Ribbon text="Pagar" color="red">
                  <Card title="Pushes open the window" size="small">
                    <Button className="btn btn-info text-white opacity-70">
                      Pagar
                    </Button>
                  </Card>
                </Badge.Ribbon>
              </Space>
            </Card.Footer>
          </Card>
        </Col>

        <Col className="col-md-3 pl-5">
          <Card border="info" style={{ width: "auto" }}>
            <Card.Header className="bg-success opacity-50 text-white">
              Avanzado
            </Card.Header>
            <Card.Body>
              <Card.Title>Plan Avanzado</Card.Title>
              <Card.Text>
                Este plan permite acceder a 5 cursos completos cada mes.
                <br />
                <ul>
                  <li type="disc">No permite descargar el contenido.</li>
                  <li type="disc">Duración de 6 meses máximo al contenido.</li>
                  <li type="disc">
                    Acceder a clases Sincronas con posibilidad de grabación con
                    previa autorización del profesor.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer class="d-flex justify-content-center pb-2">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Badge.Ribbon text="Pagar" color="red">
                  <Card title="Pushes open the window" size="small">
                  <Button className="btn btn-info text-white opacity-70">
                      Pagar
                    </Button>
                  </Card>
                </Badge.Ribbon>
              </Space>
            </Card.Footer>
          </Card>
        </Col>

        <Col className="col-md-3 pl-5">
          <Card border="info" style={{ width: "auto" }}>
            <Card.Header className="bg-success opacity-50 text-white">
              Experto
            </Card.Header>
            <Card.Body>
              <Card.Title>Plan Experto</Card.Title>
              <Card.Text>
                Este plan permite acceder a todos los cursos completos cada mes.
                <br />
                <ul>
                  <li type="disc">Permite descargar el contenido.</li>
                  <li type="disc">Tiempo ilimitado al contenido</li>
                  <li type="disc">
                    Acceder a clases Sincronas con posibilidad de grabación.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer class="d-flex justify-content-center pb-2">
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <Badge.Ribbon text="Pagar" color="red">
                  <Card title="Pushes open the window" size="small">
                  <Button className="btn btn-info text-white opacity-70">
                      Pagar
                    </Button>
                  </Card>
                </Badge.Ribbon>
              </Space>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Planes;
