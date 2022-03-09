import React, { useState } from "react";
import { config } from "./../App";
import "./styles.css";

const EmployeeName = (props) => {
  const data = Object.values(config.data);
  const name = data[0].employee__name;

  const [value, setValue] = useState(name);

  return (
    <div className="input">
      <input
        type="text"
        name="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default EmployeeName;
