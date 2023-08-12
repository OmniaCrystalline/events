/** @format */

import React, { useState } from "react";
import "./CreateEvent.style.css";
import "../button/Button.style.css";
import { useForm } from "react-hook-form";
import { addEvent } from "../../redux/slice";
import { useDispatch } from "react-redux";
import BackLink from "../back-link/BackLink";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { useTranslation } from "react-i18next";
import InputDateImitator from "./InputDateImitator";

const CreateEvent = () => {
  const [date, setdate] = useState('');
  const [dateOpen, setdateOpen] = useState(false)
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const disp = useDispatch();
  console.log("errors", errors);

  const onSubmit = (data) => {
    data.id = uniqid();
    data.date = date;
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
          <span>{t("lab_priority")}</span>
          <select {...register("priority", { required: true })}>
            <option value='High' className='s_list_span'>
              {t("high")}{" "}
            </option>
            <option value='Medium'>{t("medium")}</option>
            <option value='Low'>{t("low")}</option>
          </select>
          <span>{errors?.priority?.message}</span>
        </label>
        <button className='btn lab_btn' title='Add event'>
          {t("create_btn_add_event")}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
