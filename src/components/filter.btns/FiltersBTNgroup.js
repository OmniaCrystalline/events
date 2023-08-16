/** @format */
import "./FiltersBTNgroup.style.css";
import React from "react";
import { useTranslation } from "react-i18next";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import ButtonAdd from "../button/ButtonAdd";

const FiltersBTNgroup = ({
  filterOpen,
  setfilterOpen,
  sortopen,
  setsortopen,
}) => {
  const { t } = useTranslation();
  return (
      <div className='btns_cont'>
        <h2 className='events_h'>{t("My_events")}</h2>
        <div className='fil_wrap'>
          <CategoryFilter open={filterOpen} setopen={setfilterOpen} />
        </div>
        <div className='sort_wrap'>
          <SortFilter open={sortopen} setopen={setsortopen} />
        </div>
        <div className='add_wrap'>
          <ButtonAdd />
        </div>
      </div>
  );
};

export default FiltersBTNgroup;
