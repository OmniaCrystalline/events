/** @format */

import "./Edit.style.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BackLink from "../back-link/BackLink";
import { useDispatch, useSelector } from "react-redux";
import { currentEvent, events } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { updateEvent } from "../../redux/slice";
import { useTranslation } from "react-i18next";
import InputDateImitator from "../create-event/InputDateImitator";
import Time from "../time/Time";
import SelectCategory from "../form-select-category/SelectCategory";
import SelectPriority from "../form-select-priority/SelectPriority";

const Edit = () => {
  const [dateOpen, setdateOpen] = useState(false);
  const { t } = useTranslation();
  const disp = useDispatch();
  const nav = useNavigate();
  const id = useSelector(currentEvent);
  const list = useSelector(events);
  const curData = list.find((e) => e.id === id);
  const [day, setday] = useState(
    Number(curData.date.slice(-2)) < 0
      ? Number(curData.date.slice(-1))
      : Number(curData.date.slice(-2))
  );
  const [month, setmonth] = useState(
    Number(curData.date.slice(5, 7)) < 0
      ? Number(curData.date.slice(5, 6))
      : Number(curData.date.slice(5, 7))
  );
  const [year, setyear] = useState(Number(curData.date.slice(0, 4)));
  const [time, settime] = useState(curData.time);
  const [date, setdate] = useState(curData.date);
  const [cat, setcat] = useState(curData.category);
  const [priority, setpriority] = useState(curData.priority);
  if (!curData) nav("/");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: curData,
  });

  const onSubmit = (data) => {
    data.category = cat;
    data.date = date;
    data.time = time;
    data.priority = priority;
    disp(updateEvent(data));
    nav(`/${id}`);
  };

  return (
    <div className='container create_container'>
      <h3 className='edit_heading'>Edit event</h3>
      <BackLink />
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
            type='text'
            className='input'
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
            setdate={setdate}
            day={day}
            month={month}
            year={year}
            setyear={setyear}
            setmonth={setmonth}
            setday={setday}
          />
          <span>{errors?.date?.message}</span>
        </label>
        <Time time={time} settime={settime} />
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
        <label className='lab_cat'>
          {t("lab_cat")}
          <SelectCategory cat={cat} setcat={setcat} />
        </label>

        <label className='lab_pic'>
          {t("lab_add_pic")}
          <input
            type='file'
            className='input'
            {...register("picture", {
              //required: true,
              disabled: true,
            })}
          />
        </label>
        <label className='lab_priority '>
          {t("lab_priority")}
          <SelectPriority priority={priority} setpriority={setpriority} />
        </label>
        <button className='btn lab_btn' title='Save'>
          {t("save")}
        </button>
      </form>
    </div>
  );
};

export default Edit;
