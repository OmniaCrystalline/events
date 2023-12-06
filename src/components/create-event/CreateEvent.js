/** @format */

import React, { useState } from "react";
import "./CreateEvent.style.css";
import "../button/Button.style.css";
import { useForm } from "react-hook-form";
import { addEvent } from "../../redux/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import InputDateImitator from "./InputDateImitator";
import BackLink from "../back-link/BackLink";
import uniqid from "uniqid";
import Time from "../time/Time";
import SelectCategory from "../form-select-category/SelectCategory";
import SelectPriority from "../form-select-priority/SelectPriority";

const display = (hour) => {
  let data = null;
  if (hour !== 0) data = hour < 10 ? "0" + hour : hour;
  if (hour === 0) data = "12";
  return data;
};

const CreateEvent = () => {
  const newDate = new Date();
  const todayMonth = newDate.getMonth();
  const todayYear = newDate.getFullYear();
  const todayDate = newDate.getDate();
  const timeNow = `${display(newDate.getHours())}:${display(
    newDate.getMinutes()
  )}`;
  const dateNow = `${todayYear}-${
    todayMonth >= 10 ? todayMonth : "0" + todayMonth.toString()
  }-${todayDate}`;
  const [time, settime] = useState(timeNow);
  const [date, setdate] = useState(dateNow);
  const [day, setday] = useState(todayDate);
  const [month, setmonth] = useState(todayMonth);
  const [year, setyear] = useState(todayYear);
  const [cat, setcat] = useState("");
  const [priority, setpriority] = useState("");
  const [dateOpen, setdateOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const disp = useDispatch();

  const onSubmit = (data) => {
    data.time = time;
    data.id = uniqid();
    data.date = date;
    data.category = cat;
    data.priority = priority;
    disp(addEvent(data));
    navigate(`/${data.id}`);
  };

  return (
    <div className='container create_container'>
      <BackLink className='create_back' />
      <h3 className='create_h'>{t("create_h")}</h3>
      <form className='form_event ' onSubmit={handleSubmit(onSubmit)}>
        <label
          className={errors?.title ? "lab_title error_input" : "lab_title"}>
          {t("label_title")}
          <input
            className='input'
            type='text'
            {...register("title", {
              required: true,
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: t("pattern"),
              },
              minLength: {
                value: 3,
                message: t("length"),
              },
            })}
          />
          <span>{errors?.title?.message}</span>
        </label>
        <label
          className={
            errors?.description
              ? "lab_description error_input"
              : "lab_description"
          }>
          {t("label_description")}
          <input
            className='input'
            type='text'
            {...register("description", {
              required: true,
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: t("pattern"),
              },
              minLength: { value: 3, message: t("length") },
            })}
          />
          <span>{errors?.description?.message}</span>
        </label>
        <label className={errors?.date ? "lab_date input_error" : "lab_date"}>
          {t("label_date")}
          <InputDateImitator
            setdateOpen={setdateOpen}
            dateOpen={dateOpen}
            date={date}
            day={day}
            month={month}
            year={year}
            setyear={setyear}
            setmonth={setmonth}
            setday={setday}
            setdate={setdate}
          />
          <span>{errors?.date?.message}</span>
        </label>
        <Time settime={settime} time={time} />
        <label
          className={
            errors?.location ? "lab_location error_input" : "lab_location"
          }>
          {t("lab_location")}
          <input
            className='input'
            type='text'
            {...register("location", {
              required: true,
              minLength: { value: 3, message: t("length") },
              pattern: {
                value: /^[A-Za-z0-9 ]+$/i,
                message: t("pattern"),
              },
            })}
          />
          <span>{errors?.location?.message}</span>
        </label>
        <label>
          {t("lab_cat")}
          <SelectCategory cat={cat} setcat={setcat} />
        </label>
        <span>{errors?.category?.message}</span>
        <label className='lab_pic'>
          {t("lab_add_pic")}
          <input
            className='input'
            type='file'
            {...register("picture", {
              //required: true,
              disabled: true,
            })}
          />
        </label>
        <label className='lab_priority'>
          {t("lab_priority")}
          <SelectPriority priority={priority} setpriority={setpriority} />
        </label>
        <button className='btn lab_btn' title='Add event'>
          {t("create_btn_add_event")}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
