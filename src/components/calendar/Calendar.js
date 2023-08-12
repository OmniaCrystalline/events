/** @format */

import React, { useState } from "react";
import "./Calendar.style.css";
import Chevron from "../pagination/Chevron";
import { buttonNextMonth, buttonPrevMounth, monthFormat } from "./functions";
const Calendar = ({ setdate, dateOpen, setdateOpen }) => {
  const today = new Date();
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const todayDate = today.getDate();
  const [pickedDay, setpickedDay] = useState(todayDate);
  const [pickedMonth, setpickedMonth] = useState(todayMonth);
  const [pickedYear, setpickedYear] = useState(todayYear);
  const days = daysInMonth(pickedYear, pickedMonth);
  console.log("pic", pickedDay, pickedMonth, pickedYear);
  const firstDayOfWeek = new Date(
    `${pickedYear}-${pickedMonth + 1}-01`
  ).getDay();

  return (
    <div className='c_container'>
      <div className='c_heading'>
        <button
          type='button'
          className='c_btn'
          onClick={() =>
            buttonPrevMounth(
              pickedMonth,
              pickedYear,
              setpickedMonth,
              setpickedYear
            )
          }>
          <Chevron />
        </button>
        {monthFormat(pickedMonth)} {pickedYear}
        <button
          type='button'
          className='c_btn right_shevron'
          onClick={() =>
            buttonNextMonth(
              pickedMonth,
              pickedYear,
              setpickedMonth,
              setpickedYear
            )
          }>
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
        <SpanGeneratorEmpty day={firstDayOfWeek} />
        <SpanGenerator
          days={days}
          todayDate={todayDate}
          setpickedDay={setpickedDay}
          pickedDay={pickedDay}
        />
      </div>
      <div className='c_btn_container'>
        <button
          type='button'
          className='c_btn_close c_btn'
          onClick={() => setdateOpen(!dateOpen)}>
          Cancel
        </button>
        <button
          type='button'
          className='c_btn_create c_btn'
          onClick={() => {
            setdate(
              `${pickedYear}-${
                pickedMonth.length === 2 ? pickedMonth : "0" + pickedMonth
              }-${pickedDay > 9 ? pickedDay : "0" + pickedDay}`
            );
            setdateOpen(!dateOpen);
          }}>
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

const SpanGenerator = ({ days, todayDate, setpickedDay, pickedDay, today }) => {
  const generateSpans = (count) => {
    const spans = [];
    for (let i = 0; i < count; i++) {
      spans.push(
        <SpanDay
          key={i}
          pickedDay={pickedDay}
          day={i + 1}
          setpickedDay={setpickedDay}
          todayDate={todayDate}
        />
      );
    }
    return spans;
  };

  return <>{generateSpans(days)}</>;
};

const SpanGeneratorEmpty = ({ day }) => {
  const generateSpans = (count) => {
    const spans = [];
    for (let i = 0; i < day; i++) {
      spans.push(<span key={i}></span>);
    }
    return spans;
  };

  return <>{generateSpans(day)}</>;
};

const SpanDay = ({ day, pickedDay, setpickedDay, todayDate }) => {
  return (
    <span
      onClick={(e) => setpickedDay(e.target.textContent)}
      className={
        (day.toString() === pickedDay ? "day pickedDay" : "day") +
        " " +
        (day === todayDate ? "cur_day" : "")
      }>
      {day}
    </span>
  );
};
