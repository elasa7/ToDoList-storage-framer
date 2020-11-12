import React from "react";
const FormInput = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="form__addtask">
        <input
          type="text"
          placeholder="Add new task"
          label="task input"
          name="taks_input"
        />
        <button type="submit" value="Submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default FormInput;
