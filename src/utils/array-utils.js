export const remove = (arr, item) => {
  const newArry = [...arr];
  newArry.splice(
    newArry.findIndex((i) => i === item),
    1
  );
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
