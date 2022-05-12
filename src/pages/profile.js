import { useSelector } from 'react-redux';

const {
  Container, Row, Col, ListGroup,
} = require('react-bootstrap');

const Profile = () => {
  const rockets = useSelector((state) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state.rockets.filter((rocket) => rocket.reserved === true));
  const missions = useSelector((state) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state.mission.filter((mission) => mission.reserved === true));
  return (
    <>
      <Container className="px-4">
        <Row>
          <Col>
            <h2>My Missions</h2>
            <ListGroup>
              {rockets.map((rocket) => (
                <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h2>My Rockets</h2>
            <ListGroup>
              {missions.map((mission) => (
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
