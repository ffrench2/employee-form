import React, { useState } from "react";
import { config } from "./../App";
import "./styles.css";

const Calander = (props) => {
  const data = Object.values(config.data);
  const name = data[0].date;

  const [value, setValue] = useState(name);
  const date = value.split("T")[0];

  return (
    <div className="input">
      <input
        type="date"
        id="start"
        name={props.name}
        value={date}
        min="1916-01-01"
        max="2025-12-31"
        onChange={(e) => setValue(e.target.value)}
      ></input>

      <label htmlFor="start">{props.label}</label>
    </div>
  );
};

export default Calander;
