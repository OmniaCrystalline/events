/** @format */

import React from "react";

const CategoryWidget = ({ category, priority }) => {
  let classList = "";
  if (category) classList = "widget_span capture category";
  if (priority) classList = `widget_span capture ${priority.toLowerCase()}`;
    return <span className={classList}>{category || priority }</span>;
};

export default CategoryWidget;
