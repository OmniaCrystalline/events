/** @format */
import "./S.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setSorting } from "../../../redux/slice";
import { sort, sortDirection } from "../../../redux/selectors";


const S = () => {
  const [open, setopen] = useState(false);
  const { t } = useTranslation();
  return (
    <button
      className={open ? "s s_open" : "s s_close"}
      onClick={() => setopen(!open)}>
        
        <span className={open ? "s_title_visible" : "s_title"}>
          {t("sort_by")}
        </span>
        <SortSVG />
      {open && <SList />}
    </button>
  );
};

export default S;

const SList = () => {
  const disp = useDispatch();
  const { t } = useTranslation();
  const sortType = useSelector(sort);
  const sortDir = useSelector(sortDirection);

  const handleDataSet = (e) => {
    const { sort, dir } = e.target.dataset;
      disp(setSorting([sort, dir]));
  };
  return (
    <div onClick={handleDataSet} className='s_list'>
      <span
        data-sort='title'
        data-dir='max'
        className={
          sortType === "title" && sortDir === "max"
            ? "s_list_span s_active_item "
            : "s_list_span"
        }>
        {t("by_name")}
        <ArrowUp active={sortType === "title" && sortDir === "max"} />
      </span>
      <span
        data-sort='title'
        data-dir='min'
        className={
          sortType === "title" && sortDir === "min"
            ? "s_list_span s_active_item "
            : "s_list_span"
        }>
        {t("by_name")}
        <ArrowDown
          active={sortType === "title" && sortDir === "min"}
          className='s_list_span'
        />
      </span>
      <span
        data-sort='date'
        data-dir='max'
        className={
          sortType === "date" && sortDir === "max"
            ? "s_list_span s_active_item "
            : "s_list_span"
        }>
        {t("by_data")}
        <ArrowUp active={sortType === "date" && sortDir === "max"} />
      </span>
      <span
        data-sort='date'
        data-dir='min'
        className={
          sortType === "date" && sortDir === "min"
            ? "s_list_span s_active_item "
            : "s_list_span"
        }>
        {t("by_data")}
        <ArrowDown active={sortType === "date" && sortDir === "min"} />
      </span>
      <span
        data-sort='priority'
        data-dir='max'
        className={
          sortType === "priority" && sortDir === "max"
            ? "s_list_span s_active_item "
            : "s_list_span"
        }>
        {t("by_priority")}
        <ArrowUp active={sortType === "priority" && sortDir === "max"} />
      </span>
      <span
        data-sort='priority'
        data-dir='min'
        className={
          sortType === "priority" && sortDir === "min"
            ? "s_list_span s_active_item "
            : "s_list_span"
        }>
        {t("by_priority")}
        <ArrowDown active={sortType === "priority" && sortDir === "min"} />
      </span>
    </div>
  );
};

const SortSVG = () => {
  return (
    <svg
      className='sort_filter_svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5M14 5H20M10 5L4 5M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM16 12H4M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19ZM8 19H20'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

const ArrowDown = ({ active }) => {
  return (
    <svg
      className={active ? "arrow_sort_up sort_active_svg" : "arrow_sort_up"}
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

const ArrowUp = ({ active }) => {
  return (
    <svg
      className={active ? "arrow_sort_down sort_active_svg" : "arrow_sort_down"}
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
