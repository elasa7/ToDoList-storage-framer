import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [taskItem, setTaskItem] = useState([]);
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    formValue && setTaskItem((prevItem) => [...prevItem, formValue]);
    formValue && setFormValue("");
  };

  const handleEdit = (id) => {
    setFormValue(taskItem[id]);
  };
  const handleDelete = (taskTitle) => {
    setTaskItem(taskItem.filter((task) => taskTitle !== task));
  };

  return (
    <div className="App__wrap">
      <FormInput
        handleSubmit={handleSubmit}
        taskItem={taskItem}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <div className="task__wrap">
        {taskItem.map((taskItem, index) => (
          <TaskItem
            id={index}
            taskTitle={taskItem}
            key={taskItem + index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
