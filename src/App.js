import React, { useState } from "react";
import { withTheme } from "./themes/theme";
import "./App.css";
import FormInput from "./components/Form/FormInput";
import Header from "./components/Header/Header";
import TaskItem from "./components/Task/TaskItem";
import { add, remove, saveEdit, updateInput } from "./utils/array-utils";

function App({ darkMode, setDarkMode }) {
  const [taskItem, setTaskItem] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [genId, setgenId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue && !isEdit) {
      setgenId((prev) => prev + 1);
      setTaskItem((prev) => [...prev, add(formValue, genId)]);
      setFormValue("");
    }

    if (isEdit) {
      setTaskItem(saveEdit(taskItem, editIndex, formValue));
      setFormValue("");
    }
    setIsEdit(false);
  };

  const handleEdit = (id) => {
    setFormValue(updateInput(taskItem, id));
    setIsEdit(true);
    setEditIndex(id);
  };

  return (
    <div className="App__wrap">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        taskCount={taskItem.length}
        genId={genId}
      />
      <FormInput
        handleSubmit={handleSubmit}
        taskItem={taskItem}
        formValue={formValue}
        setFormValue={setFormValue}
        isEdit={isEdit}
      />
      <div className="task__wrap">
        {taskItem.map(({ tittle, id }) => (
          <TaskItem
            id={id}
            taskTitle={tittle}
            key={id}
            handleEdit={handleEdit}
            handleDelete={() => setTaskItem(remove(taskItem, id))}
          />
        ))}
      </div>
    </div>
  );
}

export default withTheme(App);
