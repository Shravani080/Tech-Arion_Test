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
        <button onClick={decrement} style={{ marginRight: '10px' }}>-</button>
        <div className='counter' style={{ margin: '0 10px' }}>{counter}</div>
        <button onClick={increment} style={{ marginLeft: '10px' }}>+</button>
      </div> 
    </div>
  );
}

export default Counter;