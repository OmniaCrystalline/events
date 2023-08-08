/** @format */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { currentCategory } from "../../../redux/selectors";
import { setCategory } from "../../../redux/slice";


const F = () => {
  const { t } = useTranslation();
  const [open, setopen] = useState(false);
  const current = useSelector(currentCategory);

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
      className={open ? "s f_open" : "s f_close"}
      onClick={() => setopen(!open)}>
      <FSVG />
      <span className={open ? "s_title_visible" : "s_title"}>
        {current === "All" ? t("Category") : t(current)}
      </span>
      {
        <div className={open ? "s_list" : "visualy_hidden"}>
          {open &&
            categories.map((e) => <Item key={e} elem={e} current={current} />)}
        </div>
      }
    </button>
  );
};

export default F;

const FSVG = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className='f_svg'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 4L9 12V18L15 21V12L20 4H4Z'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const Item = ({ elem, current }) => {
  const disp = useDispatch();
  const { t } = useTranslation();
  return (
    <span
      onClick={() => disp(setCategory(elem))}
      className={
        elem === current ? "s_list_span s_active_item " : "s_list_span"
      }>
      {t(elem)}
    </span>
  );
};
