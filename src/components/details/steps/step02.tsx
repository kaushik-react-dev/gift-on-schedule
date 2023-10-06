import React, { useState } from "react";
import ProgressBar from "../../../common/progressBar";
import Calender from "../../../assets/details/calender";
import RightArrow from "../../../assets/details/rightArrow";
import Input from "../../../common/input";
import Button from "../../../common/Button";
import UserIcon from "../../../assets/details/userIcon";
import { stepCount } from "../../../redux/slices/stepsCounter";
import { useDispatch, useSelector } from "react-redux";
import { formStateData } from "../../../redux/slices/giftFormData";

const Step02 = () => {
  const felWidth = 100 / 6;
  const dispatch = useDispatch();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  const handleEditClick = (step: number) => {
    dispatch(stepCount(step));
  };

  const handleFNChange = (e: any) => {
    setFName(e?.target?.value);
    if (e?.target?.value === "") {
      setFNameError("First name is required.");
    } else {
      setFNameError("");
    }
  };
  const handleLNChange = (e: any) => {
    setLName(e?.target?.value);
    if (e?.target?.value === "") {
      setLNameError("Last name is required.");
    } else {
      setLNameError("");
    }
  };

  const handleContinue = () => {
    if (fName === "") {
      setFNameError("First name is required.");
    }
    if (lName === "") {
      setLNameError("Last name is required.");
    }
    if (fName !== "" && lName !== "") {
      dispatch(stepCount(3));
      dispatch(
        formStateData({
          ...userData,
          firstName: fName,
          lastName: lName,
        })
      );
    }
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
          Please add your name and surname
        </div>
        <div className="mt-10">
          <div
            className="flex bg-[#F7F8F9] border border-[#E0E4EA] w-[340px] h-[38px] items-center justify-between rounded-md cursor-pointer"
            onClick={() => handleEditClick(1)}
          >
            <div className="flex justify-between items-center gap-3 ml-2">
              <Calender />
              <div className="text-[15px] font-normal text-[#2E354B] leading-[21px]">
                Select Delivery Date
              </div>
              <div className="text-[13px] font-normal text-[#2E354B] leading-[18px] ml-6">
                {userData?.deliveryDate ? userData?.deliveryDate : "03/17/2023"}
              </div>
            </div>
            <div className="mr-1">
              <RightArrow />
            </div>
          </div>
          <div className="mt-9">
            <Input
              icon={<UserIcon />}
              inputPlace="I First Name"
              // inputClass={"!rounded-t-md"}
              onChange={handleFNChange}
              value={fName}
            />
            <div className="block text-xs text-[red]">{fNameError}</div>
            <Input
              icon={<UserIcon />}
              inputPlace="I Last Name"
              // inputClass={"!rounded-b-md"}
              onChange={handleLNChange}
              value={lName}
            />
            <div className="block text-xs text-[red]">{lNameError}</div>
          </div>
          <div className="text-[10px] leading-[13px] font-normal text-[#2E354B] mt-4 flex justify-center">
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

export default Step02;
