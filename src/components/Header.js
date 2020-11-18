import React, { useState } from "react";
import SunIcon from "../img/sun_icon.png";
import MoonIcon from "../img/moon_icon.png";
import { ReactComponent as EditIcon } from "../img/edit_icon.svg";
import ProfileName from "./ProfileName";

const Header = ({ theme, switchTheme, setSwitchTheme, taskCount }) => {
  const [editName, setEditName] = useState(false);
  const [currentName, setcurrentName] = useState("John");

  const handleSwitchTheme = () => {
    setSwitchTheme(!switchTheme);
  };

  const handleEditName = (e) => {
    setEditName(!editName);
  };

  return (
    <div className="header__wrap">
      <div className="theme__switch_wrap" onClick={() => handleSwitchTheme()}>
        <img src={switchTheme ? MoonIcon : SunIcon} alt="icon swithc" />
        <h5>theme</h5>
      </div>
      <div className="welcome__wrap">
        <div className="edit__welcom_name">
          <EditIcon
            fill={theme.iconColor}
            width="32px"
            height="32px"
            onClick={handleEditName}
          />
        </div>
        <h1 className="hello__welcome">Hello</h1>
        {editName ? (
          <ProfileName
            setEditName={setEditName}
            setcurrentName={setcurrentName}
          />
        ) : (
          <h1 className="name__welcome" onClick={handleEditName}>
            {currentName}
          </h1>
        )}
      </div>
      <div className="count__task_wrap">
        <h3>you have</h3>
        <div className="task__number" style={{ background: theme.accentColor }}>
          <h2>{taskCount}</h2>
        </div>
        <h3>task to Do</h3>
      </div>
    </div>
  );
};

export default Header;
