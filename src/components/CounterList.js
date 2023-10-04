import React, { useState } from 'react';
import Counter from './Counter';

const CounterList = () => {
    const [counters, setCounters] = useState([]);
  const [newLabel, setNewLabel] = useState('');
  const [newStartValue, setNewStartValue] = useState(0);

  const addCounter = () => {
    if (newLabel) {
      setCounters([
        ...counters,
        { id: counters.length, label: newLabel, startValue: newStartValue },
      ]);
      setNewLabel('');
      setNewStartValue(0);
    }
  };

  const removeCounter = (id) => {
    const updatedCounters = counters.filter((counter) => counter.id !== id);
    setCounters(updatedCounters);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter label"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter start value"
          value={newStartValue}
          onChange={(e) => setNewStartValue(Number(e.target.value))}
        />
        <button onClick={addCounter}>Add Counter</button>
      </div>
      <div className="counter-list">
        {counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              label={counter.label}
              startValue={counter.startValue}
              onRemove={() => removeCounter(counter.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CounterList
