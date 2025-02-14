import React from 'react';

let season = +prompt('Enter month number');

if(season === 1 || season === 2 || season === 12){
  alert('Winter');
} else if (season >= 3 && season <= 5){
  alert('Spring');
} else if (season >= 6 && season <= 8){
  alert('Summer');
} else if (season >= 9 && season <= 11){
  alert('Autumn');
} else {
  alert('Error!')
}


const month = () => {
  return (
    <div>
      
    </div>
  );
};

export default month;