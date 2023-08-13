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

const Edit = () => {
  const [dateOpen, setdateOpen] = useState(false);
  const { t } = useTranslation();
  const disp = useDispatch();
  const nav = useNavigate();
  const id = useSelector(currentEvent);
  const list = useSelector(events);
  const curData = list.find((e) => e.id === id);
  const [date, setdate] = useState(curData.date);
  console.log('date', date)
  if (!curData) nav("/");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: curData,
  });

  const onSubmit = (data) => {
    data.date = date;
    console.log('data', data)
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
          />
          <span>{errors?.date?.message}</span>
        </label>
        <label
          className={errors?.time ? "lab_time input_error" : "input_error"}>
          {t("label_time")}
          <input type='time' {...register("time", { required: true })} />
          <span>{errors?.time?.message}</span>
        </label>
        <label
          className={
            errors?.location ? "lab_location error_input" : "lab_location"
          }>
          {t("lab_location")}
          <input
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
        <label className={errors?.category ? "lab_cat error_input" : "lab_cat"}>
          {t("lab_cat")}
          <select {...register("category", { required: true })}>
            <option value='Art'>{t("Art")}</option>
            <option value='Music'>{t("Music")}</option>
            <option value='Business'>{t("Business")}</option>
            <option value='Conference'>{t("Conference")}</option>
            <option value='Workshop'>{t("Workshop")}</option>
            <option value='Party'>{t("Party")}</option>
            <option value='Sport'>{t("Sport")}</option>
          </select>
        </label>
        <span>{errors?.category?.message}</span>
        <label className='lab_pic'>
          {t("lab_add_pic")}
          <input
            type='file'
            {...register("picture", {
              //required: true,
              disabled: true,
            })}
          />
        </label>
        <label
          className={
            errors?.priority ? "lab_priority error_input" : "lab_priority "
          }>
          {t("lab_priority")}
          <select {...register("priority", { required: true })}>
            <option value='High' className='s_list_span'>
              {t("high")}{" "}
            </option>
            <option value='Medium'>{t("medium")}</option>
            <option value='Low'>{t("low")}</option>
          </select>
          <span>{errors?.priority?.message}</span>
        </label>
        <button className='btn lab_btn' title='Save'>
          {t("save")}
        </button>
      </form>
    </div>
  );
};

export default Edit;
