import { useSelector } from 'react-redux';
import Menubar from '../components/Menu';

const {
  Container, Row, Col, ListGroup,
} = require('react-bootstrap');

const Profile = () => {
  const rockets = useSelector((state) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state.rockets.filter((rocket) => rocket.reserved === true));
  const missions = useSelector((state) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state.missions.filter((mission) => mission.reserved === true));
  return (
    <>
      <Menubar />
      <Container className="px-4">
        <Row>
          <Col>
            <h3 className="mb-4">My Missions</h3>
            <ListGroup>
              {rockets && rockets.map((rocket) => (
                <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h3 className="mb-4">My Rockets</h3>
            <ListGroup>
              {missions && missions.map((mission) => (
                <ListGroup.Item key={mission.mission_id}>{mission.rocket_name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
