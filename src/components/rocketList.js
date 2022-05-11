import {
  Container, Row, Col, Image, Button,
} from 'react-bootstrap';
import rocket from '../assets/images/rocket.png';

const RocketList = () => (
  <li>
    <Container>
      <Row>
        <Col xs lg={3}>
          <Image src={rocket} width="100%" height="auto" rounded alt="image" />
        </Col>
        <Col>
          <h2>Falcon 1</h2>
          <p>
            The Rockets section displays a list of all available SpaceX rockets.
            Users can book each rocket by clicking the reservation button or
            cancel the previously made booking. The same layout is used to form
            the Dragons section added only if your team has 3 members.
          </p>
          <Button variant="primary">Reserve Rocket</Button>
        </Col>
      </Row>
    </Container>
  </li>
);

export default RocketList;
