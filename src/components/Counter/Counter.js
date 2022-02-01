import { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

export default function Counter({ step }) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        >
          Decrement
        </button>
        <span>
          <b>main counter: {state.count}</b>
        </span>
        <button
          type="button"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
        >
          Increment
        </button>
      </div>
    </>
  );
}
