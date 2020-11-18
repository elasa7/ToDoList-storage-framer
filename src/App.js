import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, globalStyleFn } from "./themes/globalStyle";
import "./App.css";
import FormInput from "./components/FormInput";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";

function App() {
  const [taskItem, setTaskItem] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);

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
          {taskItem.map((taskItem, index) => (
            <TaskItem
              id={index}
              taskTitle={taskItem}
              key={taskItem + index}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
