export const remove = (arr, id) => {
  const newArry = [...arr];
  newArry.splice(id, 1);
  return newArry;
};

export const add = (arr, newItem) => {
  return [...arr, newItem];
};

export const saveEdit = (arr, editIndex, formValue) => {
  const newArry = arr.map((e, index) =>
    index === editIndex ? (e = formValue) : e
  );
  return newArry;
};
