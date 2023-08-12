/** @format */

export const dateForCard = (date) => {
  const day = date.slice(-2);
  let month = Number(date.slice(5, 7)) + 1;
  month = month < 10 ? "0" + month : month;
  return `${day}.${month}`;
};
