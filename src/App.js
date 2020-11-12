import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [taskItem, setTaskItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskItem = e.target.elements.taks_input.value;
    taskItem && setTaskItem((prevItem) => [...prevItem, taskItem]);
    e.target.elements.taks_input.value = "";
  };

  return (
    <div className="App__wrap">
      <FormInput handleSubmit={handleSubmit} taskItem={taskItem} />
      <div className="task__wrap">
        {taskItem.map((taskItem, index) => (
          <TaskItem taskTitle={taskItem} key={taskItem + index} />
        ))}
      </div>
    </div>
  );
}

export default App;
