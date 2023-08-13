/** @format */

export const buttonPrevMounth = (
  month,
  year,
  setpickedMonth,
  setpickedYear
) => {
  const newMonth = month === 0 ? 11 : month - 1;
  const newYear = month === 0 ? year - 1 : year;
  setpickedMonth(newMonth);
  setpickedYear(newYear);
};


export const buttonNextMonth = (
  month,
  year,
  setpickedMonth,
  setpickedYear
) => {
  const newMonth = month === 11 ? 0 : month + 1;
  const newYear = month === 11 ? year + 1 : year;
  setpickedMonth(newMonth);
  setpickedYear(newYear);
};

export const monthFormat = (month) => {
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
    return months[month]
}

export const dateFormater = (date, month, year) => {
  return `
   ${year}-${
     month.length === 2 ? Number(month) + 1 : "0" + (Number(month) + 1)
   }-${date > 9 ? date : "0" + date}`;
}


 