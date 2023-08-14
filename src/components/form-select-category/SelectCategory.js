/** @format */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./SelectCategory.style.css";
import ShevronCalendar from "../calendar/ShevronCalendar";

const SelectCategory = ({ cat, setcat }) => {
  const [open, setopen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className='sel_cat_container'>
      <input
        className='visually-hidden'
        value={cat}
        onChange={setcat}
        required
      />
      <div className='sel_cat_display'>
        <div className='input sel_cat_input' onClick={() => setopen(!open)}>
          {cat}
          <span className='sel_cat_svg'>
            <ShevronCalendar open={open} />
          </span>
        </div>
        {open && (
          <div
            className='select_list'
            onClick={(e) => {
              setcat(e.target.textContent);
              setopen(!open);
            }}>
            <div
              className={
                cat === "Art"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }>
              {t("Art")}
            </div>
            <div
              className={
                cat === "Music"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              value='Music'>
              {t("Music")}
            </div>
            <div
              className={
                cat === "Business"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              value='Business'>
              {t("Business")}
            </div>
            <div
              className={
                cat === "Conference"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              value='Conference'>
              {t("Conference")}
            </div>
            <div
              className={
                cat === "Workshop"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              value='Workshop'>
              {t("Workshop")}
            </div>
            <div
              className={
                cat === "Party"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              value='Party'>
              {t("Party")}
            </div>
            <div
              className={
                cat === "Sport"
                  ? "select_list_item priority_active"
                  : "select_list_item"
              }
              value='Sport'>
              {t("Sport")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectCategory;
