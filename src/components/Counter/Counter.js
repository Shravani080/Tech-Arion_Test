import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  
  const decrement = () => {
     setCounter(counter - 3);
  }
  
  const increment = () => {
    setCounter(counter + 3);
  }

  return (
    <div className='card'>
      <div className='card-title'>Counter</div>
      <div className='card-body'> 
        <button onClick={decrement}>-</button>
        <div className='counter'>{counter}</div>
        <button onClick={increment}>+</button>
      </div> 
    </div>
  );
}

export default Counter;