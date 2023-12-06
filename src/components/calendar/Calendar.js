/** @format */

import React from "react";
import "./Calendar.style.css";
import Chevron from "../pagination/Chevron";
import {
  //buttonNextMonth,
  //buttonPrevMounth,
  monthFormat,
} from "./functions";

const Calendar = ({
  setdateOpen,
  dateOpen,
  day,
  month,
  year,
  setyear,
  setmonth,
  setday,
  setdate,
}) => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const days = daysInMonth(year, month);
  const firstDayOfWeek = new Date(`${year}-${month + 1}-01`).getDay();

  const res = DAYS(firstDayOfWeek, days);

  return (
    <div className='c_container'>
      <div className='c_heading'>
        <button
          type='button'
          data-calendar='prev'
          className='c_btn'
          value='prev'>
          <Chevron />
        </button>
        {monthFormat(month)} {year}
        <button
          type='button'
          className='c_btn right_shevron'
          value='next'
          data-calendar='next'>
          <Chevron />
        </button>
      </div>
      <div className='c_week'>
        {week.map((e) => (
          <span
            key={e}
            className={e === "Sun" || e === "Sat" ? "day weekend" : "day"}>
            {e}
          </span>
        ))}
      </div>
      <div className='cal_days'>
        {res.map((e, index) => (
          <span
            key={index}
            data-day={e}
            className={Number(day) === e ? "day cur_day" : "day"}
            onClick={(event) => {
              setdate(`${year}-${month}-${event.target.dataset.day}`);
              setdateOpen(!dateOpen);
            }}>
            {e}
          </span>
        ))}
      </div>
      <div className='c_btn_container'>
        <button type='button' className='c_btn_close c_btn'>
          Cancel
        </button>
        <button type='button' className='c_btn_create c_btn'>
          Choose date
        </button>
      </div>
    </div>
  );
};

export default Calendar;

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(year, month) {
  const monthIndex = month;
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

const DAYS = (firstDayOfWeek, days) => {
  const arr = [];
  for (let n = 0; n < firstDayOfWeek; n++) {
    arr.push("");
  }
  for (let i = 0; i < days; i++) {
    arr.push(i + 1);
  }
  return arr;
};
