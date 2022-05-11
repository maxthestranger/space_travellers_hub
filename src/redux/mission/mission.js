import spaceAPI from '../../api/spaceAPI';

// actions
const FETCH_MISSION = 'FETCH_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

// fetch mission
export const fetchMissions = () => async (dispatch) => {
  const missions = await spaceAPI.getMissions();

  if (missions) {
    dispatch({ type: FETCH_MISSION, missions });
  }
};

// reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_MISSION:
      return action.missions;

    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });

    default:
      return state;
  }
}

// action creators
export function joinMission({ id }) {
  return async (dispatch) => {
    dispatch({
      type: JOIN_MISSION,
      id,
    });
  };
}

export function leaveMission({ id }) {
  return async (dispatch) => {
    dispatch({
      type: LEAVE_MISSION,
      id,
    });
  };
}
