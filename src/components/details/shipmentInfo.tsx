import React from "react";
import Button from "../../common/Button";
import FedEx from "../../assets/details/fedEx.png";
import ProgressImg from "../../assets/details/progressImg.png";
import { stepCount } from "../../redux/slices/stepsCounter";
import { useDispatch } from 'react-redux';
import Footer from "../../common/footer";

const ShipmentInfo = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center bg-[#4E148C]">
        <img src={FedEx} alt="img" />
      </div>
      <div className={`${"bg-white"} h-[100vh] min-h-[1024px]`}>
        <div className="w-full flex flex-col items-center ">
          <div className="text-[32px] leading-10 font-bold text-[#2E354B] mt-16 flex justify-center text-center w-[340px]">
            Shipment information Sent to FedEx
          </div>
          <div className="text-[22px] font-semibold text-[#2E354B] mt-10 text-center w-[250px]">
            Estimated Delivery Date <span className="font-normal">Mon 03/17/2023</span>
          </div>
          <div className="mt-10">
            <img src={ProgressImg} alt="img" />
          </div>
          <div className="mt-10 text-[15px] font-normal text-[#2E354B] text-center">Tracking id: 123456789012</div>
          <div className="flex justify-center mt-10">
            <Button
              name={"This is a DEMO"}
              className={"text-[#2E354B] w-[181px] bg-[#E0E4EA]"}
              onClick={() => dispatch(stepCount(10))}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShipmentInfo;
