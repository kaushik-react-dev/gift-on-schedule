import React from "react";

interface InputProp {
  label?: string;
  icon?: any;
  inputPlace?: string;
  inputClass?: string;
  value?: any;
  onChange?: any;
}

const Input = ({
  label,
  icon,
  inputPlace,
  inputClass,
  onChange,
  value,
}: InputProp) => (
  <>
    {label && (
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
    )}
    <div className="relative rounded-md bg-[red]">
      <div className="absolute inset-y-0 left-0 flex items-center px-3">
        <span className="text-gray-500 sm:text-sm">
          {/* <UserIcon /> */}
          {icon}
        </span>
      </div>
      <input
        type="text"
        name="price"
        id="price"
        className={`${inputClass} block w-full border-b border-[#E0E4EA] h-[48px] pl-9 pr-20 text-gray-900 placeholder:text-[#ABB0B9] focus:border-b focus:border-[#E0E4EA]  outline-none sm:text-sm sm:leading-6`}
        placeholder={inputPlace}
        value={value}
        onChange={onChange}
      />
    </div>
  </>
);

export default Input;
