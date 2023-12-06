/** @format */

export const dateForCard = (date) => {
  const day = Number(date.slice(-2)) < 0 ? Number(date.slice(-1)) : Number(date.slice(-2));
  let month = Number(date.slice(5, 7)) + 1;
  month = month < 10 ? "0" + month : month;
  return `${day}.${month}`;
};
