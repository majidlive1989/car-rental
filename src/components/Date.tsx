import React, { useState } from "react";
import DatePicker from "react-datepicker";

import styled from "../react-datepicker-cssmodules.css";

// CSS Modules, react-datepicker-cssmodules.css
// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const ExampleDates = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
