import React from "react";
import ProgressBar from "../../../common/progressBar";
import DatePickerAntd from "../../../common/datePicker";
import { stepCount } from "../../../redux/slices/stepsCounter";
import { useDispatch, useSelector } from "react-redux";
import { formStateData } from "../../../redux/slices/giftFormData";
import { format } from "node:path/win32";
import dayjs from "dayjs";

const Step01 = () => {
  const felWidth = 100 / 7;
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  const handleDatePicker = (date: any) => {
    dispatch(
      formStateData({
        ...userData,
        deliveryDate: dayjs(date).format("MM/DD/YYYY"),
      })
    );
    console.log(date);
    if (date !== "") {
      dispatch(stepCount(2));
    }
  };

  return (
    <>
      <div className="w-[340px]">
        <div>
          <ProgressBar
            bgColor={"bg-[#b050f4]"} // #edd3fb
            felColor={"bg-[#fff]"} // #af37ee
            felWidth={`${felWidth}%`}
          />
        </div>
        <div className="text-[32px] leading-10 font-bold text-[#fff] mt-16 flex justify-center">
          Delivery Details
        </div>
        <div className="text-lg leading-10 font-normal text-[#fff] mt-2 flex justify-center ">
          Please choose delivery date
        </div>
        <div className=" mt-10 flex justify-center">
          <DatePickerAntd onChange={handleDatePicker} />
        </div>
      </div>
    </>
  );
};

export default Step01;
