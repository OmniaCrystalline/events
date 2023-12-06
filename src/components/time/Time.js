/** @format */
import "./Time.style.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ShevronCalendar from "../calendar/ShevronCalendar";

const Time = ({ settime, time }) => {
  const curMinutes = Number(time.slice(-2));
  const curHour = Number(time.slice(0, 2));
  const [hour, sethour] = useState(curHour <= 12 ? curHour : curHour - 12);
  const [minutes, setminutes] = useState(curMinutes);
  const [half, sethalf] = useState(curHour <= 12 ? "AM" : "PM");
  const [open, setopen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    settime(`${display(half === "AM" ? hour : hour + 12)}:${display(minutes)}`);
  }, [hour, minutes, settime, half]);

  return (
    <>
      <div className='t_container lab_time'>
        <span className='t_accent'>{t("label_time")}</span>
        <input
          type='time'
          className='visually-hidden'
          onChange={() => settime(`${hour}:${minutes}:00`)}></input>
        <div className='t_display' onClick={() => setopen(!open)}>
          {`${display(hour)}:${display(minutes)} ${half}`}
          <ShevronCalendar open={open} />
        </div>
        <div
          className={open ? "t_time" : "visually-hidden"}
          onChange={() => settime(`${hour}:${minutes}:00`)}>
          <Hours hour={hour} sethour={sethour} />
          <Minutes minutes={minutes} setminutes={setminutes} />
          <HalfDay half={half} sethalf={sethalf} />
        </div>
      </div>
    </>
  );
};

export default Time;

const Hours = ({ hour, sethour }) => {
  return (
    <div>
      <div
        className='span_h_m'
        onClick={() => sethour(hour === 12 ? 1 : hour + 1)}>
        {display(hour === 12 ? 1 : hour + 1)}
      </div>
      <div className='span_h_m span_h_m_active'>{display(hour)}</div>
      <div
        className='span_h_m'
        onClick={() => sethour(hour === 1 ? 12 : hour - 1)}>
        {display(hour === 0 ? 11 : hour - 1)}
      </div>
    </div>
  );
};

const Minutes = ({ minutes, setminutes }) => {
  return (
    <div>
      <div
        className='span_h_m'
        onClick={() => setminutes(minutes === 59 ? 0 : minutes + 1)}>
        {display(minutes === 59 ? 0 : minutes + 1)}
      </div>
      <div className='span_h_m span_h_m_active'>{display(minutes)}</div>
      <div
        className='span_h_m'
        onClick={() => setminutes(minutes === 0 ? 59 : minutes - 1)}>
        {display(minutes === 0 ? 59 : minutes - 1)}
      </div>
    </div>
  );
};

const HalfDay = ({ half, sethalf }) => {
  return (
    <>
      <div>
        <div className='span_h_m' onClick={() => sethalf("AM")}>
          {half === "AM" ? "" : "AM"}
        </div>
        <div className='span_h_m span_h_m_active'>{half}</div>
        <div className='span_h_m' onClick={() => sethalf("PM")}>
          {half === "AM" ? "PM" : ""}
        </div>
      </div>
    </>
  );
};

const display = (hour) => {
  let data = null;
  if (hour !== 0) data = hour < 10 ? "0" + hour : hour;
  if (hour === 0) data = "12";
  return data;
};
