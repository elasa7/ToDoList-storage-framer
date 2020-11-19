export const remove = (arr, index) => {
  const newArry = [...arr];
  newArry.splice(
    newArry.map(({ id }) => id).findIndex((id) => id === index),
    1
  );
  return newArry;
};

export const add = (tittle, id) => {
  let newIndex = {
    id,
    tittle,
  };
  return newIndex;
};

export const saveEdit = (arr, editIndex, formValue) => {
  const newArry = [
    ...arr.map((task) =>
      task.id === editIndex ? { id: task.id, tittle: formValue } : task
    ),
  ];
  return newArry;
};

export const updateInput = (arr, index) => {
  let findIndex = arr.map(({ id }) => id).findIndex((id) => id === index);
  return arr[findIndex].tittle;
};
