import React, { useState } from 'react';

const Calc = () => {
  const [task, setTask] = useState('');

  const calculateResult = () => {
    try {
     
      if (/^[0-9+\-*/().\s]+$/.test(task)) {
        // Используем новую функцию для вычисления выражения
        const result = new Function(`return ${task}`)();
        setTask(String(result)); // Обновляем input с результатом
      } else {
        setTask('Ошибка'); // Если выражение содержит недопустимые символы
      }
    } catch {
      setTask('Ошибка'); // Ловим любые другие ошибки
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Введите выражение (например, 5+5)"
      />
      <button onClick={calculateResult}>=</button>
    </div>
  );
};

export default Calc;
