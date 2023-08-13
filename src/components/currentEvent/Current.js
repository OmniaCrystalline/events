/** @format */

import React from "react";
import "./Current.style.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { events } from "../../redux/selectors";
import { Link } from "react-router-dom";
import BackLink from "../back-link/BackLink";
import { deleteEvent, setCurrentEvent } from "../../redux/slice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dateForCard } from "./functions";

const Current = () => {
  const { t } = useTranslation();
  const nav = useNavigate();
  const { id } = useParams();
  const disp = useDispatch();
  const eventList = useSelector(events);
  const currentEvent = eventList.find((e) => e.id === id);
  const { title, category, priority, date, time, description, location } =
    currentEvent;
  return (
    <>
      <BackLink />
      <div className='cur_content_container'>
        <h3 className='cur_title'>{title}</h3>
        <div className='cur_card'>
          <div className='cur_img_container'>
            <img src={`./${category}.jpg`} alt={title} className='cur_img' />
          </div>
          <div className='cur_content'>
            <p className='cur_supporting_text'>{description}</p>
            <div className='cur_widgets_container'>
              <span className='card1_widget card1_cat_widget cur_widget_shadow'>
                {t(category)}
              </span>
              <span className={`card1_widget ${priority} cur_widget_shadow`}>
                {t(priority.toLowerCase())}
              </span>
              <span className='card1_widget card1_cat_widget cur_widget_shadow'>
                {location}
              </span>
              <span className='card1_widget card1_cat_widget cur_widget_shadow'>
                {dateForCard(date)} {t("at")} {time}
              </span>
            </div>
            <div className='cur_btns_container'>
              <Link
                to='/edit'
                onClick={() => disp(setCurrentEvent(id))}
                className='cur_btn cur_edit_btn'>
                {t("Edit")}
              </Link>
              <button
                type='button'
                onClick={() => {
                  disp(deleteEvent(id));
                  nav("/events");
                }}
                className='cur_btn cur_del_btn'>
                {t("delete_event")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
