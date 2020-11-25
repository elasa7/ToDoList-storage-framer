import { Button, TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useTheme } from "@material-ui/core/styles";
import style from "./form.module.css";

const FormInput = ({ handleSubmit, formValue, setFormValue, isEdit }) => {
  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  const theme = useTheme();

  return (
    <div className={style.form__wrap}>
      <form onSubmit={(e) => handleSubmit(e)} className={style.form__addtask}>
        <TextField
          type="text"
          placeholder="Add new task"
          InputLabelProps={{
            style: { color: "#999" },
          }}
          label="task input"
          name="taks_input"
          fullWidth
          variant="outlined"
          color="secondary"
          value={formValue}
          onChange={(e) => handleChange(e)}
          autoComplete="off"
        />
        <Button
          type="submit"
          value="Submit"
          // disableElevation={false}
          color="secondary">
          {isEdit ? "Save " : "Add Task"}
        </Button>
      </form>
      <div className={style.info__wrap}>
        {isEdit && (
          <Alert
            severity="info"
            color="info"
            fontSize="inherit"
            variant="filled"
            className="Alert__box">
            <AlertTitle>Info</AlertTitle>
            Editing mode is <strong>ON</strong>, edit and <strong>SAVE</strong>{" "}
            your changes
          </Alert>
        )}
      </div>
    </div>
  );
};

export default FormInput;
