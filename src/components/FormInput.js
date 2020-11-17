import { ReactComponent as InfoIcon } from "../img/info_icon.svg";
import styled from "styled-components";

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
  background: ${({ theme }) => theme.accentColor};
  color: "${({ theme }) => theme.iconColor}";
`;

const InfoBox = styled.div`
  border: 1px solid ${({ theme }) => theme.taskItemBg};
`;

const HighLightSpan = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;

const FormInput = ({
  handleSubmit,
  formValue,
  setFormValue,
  isEdit,
  theme,
}) => {
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
        />
        <AddBtn type="submit" value="Submit">
          {isEdit ? "Save " : "Add Task"}
        </AddBtn>
      </form>
      <InfoBox className="info__wrap">
        {isEdit && (
          <div className="info__icon_wrap">
            <InfoIcon className="info__icon" fill="#28241E" />
          </div>
        )}
        {isEdit && (
          <h5>
            Editing mode is <HighLightSpan>ON</HighLightSpan> , edit and{" "}
            <HighLightSpan>SAVE</HighLightSpan> your changes
          </h5>
        )}
      </InfoBox>
    </div>
  );
};

export default FormInput;
