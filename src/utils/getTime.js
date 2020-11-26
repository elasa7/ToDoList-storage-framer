const d = new Date();
const hour = d.getHours();
const min = d.getMinutes();

function addZero(t) {
  if (t < 10) {
  }
  return t;
}

export const dat = `${addZero(hour)}:${addZero(min)}`;
