import React, { useState } from 'react';



const Counter = () => {

  const [count, setCount] = useState(0)

  
  return (
    <div>
      <label htmlFor=""></label>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default Counter;