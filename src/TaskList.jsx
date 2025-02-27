import { useState } from "react";


function TaskList() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);

  const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
      <ul>
          {tasks.map((task, index) => (
              <li key={index}>
                  {task}{" "}
                  <button onClick={() => removeTask(index)}>X</button>
              </li>
          ))}
      </ul>
  );
}

export default TaskList