import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { Badge } from 'antd';

const Planes = () => {
  return (
    <div className="container mt-2 mb-3">
      <h1
        className="text-center text-info pb-3"
        style={{ minHeight: 'auto', paddingTop: '2vh', marginTop: '5vh' }}
      >
        Planes
      </h1>

      <Row
        xs={1}
        md={3}
        className="g-4 justify-content-center mb-5 align-items-center"
      >
        <Col className="col-md-3">
          <div>
            <header
              className="text-white p-3 rounded-top"
              style={{ background: '#009EFF' }}
            >
              <span className="fw-bolder">Básico</span>
            </header>
            <section className="p-3 rounded-bottom d-flex flex-column rounded-bottom border border-light shadow">
              <div className="d-flex align-items-end mb-3">
                <h2 className="fw-bold display-6">$1,600</h2>
                <h6 className="text-muted">/año</h6>
              </div>
              <div className="d-flex flex-column gap-3">
                Este plan permite acceder a 3 cursos completos cada mes.
                <ul>
                  <li type="disc">No permite descargar el contenido.</li>
                  <li type="disc">Duración de 4 meses máximo al contenido.</li>
                  <li type="disc">
                    Acceder a clases Sincronas sin posibilidad de grabación.
                  </li>
                </ul>
              </div>
              <div className="w-100 px-2 mt-2 mb-1">
                <Badge.Ribbon text="-15%" color="red">
                  <Button className="btn btn-primary text-white w-100 fw-bold">
                    Suscríbete
                  </Button>
                </Badge.Ribbon>
              </div>
            </section>
          </div>
        </Col>

        <Col className="col-md-3">
          <div>
            <header
              className="text-white p-3 rounded-top"
              style={{ background: '#4B56D2' }}
            >
              <span className="fw-bolder">Avanzado</span>
            </header>
            <section className="p-3 rounded-bottom d-flex flex-column rounded-bottom border border-light shadow">
              <div className="d-flex align-items-end mb-3">
                <h2 className="fw-bold display-6">$3,000</h2>
                <h6 className="text-muted">/año</h6>
              </div>
              <div className="d-flex flex-column gap-3">
                Este plan permite acceder a 5 cursos completos cada mes.
                <ul>
                  <li type="disc">No permite descargar el contenido.</li>
                  <li type="disc">Duración de 6 meses máximo al contenido.</li>
                  <li type="disc">
                    Acceder a clases Sincronas con grabación autorizable por el
                    docente.
                  </li>
                </ul>
              </div>
              <div className="w-100 px-2 mt-2 mb-1">
                <Badge.Ribbon text="-15%" color="red">
                  <Button className="btn btn-primary text-white opacity-70 w-100 fw-bold">
                    Suscríbete
                  </Button>
                </Badge.Ribbon>
              </div>
            </section>
          </div>
        </Col>

        <Col className="col-md-3">
          <div>
            <header
              className="text-white p-3 rounded-top"
              style={{ background: '#472183' }}
            >
              <span className="fw-bolder">Experto</span>
            </header>
            <section className="p-3 rounded-bottom d-flex flex-column rounded-bottom border border-light shadow">
              <div className="d-flex align-items-end mb-3">
                <h2 className="fw-bold display-6">$4,000</h2>
                <h6 className="text-muted">/año</h6>
              </div>
              <div className="d-flex flex-column gap-3">
                Este plan permite acceder a todos los cursos completos cada mes.
                <ul>
                  <li type="disc">Permite descargar el contenido.</li>
                  <li type="disc">Tiempo ilimitado al contenido.</li>
                  <li type="disc">Certificación incluida</li>
                  <li type="disc">
                    Acceder a clases Sincronas con posibilidad de grabación si
                    el usuario lo desea.
                  </li>
                </ul>
              </div>
              <div className="w-100 px-2 mt-2 mb-1">
                <Badge.Ribbon text="-15%" color="red">
                  <Button className="btn btn-primary text-white opacity-70 w-100 fw-bold">
                    Suscríbete
                  </Button>
                </Badge.Ribbon>
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Planes;
