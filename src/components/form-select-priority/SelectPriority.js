/** @format */

import ShevronCalendar from "../calendar/ShevronCalendar";
import "./SelectPriority.style.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SelectPriority = ({ priority, setpriority }) => {
  const { t } = useTranslation();
  const [open, setopen] = useState(false);
  return (
    <>
      <input
        className='visually-hidden'
        name='priority'
        value={priority}
        onChange={setpriority}
        required></input>
      <div className='priority_container'>
        <div className='input priority_input' onClick={() => setopen(!open)}>
          <span>{priority}</span>
          <span className='priority_svg'>
            <ShevronCalendar open={open} />
          </span>
        </div>
        {open && (
          <div className='select_list'>
            <div
              className={
                priority === "High"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              onClick={() => {
                setpriority("High");
                setopen(!open);
              }}>
              {t("high")}
            </div>
            <div
              className={
                priority === "Medium"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              onClick={() => {
                setpriority("Medium");
                setopen(!open);
              }}>
              {t("medium")}
            </div>
            <div
              className={
                priority === "Low"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              onClick={() => {
                setpriority("Low");
                setopen(!open);
              }}>
              {t("low")}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectPriority;
