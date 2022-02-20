import { createAction } from '@reduxjs/toolkit';

const increment = createAction('counter/Increment');
const decrement = createAction('counter/Decrement');

export default { increment, decrement };
