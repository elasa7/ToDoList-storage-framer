import React, { useState, useEffect } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import TaskItem from "./components/TaskItem";

function App() {
  const [taskItem, setTaskItem] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue && !isEdit) {
      setTaskItem((prevItem) => [...prevItem, formValue]);
      setFormValue("");
    }
    if (isEdit) {
      setTaskItem([
        ...taskItem.map((e, index) =>
          index === editIndex ? (e = formValue) : e
        ),
      ]);
      setFormValue("");
    }
    setIsEdit(false);
  };

  const handleEdit = (id) => {
    setFormValue(taskItem[id]);
    setIsEdit(true);
    setEditIndex(id);
  };
  const handleDelete = (taskTitle) => {
    !isEdit && setTaskItem(taskItem.filter((task) => taskTitle !== task));
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
