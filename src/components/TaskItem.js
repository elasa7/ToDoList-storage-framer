import React from "react";
import DeleteIcon from "../img/delete_icon.svg";
import EditIcon from "../img/edit_icon.svg";

const TaskItem = ({ taskTitle, handleDelete, handleEdit, id }) => {
  return (
    <div className="task__wraper">
      <div className="task__title">
        <h4>{taskTitle}</h4>
      </div>
      <div className="task__tool_wraper">
        <button name="edit" onClick={(e) => handleEdit(id)}>
          <img src={EditIcon} className="task__icon" alt="edit icon" />
        </button>
        <button name="delete" onClick={(e) => handleDelete(taskTitle)}>
          <img src={DeleteIcon} className="task__icon" alt="delete icon" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
