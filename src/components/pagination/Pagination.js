/** @format */

import "./Pagination.style.css";
import React from "react";
import Chevron from "./Chevron";
import { useDispatch, useSelector } from "react-redux";
import { currentPage, events } from "../../redux/selectors";
import { setCurrantPage } from "../../redux/slice";

const Pagination = () => {
  const disp = useDispatch();
  const curr = useSelector(currentPage);
  const list = useSelector(events);
    const sm = window.innerWidth < 768;
    const lastPage = sm
      ? Math.ceil(list.length / 6)
      : Math.ceil(list.length / 8);

  const handleClick = (e) => {
    const data = e.target.dataset.val;
    if (data === "next") disp(setCurrantPage(curr + 1));
  };
  return (
    <div className='pag_container' onClick={handleClick}>
      <button
        onClick={() => disp(setCurrantPage(curr > 1 ? curr - 1 : 1))}
        data-val='prev'
        className='pag_btn'>
        <Chevron />
      </button>
      <button data-val='curr' className='pag_btn pag_curr_page'>
        {curr}
      </button>
      <button
        data-val='next'
        onClick={() => disp(setCurrantPage(curr > 1 ? curr + 1 : 1))}
        className='pag_btn'>
        {curr + 1}
      </button>
      <button
        onClick={() => disp(setCurrantPage(curr + 2))}
        data-val='step2'
        className='pag_btn pag_span_lg'>
        {curr + 2}
      </button>
      <button
        data-val='step5'
        onClick={() => disp(setCurrantPage(curr + 5))}
        className='pag_btn'>
        ...
      </button>
      <button
        onClick={() => disp(setCurrantPage(lastPage))}
        data-val='last'
        className='pag_btn'>
        {lastPage}
      </button>
      <button
        onClick={() => disp(setCurrantPage(curr + 1))}
        data-val='next'
        className='pag_btn chevron_right'>
        <Chevron />
      </button>
    </div>
  );
};

export default Pagination;
