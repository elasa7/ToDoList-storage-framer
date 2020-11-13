import { ReactComponent as EditIcon } from "../img/edit_icon.svg";

const FormInput = ({ handleSubmit, formValue, setFormValue, isEdit }) => {
  const handleChange = (e) => {
    setFormValue(e.target.value);
  };
  return (
    <div className="form__wrap">
      <form onSubmit={(e) => handleSubmit(e)} className="form__addtask">
        <input
          type="text"
          placeholder="Add new task"
          label="task input"
          name="taks_input"
          value={formValue}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" value="Submit">
          {isEdit ? "Save " : "Add Task"}
        </button>
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
