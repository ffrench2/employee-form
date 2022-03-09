import * as React from "react";
import EmployeeForm from "./components/renderEmployeeForm";

export const config = {
  view: {
    "B47B298A-D09D-4BA1-8BEC-2688532668CF": {
      title: "Employee Form",
      children: {
        "d27596e2-a7ba-4826-af33-41bb58df6275": {
          component: "Text",
          label: "Name",
          name: "employeeName",
          path: "employee__name",
        },
        "d27596e2-a7ba-4826-af33-41bb58df1111": {
          component: "Date",
          label: "Birthday",
          name: "employeeBirthday",
          path: "date",
        },
        "d27596e2-a7ba-4826-af33-41bb58df6266": {
          component: "Command",
          text: "Update",
        },
      },
    },
  },
  data: {
    "B47B298A-D09D-4BA1-8BEC-2688532668CF": {
      date: "1971-01-01T00:00:00.0000000",
      employee__name: "John Smith",
    },
  },
};

const obj = Object.values(config.view);
const children = Object.values(obj[0].children);
const title = obj[0].title;

function App() {
  return (
    <form className="form">
      {title}
      {children.map((child) => EmployeeForm(child))}
    </form>
  );
}

export default App;
