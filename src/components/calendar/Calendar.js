/** @format */

import React from "react";
import "./Calendar.style.css";

const Calendar = () => {
  const currDate = new Date();
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = currDate.getMonth();
  const day = currDate.getDay();
  const year = currDate.getFullYear();
  const days = numberOfDaysInMonth(year, month, day);

  return (
    <div className='cal_cont'>
      <div className='cal_month_year'></div>
      {week.map((e) => (
        <span key={e}>{e}</span>
      ))}
      <SpanGenerator days={days} day={day} />
    </div>
  );
};

export default Calendar;

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(year, month) {
  const monthIndex = month - 1;
  const daysPerMonth = [
    31, // January
    28, // February (common year)
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ];

  if (month === 2 && isLeapYear(year)) {
    return 29;
  } else {
    return daysPerMonth[monthIndex];
  }
}

function numberOfDaysInMonth(year, month, day) {
  const daysInCurrentMonth = daysInMonth(year, month);
  const daysLeftInMonth = daysInCurrentMonth - day + 1;
  return daysLeftInMonth;
}

const SpanGenerator = ({ days, day }) => {
  const fulltable = Math.ceil(days / 7) * 7;
  const generateSpans = (count) => {
    const spans = [];
    for (let i = 0; i < count; i++) {
      spans.push(
        <span className='cal_day' key={i}>
          {day}
        </span>
      );
    }
    return spans;
  };

  return <div className='cal_days'>{generateSpans(fulltable)}</div>;
};
