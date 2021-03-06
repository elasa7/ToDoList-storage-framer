import { useState, useEffect } from "react";
import styled from "styled-components";
import EditAlert from "./EditAlert/EditAlert";
import style from "./form.module.css";

const InputAdd = styled.input`
  all: unset;
  background: ${({ theme }) => theme.taskItemBg};
  color: ${({ theme }) => theme.iconColor};
  width: 100%;
  height: 1.5rem;
  padding: 1rem;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

const AddBtn = styled.button`
  all: unset;
  padding: 0 1rem;
  font-weight: bold;
  white-space: nowrap;
  background: ${({ theme }) => theme.accentColor};
  color: "${({ theme }) => theme.iconColor}";
`;

const FormInput = ({ handleSubmit, isEdit, setValue }) => {
  const [onInputChange, setonInputChange] = useState("");

  useEffect(() => {
    isEdit && setonInputChange(setValue().tittle);
    console.log("bob");
  }, [isEdit]);

  const sendBack = (e) => {
    handleSubmit(e);
    setonInputChange("");
  };

  return (
    <div className={style.form__wrap}>
      <form onSubmit={(e) => sendBack(e)} className={style.form__addtask}>
        <InputAdd
          type="text"
          placeholder="Add new task"
          label="task input"
          name="taks_input"
          value={onInputChange}
          onChange={(e) => setonInputChange(e.target.value)}
        />
        <AddBtn type="submit" value="Submit">
          {isEdit ? "Save " : "Add Task"}
        </AddBtn>
      </form>
      <EditAlert isEdit={isEdit} />
    </div>
  );
};

export default FormInput;
