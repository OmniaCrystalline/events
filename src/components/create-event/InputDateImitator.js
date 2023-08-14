/** @format */

import React from "react";
import Calendar from "../calendar/Calendar";
import ShevronCalendar from "../calendar/ShevronCalendar";
import { dateForInput } from "./functions";

const InputDateImitator = ({ setdateOpen, dateOpen, date, setdate }) => {
  const date1 = document.querySelector("date_input_imitator");  
  date1?.focus()
  return (
      <>
        <div
          className='date_input_imitator input'
          onClick={() => setdateOpen(!dateOpen)}>
          {date !== "" && dateForInput(date)}
          <ShevronCalendar dateOpen={dateOpen} />
        </div>
        <input
          type='date'
          className='visually-hidden'
          required={true}
          value={date}
          onChange={setdate}
        />
        {dateOpen && (
          <Calendar
            setdate={setdate}
            setdateOpen={setdateOpen}
            dateOpen={dateOpen}
            date={date}
          />
        )}
      </>
    );
};

export default InputDateImitator;


