/** @format */

import React from "react";
import "./SortFilter.style.css";
import { useTranslation } from "react-i18next";
import { sort, sortDirection } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setSorting } from "../../redux/slice";
import SortSVG from "./SortSVG";

const SortFilter = ({ open, setopen }) => {
  const { t } = useTranslation();
  return (
    <button
      type='button'
      className={open ? "btn_s btn_s_open" : "btn_s btn_s_close"}
      onClick={() => setopen(!open)}>
      <div className='btn_s_label_container'>
        <span className={open ? "btn_s_label btn_s_label_open" : "btn_s_label"}>
          {t("sort_by")}
        </span>
        <SortSVG />
      </div>
      {open && <SortList />}
    </button>
  );
};

export default SortFilter;

const SortList = () => {
  const disp = useDispatch();
  const current = useSelector(sort);
  const dir = useSelector(sortDirection);
  return (
    <ul className='btn_s_list'>
      <li
        className={
          current === "name" && dir === "max"
            ? "btn_s_li btn_s_li_active"
            : "btn_s_li"
        }
        onClick={() => disp(setSorting(["title", "max"]))}>
        by name
        <SortArrowSVG />
      </li>
      <li
        className={
          current === "name" && dir === "min"
            ? "btn_s_li btn_s_li_active"
            : "btn_s_li"
        }
        onClick={() => disp(setSorting(["title", "min"]))}>
        by name
        <SortArrowSVG dir={"down"} />
      </li>
      <li
        className={
          current === "data" && dir === "max"
            ? "btn_s_li btn_s_li_active"
            : "btn_s_li"
        }
        onClick={() => disp(setSorting(["data", "max"]))}>
        by date
        <SortArrowSVG />
      </li>
      <li
        className={
          current === "data" && dir === "min"
            ? "btn_s_li btn_s_li_active"
            : "btn_s_li"
        }
        onClick={() => disp(setSorting(["data", "min"]))}>
        by date
        <SortArrowSVG dir={"down"} />
      </li>
      <li
        className={
          current === "priority" && dir === "max"
            ? "btn_s_li btn_s_li_active"
            : "btn_s_li"
        }
        onClick={() => disp(setSorting(["priority", "max"]))}>
        by priority
        <SortArrowSVG />
      </li>
      <li
        className={
          current === "priority" && dir === "min"
            ? "btn_s_li btn_s_li_active"
            : "btn_s_li"
        }
        onClick={() => disp(setSorting(["priority", "min"]))}>
        by priority
        <SortArrowSVG dir={"down"} />
      </li>
    </ul>
  );
};

const SortArrowSVG = ({ dir }) => {
  return (
    <svg
      className={dir === "down" ? "arr-down" : ""}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 7L12 17M12 7L16 11M12 7L8 11'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
