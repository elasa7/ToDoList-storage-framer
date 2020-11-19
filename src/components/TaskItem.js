import React from "react";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../img/edit_icon.svg";
import { ReactComponent as DeleteIcon } from "../img/delete_icon.svg";

const TaskWraper = styled.div`
  background: ${({ theme }) => theme.taskItemBg};
`;
const ToolBtn = styled.button`
  background: ${({ theme }) => theme.iconToolBg};
`;

const TaskItem = ({ taskTitle, handleDelete, handleEdit, id, theme }) => {
  return (
    <TaskWraper theme={theme} className="task__wraper">
      <div className="task__item_num"style={{background:theme.iconToolBg}}>{id+1}</div>
      <div className="task__title_wrap">
        <h4>{taskTitle}</h4>
      </div>
      <div className="task__tool_wraper">
        <ToolBtn onClick={(e) => handleEdit(id)}>
          <EditIcon className="task__icon" fill={theme.iconColor} />
        </ToolBtn>
        <ToolBtn name="delete" onClick={handleDelete}>
          <DeleteIcon className="task__icon" fill={theme.iconColor} />
        </ToolBtn>
      </div>
    </TaskWraper>
  );
};

export default TaskItem;
