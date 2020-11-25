import React, { useState } from "react";
import SunIcon from "../../img/sun_icon.png";
import MoonIcon from "../../img/moon_icon.png";
import { ReactComponent as EditIcon } from "../../img/edit_icon.svg";
import ProfileName from "./ProfileName";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import style from "./header.module.css";

const Header = ({ darkMode, setDarkMode, taskCount, genId }) => {
  const [editName, setEditName] = useState(false);
  const [currentName, setcurrentName] = useState("John");
  const theme = useTheme();

  const handleSwitchTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleEditName = (e) => {
    setEditName(!editName);
  };

  return (
    <div className={style.header__wrap}>
      <div
        className={style.theme__switch_wrap}
        onClick={() => handleSwitchTheme()}>
        <img src={darkMode ? MoonIcon : SunIcon} alt="icon switch" />
        <h5>theme</h5>
      </div>
      <div className={style.welcome__wrap}>
        <EditIcon
          fill={theme.palette.secondary.main}
          width="32px"
          height="32px"
          onClick={handleEditName}
        />

        <div className={style.welcome__name}>
          <Typography variant="h2">Hello</Typography>
          {editName ? (
            <ProfileName
              setEditName={setEditName}
              setcurrentName={setcurrentName}
            />
          ) : (
            <Typography
              variant="h2"
              onClick={handleEditName}
              style={{ fontWeight: 600 }}>
              {currentName}
            </Typography>
          )}
        </div>
      </div>
      <div className={style.count__task_wrap}>
        <div className={style.task__todo_num}>
          <h3>You have</h3>
          <div
            className={style.task__number}
            style={{ background: theme.palette.secondary.main }}>
            <h2>{taskCount}</h2>
          </div>
          <h3>task to Do</h3>
        </div>
        <div className={style.task__done}>
          <h5>Completed tasks</h5>
          <h3>{genId - taskCount}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
