import { useSelector } from 'react-redux';
import Menubar from '../components/Menu';

const {
  Container, Row, Col, ListGroup,
} = require('react-bootstrap');

const Profile = () => {
  const rockets = useSelector((state) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    state.rockets.filter((rocket) => rocket.reserved === true));
  // const missions = useSelector((state) =>
  //   // eslint-disable-next-line implicit-arrow-linebreak
  //   state.mission.filter((mission) => mission.reserved === true));
  return (
    <>
      <Menubar />
      <Container className="px-4">
        <Row>
          <Col>
            <h2>My Missions</h2>
            <ListGroup>
              {rockets && rockets.map((rocket) => (
                <ListGroup.Item key={rocket.id}>{rocket.rocket_name}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h2>My Rockets</h2>
            <ListGroup>
              {/* {missions && missions.map((mission) => (
                <ListGroup.Item key={mission.mission_id}>{mission.rocket_name}</ListGroup.Item>
              ))} */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
