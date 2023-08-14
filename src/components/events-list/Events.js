/** @format */
import "./Events.style.css";
import React, { useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  currentCategory,
  currentPage,
  events,
  sort,
  sortDirection,
} from "../../redux/selectors";
import ButtonAdd from "../button/ButtonAdd";
import Pagination from "../pagination/Pagination";
import { search } from "../../redux/selectors";
import { useTranslation } from "react-i18next";
import S from "../filters/sort.filter/S";
import F from "../filters/category.filter/F";

const Events = () => {
  const { t } = useTranslation();
  const [sortopen, setsortopen] = useState(false);
  const [filetropen, setfilteropen] = useState(false);
  const query = useSelector(search);
  const currpage = useSelector(currentPage);
  const eventsList = useSelector(events);
  const filter = useSelector(currentCategory || 'All');
  const sortType = useSelector(sort);
  const sortDir = useSelector(sortDirection);
  const data = filterList(eventsList, filter);
  const sorted = sortedList(data, sortType, sortDir);
  const filteredByQuery = sorted.filter(
    (e) =>
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.description.toLowerCase().includes(query.toLowerCase())
  );
  const quantityItemsOnPage = window.innerWidth < 1280 ? 6 : 8;
  const beg = (currpage - 1) * quantityItemsOnPage;
  const end = beg + quantityItemsOnPage;
  const paginated = filteredByQuery.slice(beg, end);

  return (
    <div className='container'>
      <div className='events_btn_group'>
        <h2 className='headline_events_h2'>{t("My_events")}</h2>
        <div
          className={filetropen ? "btn_e_wrapper_f_open" : "btn_e_wrapper_f"}
          onClick={() => setfilteropen(!filetropen)}>
          <F />
        </div>
        <div
          className={sortopen ? "btn_e_wrapper_s_open" : "btn_e_wrapper_s"}
          onClick={() => setsortopen(!sortopen)}>
          <S />
        </div>
        <ButtonAdd />
      </div>

      <div className='events_list_container'>
        {paginated.map((elem, index) => (
          <Card event={elem} key={index} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Events;

const filterList = (arr, filter) => {
  return arr.filter((e) => e.category === filter || filter === "All");
};

const sortedList = (arr, type, dir) => {
  if (dir === "min" && type !== "priority") {
    return [...arr].reverse((a, b) => a[type].toLowerCase() - b[type].toLowerCase());
  }
  if (dir === "max" && type !== "priority") {
    return [...arr].sort((a, b) => a[type].toLowerCase() - b[type].toLowerCase());
  }
  if (type === "priority") {
    const high = arr.filter((e) => e.priority === "High");
    const medium = arr.filter((e) => e.priority === "Medium");
    const low = arr.filter((e) => e.priority === "Low");
    const sorted = [...high, ...medium, ...low];
    return dir === "max" ? sorted : sorted.reverse();
  }
};
