import { PropTypes } from 'prop-types';
import {
  Button, Badge,
} from 'react-bootstrap';

const MissionList = ({
  missionName,
  description,
  activated,
  joinMission,
  leaveMission,
}) => (
  <tr className="py-3 my-3">
    <td>
      <h3>
        {' '}
        {missionName}
        {' '}
      </h3>
    </td>
    <td>
      { description }
    </td>
    <td>
      {activated ? (
        <Badge pill bg="info">
          Active member
        </Badge>
      ) : (
        <Badge pill bg="dark">
          Not a member
        </Badge>
      )}
    </td>
    <td>
      <Button
        variant={activated ? 'outline-danger' : 'outline-dark'}
        onClick={activated ? leaveMission : joinMission}
      >
        {activated ? 'Leave mission' : 'Join mission'}
      </Button>
    </td>
  </tr>
);

MissionList.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  activated: PropTypes.bool,
  joinMission: PropTypes.func,
  leaveMission: PropTypes.func,
};

MissionList.defaultProps = {
  joinMission: null,
  leaveMission: null,
  activated: false,
};

export default MissionList;
