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
import Pagination from "../pagination/Pagination";
import { search } from "../../redux/selectors";
import FiltersBTNgroup from "../filter.btns/FiltersBTNgroup";

const Events = () => {
  const [sortopen, setsortopen] = useState(false);
  const [filterOpen, setfilterOpen] = useState(false);
  const query = useSelector(search);
  const currpage = useSelector(currentPage);
  const eventsList = useSelector(events);
  const filter = useSelector(currentCategory || "All");
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
    <div className='container events_container'>
      <FiltersBTNgroup
        filterOpen={filterOpen}
        setfilterOpen={setfilterOpen}
        sortopen={sortopen}
        setsortopen={setsortopen}
      />
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
  console.log('arr, filter', arr, filter)
  return arr.filter((e) => e.category === filter || filter === "All");
};

const sortedList = (arr, type, dir) => {
  console.log('type', type)
  if (dir === "min" && type !== "priority") {
    return [...arr].reverse(
      (a, b) => a[type].toLowerCase() - b[type].toLowerCase()
    );
  }
  if (dir === "max" && type !== "priority") {
    return [...arr].sort(
      (a, b) => a[type].toLowerCase() - b[type].toLowerCase()
    );
  }
  if (type === "priority") {
    const high = arr.filter((e) => e.priority === "High");
    const medium = arr.filter((e) => e.priority === "Medium");
    const low = arr.filter((e) => e.priority === "Low");
    const sorted = [...high, ...medium, ...low];
    return dir === "max" ? sorted : sorted.reverse();
  }
};
