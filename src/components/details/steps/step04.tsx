import React, { useState } from "react";
import ProgressBar from "../../../common/progressBar";
import Button from "../../../common/Button";
import CustomSelect from "../../../common/customSelect";
import { stepCount } from "../../../redux/slices/stepsCounter";
import { useDispatch, useSelector } from "react-redux";
import { formStateData } from "../../../redux/slices/giftFormData";

const Step04 = () => {
  const felWidth = 100 / 4;

  const dispatch = useDispatch();
  const [country, setCountry] = useState();

  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  const handleContinue = () => {
    dispatch(stepCount(5));
    dispatch(
      formStateData({
        ...userData,
        country: country,
      })
    );
  };

  return (
    <>
      <div className="w-[340px]">
        <div>
          <ProgressBar
            bgColor={"bg-[#edd3fb]"} // #edd3fb
            felColor={"bg-[#af37ee]"} // #af37ee
            felWidth={`${felWidth}%`}
          />
        </div>
        <div className="text-[32px] leading-10 font-bold text-[#2E354B] mt-16 flex justify-center">
          Delivery Details
        </div>
        <div className="text-lg leading-10 font-normal text-[#2E354B] mt-2 flex justify-center ">
          Choose delivery Country
        </div>
        <div className="mt-10">
          <div>
            <CustomSelect
              inputPlace="Country"
              onChange={(value: any) => setCountry(value)}
              value={country}
            />
          </div>
          <div className="text-[10px] leading-[13px] font-normal text-[#2E354B] mt-8 flex justify-center">
            *We need this information to send the gift using FedEx mail campaign
          </div>
          <div className="flex justify-center mt-8">
            <Button
              name={"Continue"}
              className={"text-white w-[300px] bg-blue-700"}
              onClick={handleContinue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step04;
