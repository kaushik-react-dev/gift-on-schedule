import React from "react";
import { Select } from "antd";
import "../../styles/style.css";

interface customSelectProp {
  inputPlace: string;
  onChange?: any;
  value?: any;
}

const CustomSelect = ({ inputPlace, onChange, value }: customSelectProp) => {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    onChange(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    console.log(value)
  };
  return (
    <Select
      showSearch
      style={{ width: "340px", height: "48px" }}
      className="rounded-none"
      onChange={handleChange}
      value={value}
      placeholder={inputPlace}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={[
        {
          value: "USA",
          label: "USA",
        },
        {
          value: "Canada",
          label: "Canada",
        },
        {
          value: "Other",
          label: "Other",
        },
      ]}
    />
  );
};

export default CustomSelect;
