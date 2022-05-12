import spaceAPI from '../../api/spaceAPI';

// actions
const FETCH_ROCKET = 'FETCH_ROCKET';
const RESERVE_ROCKET = 'RESERVE_MISSION';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

// fetch rockets
export const fetchRockets = () => async (dispatch) => {
  const rockets = await spaceAPI.getRockets();

  if (rockets) {
    dispatch({ type: FETCH_ROCKET, rockets });
  }
};

// TODO: reducer to go here

// action creators
export function reserveRocket({ id }) {
  return async (dispatch) => {
    dispatch({
      type: RESERVE_ROCKET,
      id,
    });
  };
}

export function cancelRocket({ id }) {
  return async (dispatch) => {
    dispatch({
      type: CANCEL_ROCKET,
      id,
    });
  };
}
