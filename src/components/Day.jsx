import React from 'react';

const day = +prompt('enter decadas number');

if(day >= 1 && day <= 9){
  alert('First decada');
} else if (day >= 10 && day <= 19){
  alert('Second decada');
} else if (day >= 20 && day <=29){
  alert('Trith decada');
} else {
  alert('Error!')
}

const Day = () => {
  return (
    <div>
      
    </div>
  );
};

export default Day;