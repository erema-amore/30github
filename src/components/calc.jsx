import React from 'react';

const calc = () => {
  
  let num1  = +prompt('Enter one number');
  let symbol = prompt('Enter symbol');
  let num2 = +prompt('Enter two number');

  if (symbol === '/') {
    alert(num1 / num2);
  } else if (symbol === '*') {
    alert(num1 * num2);
  } else if (symbol === '-') {
    alert(num1 - num2);
  } else if (symbol === '+') {
    alert(num1 + num2);
  } else {
    alert('Error');
  };

  return (

    
    <div>
      
    </div>
  );
};

export default calc;