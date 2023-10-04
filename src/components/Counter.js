import React, {useState } from 'react'

const Counter = ({ label, startValue, onRemove }) => {
    const [count, setCount] = useState(startValue || 0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>{label}</h2>
      <span>{count}</span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Counter
