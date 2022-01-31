import { useState, useEffect } from 'react';

export default function Counter({ step }) {
  const [counter, setCounter] = useState(3);
  const [counterX, setCounterX] = useState(0);

  const handleIncrement = () => {
    setCounter(prev => prev + step);
    setCounterX(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCounter(prev => prev - step);
  };

  useEffect(() => {
    console.log('UseEffect works ' + Date.now());
  }, [counterX]);

  return (
    <>
      <div>
        <button type="button" onClick={handleDecrement}>
          Decrement by {step}
        </button>
        <span>
          <b>main counter: {counter},</b> increment click counter{counterX}
        </span>
        <button type="button" onClick={handleIncrement}>
          Increment by {step}
        </button>
      </div>
    </>
  );
}
