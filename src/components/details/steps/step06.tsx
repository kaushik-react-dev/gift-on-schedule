import React from "react";
import ProgressBar from "../../../common/progressBar";
import Calender from "../../../assets/details/calender";
import RightArrow from "../../../assets/details/rightArrow";
import Button from "../../../common/Button";
import UserIcon from "../../../assets/details/userIcon";
import EditIcon from "../../../assets/details/editIcon";
import CallIcon from "../../../assets/details/callIcon";
import EarthIcon from "../../../assets/details/earthIcon";
import LocationIcon from "../../../assets/details/locationIcon";
import { stepCount } from "../../../redux/slices/stepsCounter";
import { useDispatch, useSelector } from "react-redux";
import { confirmDetail } from "../api/confirmDetail";

const Step06 = () => {
  const felWidth = 100 / 2;
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  const handleEditClick = (step: number) => {
    dispatch(stepCount(step));
  };

  const handleConfirm = () => {
    dispatch(stepCount(8));
    confirmDetail();
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
        <div className="text-lg leading-10 font-normal text-[#2E354B] mt-2 flex justify-center text-center px-10">
          Please confirm your information
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

          <div className="cursor-pointer" onClick={() => handleEditClick(3)}>
            <div className="flex bg-[#F7F8F9] border border-[#E0E4EA] w-[340px] h-[38px] items-center justify-between rounded-t-md mt-3 cursor-pointer">
              <div className="flex justify-between items-center gap-3 ml-2">
                <UserIcon />

                <div className="text-[15px] font-normal text-[#2E354B] leading-[21px]">
                  {userData?.email ? userData?.email : "annadou@gmail.com"}
                </div>
              </div>
              <div className="mr-2">
                <EditIcon />
              </div>
            </div>

            <div className="flex bg-[#F7F8F9] border-b border-r border-l border-[#E0E4EA] w-[340px] h-[38px] items-center justify-between rounded-b-md cursor-pointer">
              <div className="flex justify-between items-center gap-3 ml-2">
                <CallIcon />

                <div className="text-[15px] font-normal text-[#2E354B] leading-[21px]">
                  {userData?.phone ? userData?.phone : "+1 917326937"}
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex bg-[#F7F8F9] border border-[#E0E4EA] w-[340px] h-[38px] items-center justify-between rounded-md mt-3 cursor-pointer"
            onClick={() => handleEditClick(4)}
          >
            <div className="flex justify-between items-center gap-3 ml-2">
              <EarthIcon />

              <div className="text-[15px] font-normal text-[#2E354B] leading-[21px]">
                {userData?.country ? userData?.country : "USA"}
              </div>
            </div>
            <div className="mr-1">
              <RightArrow />
            </div>
          </div>

          <div className="cursor-pointer" onClick={() => handleEditClick(5)}>
            <div className="flex bg-[#F7F8F9] border border-[#E0E4EA] w-[340px] h-[38px] items-center justify-between rounded-t-md mt-3 ">
              <div className="flex justify-between items-center gap-3 ml-2">
                <LocationIcon />

                <div className="text-[15px] font-normal text-[#2E354B] leading-[21px]">
                  {userData?.street
                    ? userData?.street
                    : "123 Main Street, Apt. E3"}
                </div>
              </div>
              <div className="mr-2">
                <EditIcon />
              </div>
            </div>

            <div className="flex bg-[#F7F8F9] border-b border-r border-l border-[#E0E4EA] w-[340px] h-[38px] items-center justify-between rounded-b-md ">
              <div className="flex justify-between items-center ml-9">
                <div className="text-[15px] font-normal text-[#2E354B] leading-[21px]">
                  {userData?.city ? userData?.city : "Los Angeles"}
                  {","}
                  {userData?.state ? userData?.state : "CA"}
                  {","}
                  {userData?.zip ? userData?.zip : "90001"}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button
              name={"Continue"}
              className={"text-white w-[300px] bg-blue-700"}
              onClick={handleConfirm}
            />
          </div>
          <div className="text-[10px] leading-[13px] font-normal text-[#2E354B] mt-8 flex justify-center text-center px-20 ">
            By proceeding, you agree to Gift On Schedule Privacy Policy & Terms
            of Use
          </div>
        </div>
      </div>
    </>
  );
};

export default Step06;
