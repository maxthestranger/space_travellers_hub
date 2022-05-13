import { NavLink } from 'react-router-dom';
import {
  Nav, Container, Col, Row, Image,
} from 'react-bootstrap';
import logo from '../assets/images/planet.png';

const Menubar = () => (
  <Container>
    <Row>
      <Col>
        <h1 className="justify-content-start fs-2 py-3 my-3 mx-3">
          {' '}
          <Image src={logo} alt="logo" width={50} height="auto" />
          {' '}
          Space Traveller Hub
          {' '}
        </h1>
      </Col>
      <Col>
        <Nav className="justify-content-end py-3 my-3">
          <Nav.Item>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-success me-3' : 'text-primary me-3')}
            >
              Rockets
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/mission"
              className={({ isActive }) => (isActive ? 'text-success me-3' : 'text-primary me-3')}
            >
              Missions
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'text-success me-3' : 'text-primary me-3')}
            >
              Profile
            </NavLink>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </Container>
);

export default Menubar;
