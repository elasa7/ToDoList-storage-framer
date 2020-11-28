import React from "react";
import styled from "styled-components";
import style from "./taskItem.module.css";
import { ReactComponent as EditIcon } from "../../img/edit_icon.svg";
import { ReactComponent as DeleteIcon } from "../../img/delete_icon.svg";

const TaskWraper = styled.div`
  background: ${({ theme }) => theme.taskItemBg};
`;
const ToolBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.2rem;
  background: ${({ theme }) => theme.iconToolBg};
`;

const TaskItem = ({ taskTitle, handleDelete, handleEdit, id, theme }) => {
  return (
    <TaskWraper theme={theme} className={style.task__wraper}>
      <div
        className={style.task__item_num}
        style={{ background: theme.iconToolBg }}>
        {id + 1}
      </div>
      <div className={style.task__title_wrap}>
        <h4>{taskTitle}</h4>
      </div>
      <div className={style.task__tool_wraper}>
        <ToolBtn onClick={(e) => handleEdit(id)}>
          <EditIcon className={style.task__icon} fill={theme.iconColor} />
        </ToolBtn>
        <ToolBtn name="delete" onClick={handleDelete}>
          <DeleteIcon className={style.task__icon} fill={theme.iconColor} />
        </ToolBtn>
      </div>
    </TaskWraper>
  );
};

export default TaskItem;
