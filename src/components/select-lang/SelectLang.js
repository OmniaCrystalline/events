/** @format */

import "./SelectLang.style.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/slice";
import { lang } from "../../redux/selectors";
import { useTranslation } from "react-i18next";

const SelectLang = () => {
  const { i18n } = useTranslation();
  const [open, setopen] = useState(false);
  const disp = useDispatch();
  const currLang = useSelector(lang);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='select_container'>
      <button
        className='select_lang'
        type='button'
        onClick={() => setopen(!open)}>
        {currLang}
        <svg
          width='12'
          height='7'
          viewBox='0 0 12 7'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 1L6 6L11 1'
            stroke='#3F3F3F'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
       
      </button>
      {open && (
        <div className='option_lang'>
          <span
            onClick={(e) => {
              changeLanguage("uk");
              disp(changeLang(e.target.textContent));
              setopen(!open);
            }}>
            UK
          </span>
          <span
            onClick={(e) => {
              changeLanguage("en");
              disp(changeLang(e.target.textContent));
              setopen(!open);
            }}>
            EN
          </span>
        </div>
      )}
    </div>
  );
};

export default SelectLang;
