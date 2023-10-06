import React, { useState } from "react";
import ProgressBar from "../../../common/progressBar";
import Calender from "../../../assets/details/calender";
import RightArrow from "../../../assets/details/rightArrow";
import Input from "../../../common/input";
import Button from "../../../common/Button";
import CallIcon from "../../../assets/details/callIcon";
import EmailIcon from "../../../assets/details/mailIcon";
import { stepCount } from "../../../redux/slices/stepsCounter";
import { useDispatch, useSelector } from "react-redux";
import UserIcon from "../../../assets/details/userIcon";
import EditIcon from "../../../assets/details/editIcon";
import { formStateData } from "../../../redux/slices/giftFormData";

const Step03 = () => {
  const felWidth = 100 / 5;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  const handleContinue = () => {
    dispatch(stepCount(4));
    dispatch(
      formStateData({
        ...userData,
        email: email,
        phone: phone,
      })
    );
  };

  const handleEditClick = (step: number) => {
    dispatch(stepCount(step));
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
        <div className="text-[32px] leading-10 font-bold text-[#FFF] mt-16 flex justify-center">
          Delivery Details
        </div>
        <div className="text-lg leading-10 font-normal text-[#FFF] mt-2 flex justify-center ">
          Please add email and phone
        </div>
        <div className="mt-12">
          <div className="flex flex-col">
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
                  03/17/2023
                </div>
              </div>
              <div className="mr-1">
                <RightArrow />
              </div>
            </div>

            <div
              className="flex bg-[#F7F8F9] border border-[#E0E4EA] w-[340px] h-[38px] items-center justify-between rounded-md mt-3 cursor-pointer"
              onClick={() => handleEditClick(2)}
            >
              <div className="flex justify-between items-center gap-3 ml-2">
                <UserIcon />
                <div className="text-[15px] font-normal text-[#2E354B] leading-[21px]">
                  {userData?.firstName ? userData?.firstName : "Annu"}{" "}
                  {userData?.lastName ? userData?.lastName : "Dou"}
                </div>
              </div>
              <div className="mr-2">
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="mt-9">
            <Input
              icon={<EmailIcon />}
              inputPlace="I Email"
              inputClass={"!rounded-t-md"}
              onChange={(e: any) => setEmail(e?.target?.value)}
              value={email}
            />
            <Input
              icon={<CallIcon />}
              inputPlace="I Phone"
              inputClass={"!rounded-b-md"}
              onChange={(e: any) => setPhone(e?.target?.value)}
              value={phone}
            />
          </div>
          <div className="text-[10px] leading-[13px] font-normal text-[#FFF] mt-4 flex justify-center">
            *We need this information to send the gift using FedEx mail campaign
          </div>
          <div className="flex justify-center mt-8">
            <Button
              name={"Continue"}
              className={"text-[#635BFF] w-[300px] bg-white"}
              onClick={handleContinue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step03;
