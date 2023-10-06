import React from "react";

const Button = ({ name, className, onClick }: any) => {
  return (
    <button
      type="button"
      className={`${className} font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
