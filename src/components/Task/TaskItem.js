import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTheme } from "@material-ui/core/styles";
import style from "./taskItem.module.css";

const TaskItem = ({ taskTitle, handleDelete, handleEdit, id }) => {
  const theme = useTheme();

  return (
    <div className={style.task__wraper}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={style.task__wrap}>
            <Paper
              elevation={0}
              className={style.task__item_num}
              style={{ background: theme.palette.primary.main }}
            >
              <Typography variant="h5">{id + 1}</Typography>
            </Paper>
            <div className={style.task__title_wrap}>
              <Typography variant="caption">20:45 20-10</Typography>
              <Typography variant="h5">{taskTitle}</Typography>
            </div>

            <div className={style.task__tool_wraper}>
              <Button name="Edit" onClick={(e) => handleEdit(id)}>
                <Edit />
              </Button>

              <Button name="delete" onClick={handleDelete}>
                <Delete />
              </Button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className={style.task__summary}>

            <hr/>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TaskItem;
