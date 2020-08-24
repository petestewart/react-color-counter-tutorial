import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increaseCount}>Change!</button>
    </div>
  );
};

export default App;
