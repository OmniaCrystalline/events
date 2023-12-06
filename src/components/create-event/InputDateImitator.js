/** @format */

import React from "react";
import Calendar from "../calendar/Calendar";
import ShevronCalendar from "../calendar/ShevronCalendar";
import { dateForInput } from "./functions";

const InputDateImitator = ({
  setdateOpen,
  dateOpen,
  date,
  day,
  month,
  year,
  setyear,
  setmonth,
  setday,
  setdate
}) => {
  return (
    <>
      <div
        className='date_input_imitator input'
        onClick={(e) => {
          setdateOpen(!dateOpen);
        }}>
        {dateForInput(date)}
        <ShevronCalendar dateOpen={dateOpen} />
      </div>
      {dateOpen && (
        <Calendar
          setdateOpen={setdateOpen}
          dateOpen={dateOpen}
          day={day}
          month={month}
          year={year}
          setyear={setyear}
          setmonth={setmonth}
          setday={setday}
          setdate={setdate}
        />
      )}
    </>
  );
};

export default InputDateImitator;
