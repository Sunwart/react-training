import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './counter-types';

const valueReducer = (state = 10, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
