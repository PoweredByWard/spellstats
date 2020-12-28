import "./update.css";
import React from "react";
import { Link } from "react-router-dom";

function Update(props) {
  const date1 = new Date("December 27, 2020 00:24:00");
  const date2 = new Date();

  var hours = getDifferenceInHours(date1, date2);
  let date = hours.toFixed(0);
  if (date > 23) {
    date = getDifferenceInDays(date1, date2);
    if (date > 6) {
      date = date / 7;
      date = date.toFixed(0);
      if (date === 1) {
        date = date + " Week ago";
      } else {
        date = date + " Weeks ago";
      }
    } else {
      date = date.toFixed(0);
      if (date === 1) {
        date = date + " Day ago";
      } else {
        date = date + " Days ago";
      }
    }
  } else {
    if (date === 1) {
      date = date + " Hour ago";
    } else {
      date = date + " Hours ago";
    }
  }

  function getDifferenceInHours(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60);
  }
  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  return (
    <div className="update-container">
      <Link className="update-header">
        <img alt=""  src={props.img} className="update-img" />
      </Link>
      <div className="update-middle">
        <div className="update-middle-top">
          <div className="update-title-version">{props.version}</div>
          <span className="update-title-date">{date}</span>
        </div>
        <Link className="update-middle-description">
          {props.description}
        </Link>
      </div>
    </div>
  );
}
export default Update;
