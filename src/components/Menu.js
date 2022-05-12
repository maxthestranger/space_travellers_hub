import {
  Nav, Container, Col, Row,
} from 'react-bootstrap';

const Menubar = () => (
  <Container>
    <Row>
      <Col sm={4}>
        <h1 className="justify-content-start py-3 my-3 mx-3"> Space Traveller Hub </h1>
      </Col>
      <Col sm={8}>
        <Nav className="justify-content-end py-3 my-3" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Rockets</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Mission">Mission</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/Profile">Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>

  </Container>
);

export default Menubar;
