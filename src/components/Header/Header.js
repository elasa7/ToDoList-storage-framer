import React, { useState } from "react";
import style from "./header.module.css";
import SunIcon from "../../img/sun_icon.png";
import MoonIcon from "../../img/moon_icon.png";
import { ReactComponent as EditIcon } from "../../img/edit_icon.svg";
import ProfileName from "./ProfileName/ProfileName";

const Header = ({ theme, switchTheme, setSwitchTheme, taskCount, genId }) => {
  const [editName, setEditName] = useState(false);
  const [currentName, setcurrentName] = useState("John");

  const handleSwitchTheme = () => {
    setSwitchTheme(!switchTheme);
  };

  const handleEditName = (e) => {
    setEditName(!editName);
  };
  console.log(genId);

  return (
    <div className={style.header__wrap}>
      <div
        className={style.theme__switch_wrap}
        onClick={() => handleSwitchTheme()}>
        <img src={switchTheme ? MoonIcon : SunIcon} alt="icon swithc" />
        <h5>theme</h5>
      </div>
      <div className={style.welcome__wrap}>
        <div className={style.edit__welcom_name}>
          <EditIcon
            fill={theme.iconColor}
            width="32px"
            height="32px"
            onClick={handleEditName}
          />
        </div>
        <div className={style.welcome__name_wrap}>
          <h1 className={style.hello__welcome}>Hello</h1>
          {editName ? (
            <ProfileName
              setEditName={setEditName}
              setcurrentName={setcurrentName}
            />
          ) : (
            <h1 className={style.name__welcome} onClick={handleEditName}>
              {currentName}
            </h1>
          )}
        </div>
      </div>
      <div className={style.count__task_wrap}>
        <div className={style.task__todo_num}>
          <h3>you have</h3>
          <div
            className={style.task__number}
            style={{ background: theme.accentColor }}>
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
