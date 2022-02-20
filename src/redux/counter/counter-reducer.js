import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './counter-actions';

const valueReducer = createReducer(-13, {
  [actions.increment]: (state, action) => state + action.payload,
  [actions.decrement]: (state, { payload }) => state - payload,
});

const stepReducer = createReducer(13, {});

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
