import React, { useState } from "react";
import SunIcon from "../img/sun_icon.png";
import MoonIcon from "../img/moon_icon.png";
import { ReactComponent as EditIcon } from "../img/edit_icon.svg";
import ProfileName from "./ProfileName";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="header__wrap">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        className="theme__switch_wrap"
        onClick={() => handleSwitchTheme()}>
        <img src={switchTheme ? MoonIcon : SunIcon} alt="icon switch" />
        <h5>theme</h5>
      </motion.div>
      <motion.div className="welcome__wrap" layout>
        <motion.div
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.5 }}
          className="edit__welcom_name">
          <EditIcon
            fill={theme.iconColor}
            width="32px"
            height="32px"
            onClick={handleEditName}
          />
        </motion.div>
        <h1 className="hello__welcome">Hello</h1>
        {editName ? (
          <ProfileName
            setEditName={setEditName}
            setcurrentName={setcurrentName}
          />
        ) : (
          <motion.h1
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="name__welcome"
            onClick={handleEditName}>
            {currentName}
          </motion.h1>
        )}
      </motion.div>
      <div className="count__task_wrap">
        <div className="task__todo_num">
          <h3>you have</h3>
          <div
            className="task__number"
            style={{ background: theme.accentColor }}>
            <h2>{taskCount}</h2>
          </div>
          <h3>task to Do</h3>
        </div>
        <div className="task__done">
          <h5>Completed tasks</h5>
          <h3>{genId - taskCount}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
