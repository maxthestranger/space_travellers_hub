import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';

const rootReducer = combineReducers({
  missions: missionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
