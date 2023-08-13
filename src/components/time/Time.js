/** @format */
import "./Time.style.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ShevronCalendar from "../calendar/ShevronCalendar";

const Time = () => {
  const [open, setopen] = useState(false);
  const { t } = useTranslation();
  const date = new Date();
  const hours = date.getHours();
  const min = date.getHours();
  return (
    <>
      <div className='t_container lab_time'>
        <span className='t_accent'>{t("label_time")}</span>
        <input type='time' className='visually-hidden'></input>
              <div className='t_display' >
                  111
          <ShevronCalendar dateOpen={open}/>
        </div>
      </div>
    </>
  );
};

export default Time;
