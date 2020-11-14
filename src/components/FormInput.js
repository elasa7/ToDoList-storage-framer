import { ReactComponent as EditIcon } from "../img/edit_icon.svg";
import styled from "styled-components";

const InputAdd = styled.input`
  all: unset;
  background: ${({ theme }) => theme.bgTaskColor};
  color: ${({ theme }) => theme.iconColor};
  border: 1px solid ${({ theme }) => theme.bgTaskColor};
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
  background: ${({ theme }) => theme.secondaryColor};
  color: "${({ theme }) => theme.iconColor}";
`;

const FormInput = ({ handleSubmit, formValue, setFormValue, isEdit }) => {
  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  return (
    <div className="form__wrap">
      <form onSubmit={(e) => handleSubmit(e)} className="form__addtask">
        <InputAdd
          type="text"
          placeholder="Add new task"
          label="task input"
          name="taks_input"
          value={formValue}
          onChange={(e) => handleChange(e)}
          // style={{ background: theme.toolBtnBg }}
        />
        <AddBtn type="submit" value="Submit">
          {isEdit ? "Save " : "Add Task"}
        </AddBtn>
      </form>
      <div className="info__wrap">
        {isEdit && (
          <div className="info__icon_wrap">
            <EditIcon className="info__icon" fill="white" />
          </div>
        )}
        {isEdit && <h5>Editing mode is on, edit and save your changes</h5>}
      </div>
    </div>
  );
};

export default FormInput;
