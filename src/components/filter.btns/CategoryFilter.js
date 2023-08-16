/** @format */

import React from "react";
import "./Filter.style.css";
import CategorySVG from "./CategorySVG";
import { useTranslation } from "react-i18next";
import { currentCategory } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slice";

const CategoryFilter = ({ open, setopen }) => {
  const disp = useDispatch();
  const current = useSelector(currentCategory);
  const { t } = useTranslation();
  const categories = [
    "All",
    "Art",
    "Music",
    "Business",
    "Conference",
    "Workshop",
    "Party",
    "Sport",
  ];
  return (
    <button
      type='button'
      className={open ? "btn_f btn_f_open" : "btn_f btn_f_close"}
      onClick={() => setopen(!open)}>
      <div className='btn_f_label_container'>
        <span className={open ? "btn_f_label btn_f_label_open" : "btn_f_label"}>
          {current === "All" ? t("Category") : t(current)}
        </span>
        <CategorySVG />
      </div>
      {open && (
        <ul
          className='btn_f_list'
          onClick={(e) => disp(setCategory(e.target.textContent))}>
          {categories.map((e) => (
            <li
              className={
                current === e ? "btn_f_li btn_f_li_active" : "btn_f_li"
              }
              key={e}>
              {e}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default CategoryFilter;

