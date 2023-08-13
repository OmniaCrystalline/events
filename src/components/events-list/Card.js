/** @format */

import { Link } from "react-router-dom";
import "./Card.style.css";
import { useTranslation } from "react-i18next";
import { dateForCard } from "../currentEvent/functions";

import React from "react";

const Card = ({ event }) => {
  const { t } = useTranslation();
  const { title, description, date, time, category, location, priority, id } =
    event;
  return (
    <div className='card1'>
      <div className='card1_widgets'>
        <span className='card1_widget card1_cat_widget'>{t(category)}</span>
        <span className={`card1_widget ${priority}`}>
          {t(priority.toLowerCase())}
        </span>
      </div>
      <div className='card1_img_container'>
        <img
          className='card1_img'
          src={`./${category}.jpg`}
          alt={title}
          width='272px'
          height='336px'></img>
      </div>
      <div className='card1_action_container'>
        <div className='card1_data'>
          <span>
            {dateForCard(date)} {t("at")} {time}
          </span>
          <span>{location}</span>
        </div>
        <h3 className='card1_headline'>{title}</h3>
        <p className='card1_supporting_text'>{description}</p>
        <div className='card1_stacked'>
          <Link to={`/${id}`} className='card1_btn'>
            {t("more_info")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
