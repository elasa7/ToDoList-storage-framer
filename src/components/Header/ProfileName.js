import React from "react";
import { TextField } from "@material-ui/core";

const ProfileName = ({ setEditName, setcurrentName }) => {
  const handleSubmitName = (e) => {
    e.preventDefault();
    const newNameValue = e.target.elements.newName.value;
    newNameValue && setcurrentName(e.target.elements.newName.value);

    setEditName(false);
  };
  return (
    <form onSubmit={(e) => handleSubmitName(e)}>
      <TextField
        type="text"
        placeholder="Edit your name"
        name="newName"
        inputProps={{ maxLength: 9, autoComplete: "off" }}
        variant="filled"
      />
    </form>
  );
};

export default ProfileName;
