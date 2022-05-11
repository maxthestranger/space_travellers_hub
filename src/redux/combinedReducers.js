import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rocket/rocket';

const rootReducer = combineReducers({
  rockets: rocketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
