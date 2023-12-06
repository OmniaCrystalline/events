/** @format */

export const buttonPrevMounth = (month, year, setmonth, setyear) => {
  console.log("month, year buttonPrevMounth", month, year);

  //const newMonth = month === 0 ? 11 : month - 1;
  //const newYear = month === 0 ? year - 1 : year;
  //setmonth(newMonth);
  //setyear(newYear);
};

export const buttonNextMonth = (month, year, setmonth, setyear, target) => {
  console.log("month, year buttonNextMonth", month, year);
  //const newMonth = month === 11 ? 0 : month + 1;
  //const newYear = month === 11 ? year + 1 : year;
  //setmonth(newMonth);
  //setyear(newYear);
};

export const monthFormat = (month) => {
  console.log("monthFormat", month);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log("monthFormat", months[month]);

  return months[month];
};

export const dateFormater = (date, month, year) => {
  return `
   ${year}-${
    month.length === 2 ? Number(month) + 1 : "0" + (Number(month) + 1)
  }-${date > 9 ? date : "0" + date}`;
};
