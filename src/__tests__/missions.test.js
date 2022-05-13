import missionReducer, {
  joinMission,
  leaveMission,
} from '../redux/mission/mission';
import rocketReducer, {
  reserveRocket,
  cancelRocket,
} from '../redux/rocket/rocket';

const testData = {
  initialState: [],
  populatedState: [
    {
      id: 1,
      reserved: false,
    },
    {
      id: 2,
      reserved: false,
    },
  ],
  populatedState2: [
    {
      id: 1,
      reserved: false,
    },
    {
      id: 2,
      reserved: true,
    },
  ],
};

describe('action creators', () => {
  // action creators
  test('return a promise for join mission', () => {
    expect(joinMission({ id: 1 })).toEqual(expect.any(Function));
  });

  test('return a promise for leave mission', () => {
    expect(leaveMission({ id: 1 })).toEqual(expect.any(Function));
  });

  test('return a promise for reserve rocket', () => {
    expect(reserveRocket({ id: 1 })).toEqual(expect.any(Function));
  });

  test('return a promise for cancel rocket', () => {
    expect(cancelRocket({ id: 1 })).toEqual(expect.any(Function));
  });
});

describe('reducers', () => {
  test('return an array of object with reserved key true for id mission', () => {
    expect(missionReducer(testData.populatedState, { type: 'JOIN_MISSION', id: 2 })).toEqual(testData.populatedState.reduce((p, c) => {
      if (c.id !== 2) {
        p.push(c);
        return p;
      }
      p.push({ ...c, reserved: true });
      return p;
    }, []));
  });

  test('return an array of object with reserved key true for id rocket', () => {
    expect(rocketReducer(testData.populatedState, { type: 'RESERVE_ROCKET', id: 2 })).toEqual(testData.populatedState.reduce((p, c) => {
      if (c.id !== 2) {
        p.push(c);
        return p;
      }
      p.push({ ...c, reserved: true });
      return p;
    }, []));
  });

  test('return an array of object with reserved key false for id mission', () => {
    expect(missionReducer(testData.populatedState2, { type: 'LEAVE_MISSION', id: 2 })).toEqual(testData.populatedState);
  });

  test('return an array of object with reserved key false for id rocket', () => {
    expect(rocketReducer(testData.populatedState2, { type: 'CANCEL_ROCKET', id: 2 })).toEqual(testData.populatedState);
  });
});
