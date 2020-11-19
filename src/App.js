import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log('Increment count');
  }

  const decrementCount = () => {
    setCount(count - 1);
    console.log('Decrement count');
  }

  const resetCount = () => {
    setCount(0);
    console.log('Reset count');
  }


  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </>
  );
}

export default App;
