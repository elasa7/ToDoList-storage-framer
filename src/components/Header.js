import React from "react";
import SunIcon from "../img/sun_icon.png";
import MoonIcon from "../img/moon_icon.png";
import { ReactComponent as EditIcon } from "../img/edit_icon.svg";

const Header = ({ theme, switchTheme, setSwitchTheme }) => {
  const handleSwitchTheme = () => {
    setSwitchTheme(!switchTheme);
  };

  return (
    <div className="header__wrap">
      <div className="theme__switch_wrap" onClick={() => handleSwitchTheme()}>
        <img src={switchTheme ? MoonIcon : SunIcon} />
        <h5>theme</h5>
      </div>
      <div className="welcome__wrap">
        <div className="edit__welcom_name">
          <EditIcon fill={theme.iconColor} width="32px" height="32px" />
        </div>
        <h1 className="hello__welcome">Hello</h1>
        <h1>John</h1>
      </div>
      <div className="count__task_wrap">
        <h3>you have</h3>
        <div
          className="task__number"
          style={{ background: theme.secondaryColor }}
        >
          <h2>5</h2>
        </div>
        <h3>task to Do</h3>
      </div>
    </div>
  );
};

export default Header;
