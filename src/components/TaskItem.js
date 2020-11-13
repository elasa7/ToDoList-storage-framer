import React from "react";
import { ReactComponent as EditIcon } from "../img/edit_icon.svg";
import { ReactComponent as DeleteIcon } from "../img/delete_icon.svg";

const TaskItem = ({ taskTitle, handleDelete, handleEdit, id }) => {
  return (
    <div className="task__wraper">
      <div className="task__title">
        <h4>{taskTitle}</h4>
      </div>
      <div className="task__tool_wraper">
        <button name="edit" onClick={(e) => handleEdit(id)}>
          <EditIcon className="task__icon" />
        </button>
        <button name="delete" onClick={(e) => handleDelete(taskTitle)}>
          <DeleteIcon className="task__icon" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
