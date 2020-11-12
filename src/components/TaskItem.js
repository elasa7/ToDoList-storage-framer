import React from "react";

const TaskItem = ({ taskTitle }) => {
  return (
    <div className="task__wraper">
      <div className="task__title">
        <h4>{taskTitle}</h4>
      </div>
      <div className="task__tool_wraper">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
