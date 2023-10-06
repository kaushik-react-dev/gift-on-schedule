import { DatePicker } from "antd";
import React from "react";

const DatePickerAntd = ({ onChange }: any) => {
  return (
    <div>
      <DatePicker
        format="MM/DD/YYYY"
        placeholder="Select Delivery Date"
        onChange={onChange}
        style={{ width: "340px", height: "38px" }}
      />
    </div>
  );
};

export default DatePickerAntd;
