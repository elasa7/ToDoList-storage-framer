const FormInput = ({ handleSubmit, formValue, setFormValue }) => {
  const handleChange = (e) => {
    setFormValue(e.target.value);
  };
  return (
    <div>
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
          Add Task
        </button>
      </form>
    </div>
  );
};

export default FormInput;
