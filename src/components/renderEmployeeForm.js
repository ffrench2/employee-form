import * as React from "react";
import Calander from "./Calander";
import EmployeeName from "./EmployeeName";
import UpdateButton from "./UpdateButton";

const KeysToComponentMap = {
  Text: EmployeeName,
  Date: Calander,
  Command: UpdateButton,
};

const EmployeeFormRender = (config) => {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        key: config.label,
        ...config,
      },
      config && config
    );
  }
};

export default EmployeeFormRender;
