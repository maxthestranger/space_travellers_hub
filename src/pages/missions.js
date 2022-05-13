import { useDispatch, useSelector } from 'react-redux';
import {
  Container, Row, Col, Table,
} from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/mission/mission';
import MissionList from '../components/missionList';
import Menubar from '../components/Menu';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  return (
    <>
      <Menubar />
      <Container className="px-5">
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    Mission
                  </th>
                  <th>
                    Description
                  </th>
                  <th>
                    Status
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {missions.map((mission) => (
                  <MissionList
                    key={mission.mission_id}
                    missionName={mission.mission_name}
                    description={mission.description}
                    activated={mission.reserved}
                    joinMission={() => dispatch(joinMission({ id: mission.mission_id }))}
                    leaveMission={() => dispatch(leaveMission({ id: mission.mission_id }))}
                  />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Missions;
