/** @format */
export const dateForInput = (date) => {
  console.log("date dateForInput", date);
  const year = date.slice(0, 4);
  const day = date.slice(-2) < 0 ? date.slice(-1) : date.slice(-2);
  let month = Number(date.slice(5, 7)) + 1;
  month = month < 10 ? "0" + month : month;
  return `${day}/${month}/${year}`;
};
