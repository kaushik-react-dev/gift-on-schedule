import React from "react";
import ProgressBar from "../../../common/progressBar";
import GiftOnWayIcon from "../../../assets/details/giftOnWayIcon.png";
import GiftBoxVen from "../../../assets/details/giftBoxVen.gif"

const Step07 = () => {
  const felWidth = 100 / 1;

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
        <div className="text-[32px] leading-10 font-bold text-[#2E354B] mt-16 flex justify-center text-center px-5">
          Great! Your gift is already on its way
        </div>
        <div className="text-lg leading-10 font-normal text-[#2E354B] mt-2 flex justify-center ">
          Wait for delivery
        </div>
        <div className="mt-10">
          <img src={GiftBoxVen} alt="Img" />
        </div>
      </div>
    </>
  );
};

export default Step07;
