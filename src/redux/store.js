import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counter-reducer';

const store = configureStore({
  reducer: { counter: counterReducer },
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
