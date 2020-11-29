import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, globalStyleFn } from "./themes/globalStyle";
import "./App.css";
import FormInput from "./components/Form/FormInput";
import Header from "./components/Header/Header";
import TaskItem from "./components/Task/TaskItem";
import { add, remove, saveEdit, updateInput } from "./utils/array-utils";
import { v4 as uuid } from "uuid";

function App() {
  let initial = JSON.parse(window.localStorage.getItem("todo")) || [];
  const [taskItem, setTaskItem] = useState(initial);
  const [formValue, setFormValue] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);
  const [taskComplete, setTaskComplete] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("todo", JSON.stringify(taskItem));
  }, [taskItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue && !isEdit) {
      setTaskItem((prev) => [...prev, add(formValue, uuid())]);
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

  const handleDelete = (id) => {
    setTaskItem(remove(taskItem, id));
    setTaskComplete((prev) => prev + 1);
  };

  const theme = globalStyleFn(switchTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App__wrap">
        <Header
          theme={theme}
          switchTheme={switchTheme}
          setSwitchTheme={setSwitchTheme}
          taskCount={taskItem.length}
          taskComplete={taskComplete}
        />
        <FormInput
          handleSubmit={handleSubmit}
          taskItem={taskItem}
          formValue={formValue}
          setFormValue={setFormValue}
          isEdit={isEdit}
          theme={theme}
        />
        <div className="task__wrap">
          {taskItem.map(({ tittle, id }, index) => (
            <TaskItem
              id={id}
              key={uuid()}
              taskNumber={index}
              taskTitle={tittle}
              handleEdit={handleEdit}
              handleDelete={() => handleDelete(id)}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
