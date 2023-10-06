import React from "react";

const ProgressBar = ({ bgColor, felColor, felWidth }: any) => {
  return (
    <div className={`${bgColor} w-full rounded-full h-[6px] dark:bg-gray-700`}>
      <div
        className={`${felColor} h-[6px] rounded-full`}
        style={{ width: felWidth }}
      ></div>
    </div>
  );
};

export default ProgressBar;
