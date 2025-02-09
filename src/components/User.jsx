import React, { useState } from 'react';
import './User.css';

const User = () => {
  const [input, setInput] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter your name');
  const [step, setStep] = useState(1);

  let user = {
    name: 'Erlan',
    age: 42,
    email: 'erlan@gmail.com',
    password: 1234
  };

  let sum = 16 * 16;

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = () => {
    if (step === 1 && input === user.name) {
      setPlaceholder('Enter your age');
      setStep(2);
      
    } else if (step === 2 && parseInt(input) === user.age) {
      setPlaceholder('Enter your email');
      setStep(3); 
      
    } else if (step === 3 && input === user.email) {
      setPlaceholder('Enter your password');
      setStep(4);
    } else if (step === 4 && parseInt(input) === user.password) {
      setPlaceholder('16 * 16 = ?');
      setStep(5);
    } else if (step === 5 && parseInt(input) === sum) {
      alert(`Well done! Your winnings ${sum}K $`);
      setStep(1);
      setPlaceholder('Enter your name');
    } 
    setInput('');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder={placeholder}
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>OK</button>
    </div>
  );
};

export default User;

