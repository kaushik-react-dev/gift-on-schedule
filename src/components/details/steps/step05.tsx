import React, { useState } from "react";
import ProgressBar from "../../../common/progressBar";
import Calender from "../../../assets/details/calender";
import RightArrow from "../../../assets/details/rightArrow";
import Input from "../../../common/input";
import Button from "../../../common/Button";
import LocationIcon from "../../../assets/details/locationIcon";
import CustomSelect from "../../../common/customSelect";
import { stepCount } from "../../../redux/slices/stepsCounter";
import { useDispatch, useSelector } from "react-redux";
import EarthIcon from "../../../assets/details/earthIcon";
import { formStateData } from "../../../redux/slices/giftFormData";

const Step05 = () => {
  const felWidth = 100 / 3;
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [zipError, setZipError] = useState("");
  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  const handleEditClick = (step: number) => {
    dispatch(stepCount(step));
  };

  const handleContinue = () => {
    if (street === "") {
      setStreetError("Street is required.");
    }
    if (state === "") {
      setStateError("State is required.");
    }
    if (city === "") {
      setCityError("City is required.");
    }
    if (zip === "") {
      setZipError("Zip is required.");
    }
    if (street !== "" && state !== "" && city !== "" && zip !== "") {
      dispatch(stepCount(6));
      dispatch(
        formStateData({
          ...userData,
          city: city,
          zip: zip,
          street: street,
          state: state,
        })
      );
    }
  };

  const handleChangeStreet = (e: any) => {
    setStreet(e?.target?.value);
    if (e?.target?.value !== "") {
      setStreetError("");
    } else {
      setStreetError("Street is required.");
    }
  };

  const handleChangeState = (value: any) => {
    setState(value);
    if (value !== "") {
      setStateError("");
    } else {
      setStateError("State is required.");
    }
  };

  const handleChangCity = (e: any) => {
    setCity(e?.target?.value);
    if (e?.target?.value !== "") {
      setCityError("");
    } else {
      setCityError("City is required.");
    }
  };
  const handleChangeZip = (e: any) => {
    setZip(e?.target?.value);
    if (e?.target?.value !== "") {
      setZipError("");
    } else {
      setZipError("Zip is required.");
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
        <div className="text-[32px] leading-10 font-bold text-[#FFF] mt-16 flex justify-center">
          Delivery Details
        </div>
        <div className="text-lg font-normal text-[#FFF] mt-2 flex justify-center text-center px-10">
          Add your delivery address to receive the gift
        </div>
        <div className="mt-10">
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
          <div className="mt-9">
            <Input
              icon={<LocationIcon />}
              inputPlace="I Street , Apartment "
              inputClass={"!rounded-t-md"}
              onChange={handleChangeStreet}
              value={street}
            />
            <div className="block text-xs text-[red]">{streetError}</div>

            <Input
              icon={<LocationIcon />}
              inputPlace="I City"
              onChange={handleChangCity}
              value={city}
            />
            <div className="block text-xs text-[red]">{cityError}</div>

            <CustomSelect
              inputPlace="State"
              onChange={(value: any) => handleChangeState(value)}
              value={state}
            />
            <div className="block text-xs text-[red]">{stateError}</div>

            <Input
              icon={<LocationIcon />}
              inputPlace="I Zip Code"
              inputClass={"!rounded-b-md"}
              onChange={handleChangeZip}
              value={zip}
            />
            <div className="block text-xs text-[red]">{zipError}</div>
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

export default Step05;
