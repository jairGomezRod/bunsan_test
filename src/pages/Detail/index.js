import "./Detail.css";
import { Container, Row, Col, Stack, Button} from "react-bootstrap";

function Detail() {
  return (
    <Container>
      <Stack direction="horizontal" gap={3}>
        <div className="vr" />
        <div>
          <h5>Departamento 1</h5>
        </div>
        <div className="ms-auto">
          <h5>
            PRESUPUESTO TOTAL: <b>$2500</b>{" "}
          </h5>
        </div>
      </Stack>

      <Row className="mt-5 justify-content-md-center">
        <Col md={3} className="node ">
          <div className="node__item">
            Manager A 
            <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
            <hr />
            <b>$300</b>
          </div>
        </Col>

        <Col md={6} className="node ">
          <Stack>
            <Row className="node__item">
              <Col md={6} className=" borderNode">
                <div className="node__item">
                  Manager B 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$300</b>
                </div>
                <div className="node__item">
                  <Button variant="outline-dark">Agregar otro</Button>
                </div>
              </Col>

              <Col md={6} className="borderNode">
                <div className="node__item">
                  QA Tester 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$500</b>
                </div>
                <div className="node__item">
                  Developer 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$1000</b>
                </div>
                <div className="node__item">
                  Developer 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$1000</b>
                </div>
                <div className="node__item">
                  <Button variant="outline-dark">Agregar otro</Button>
                </div>
              </Col>
            </Row>

            <Row className="node__item">
              <Col md={6} className=" borderNode">
                <div className="node__item">
                  Manager B 2 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$300</b>
                </div>
                <div className="node__item">
                  <Button variant="outline-dark">Agregar otro</Button>
                </div>
              </Col>

              <Col md={6} className="borderNode">
                <div className="node__item">
                  QA Tester 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$500</b>
                </div>
                <div className="node__item">
                  Developer 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$1000</b>
                </div>
                <div className="node__item">
                  <Button variant="outline-dark">Agregar otro</Button>
                </div>
              </Col>
            </Row>

            <Row className="node__item">
              <Col md={6} className=" borderNode">
                <div className="node__item">
                  Manager B 3 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$300</b>
                </div>
                <div className="node__item">
                  <Button variant="outline-dark">Agregar otro</Button>
                </div>
              </Col>

              <Col md={6} className="borderNode">
                <div className="node__item">
                  QA Tester 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$500</b>
                </div>
                <div className="node__item">
                  Developer 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i> 
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$1000</b>
                </div>
                <div className="node__item">
                  Developer 
                  <i class="icon icon__edit fa-regular fa-pen-to-square"></i>
                  <i class="icon icon__trash fa-solid fa-trash"></i>
                  <hr />
                  <b>$1000</b>
                </div>
                <div className="node__item">
                  <Button variant="outline-dark">Agregar otro</Button>
                </div>
              </Col>
            </Row>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;

/*
<!-- Col md={2} className="node  borderNode"> 
          abuelo
        </Col>
        <Col md={2} className="node"> 
          agregar más
        </Col-->
*/
