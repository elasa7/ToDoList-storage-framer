import React from "react";

const ProfileName = ({ setEditName, setcurrentName }) => {
  const handleSubmitName = (e) => {
    e.preventDefault();
    const newNameValue = e.target.elements.newName.value;
    newNameValue && setcurrentName(e.target.elements.newName.value);

    setEditName(false);
  };
  return (
    <form onSubmit={(e) => handleSubmitName(e)}>
      <input
        type="text"
        placeholder="Edit your name"
        className="edit__name_input"
        name="newName"
        maxLength="10"
      />
    </form>
  );
};

export default ProfileName;
