import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Lisbon </h1>
      <ul>
        <li>Wednesday 07:52</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          >
            {" "}
            Weather icon
          </img>
          6℃
        </div>
      </div>
      <ul></ul>
      Hello from weath
    </div>
  );
}
