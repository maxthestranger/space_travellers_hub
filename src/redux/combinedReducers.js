import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './mission/mission';
import rocketReducer from './rocket/rocket';

const rootReducer = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
