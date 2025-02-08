import React from 'react';
import './calc.css'

const calc = () => {

  let user = {
    name: 'Erlan',
    age: 42,
    email: 'erlan@gmail.com',
    password: 1234
  };

  let sum = 256;

  let inputN = prompt('Enter your name');

  if(inputN === user.name){
    let inputG = +prompt('Enter your age');

    if(inputG === user.age){
      let inputE = prompt('Enter your email');

      if(inputE === user.email){
        let inputP = +prompt('Enter your password');

        if(inputP === user.password){
          let inputA = +prompt('16 * 16 = ?');

          if(inputA === sum){
            user.sum = sum;
            alert(`Well done! Your winnings ${user.sum}K $`);
          }else{
            alert('Incorrect!');
          }
        }else{
          alert('Incorrect password!');
        }
      }else{
        alert('Incorrect email!');
      }
    }else{
      alert('Incorrect age!')
    }
  }else{
    alert('Incorrect name!');
  };

  
  return (
    <div>
      
    </div>
  );
};

export default calc;