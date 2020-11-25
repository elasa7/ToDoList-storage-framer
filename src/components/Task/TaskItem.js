import React from "react";
import { Paper, Button } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { useTheme } from "@material-ui/core/styles";
import style from "./taskItem.module.css";

const TaskItem = ({ taskTitle, handleDelete, handleEdit, id }) => {
  const theme = useTheme();

  return (
    <Paper className={style.task__wraper}>
      <Paper
        elevation={0}
        style={{ background: theme.palette.background.default }}
        className={style.task__item_num}>
        <h2>{id + 1}</h2>
      </Paper>
      <div className={style.task__title_wrap}>
        <h4>{taskTitle}</h4>
      </div>
      <div className={style.task__tool_wraper}>
        <Button name="Edit" onClick={(e) => handleEdit(id)}>
          <Edit />
        </Button>

        <Button name="delete" onClick={handleDelete}>
          <Delete />
        </Button>
      </div>
    </Paper>
  );
};

export default TaskItem;
