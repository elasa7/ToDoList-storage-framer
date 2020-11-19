import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, globalStyleFn } from "./themes/globalStyle";
import "./App.css";
import FormInput from "./components/FormInput";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import { add, remove, saveEdit } from "./utils/array-utils";
import { motion, AnimatePresence } from "framer-motion";
import { taskVariant } from "./utils/animation";
function App() {
  const [taskItem, setTaskItem] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);
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
    setFormValue(taskItem[id].tittle);
    setIsEdit(true);
    setEditIndex(id);
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
          
          <AnimatePresence initial={false}>
            {taskItem.map(({ tittle,id }) => (
              <motion.div
                key={id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={taskVariant}
              >
            <TaskItem
              id={id}
              taskTitle={tittle}
              key={id}
              handleEdit={handleEdit}
              handleDelete={() => setTaskItem(remove(taskItem, id))}
              theme={theme}
            />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
