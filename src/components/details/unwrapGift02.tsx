import React from "react";
import Footer from "../../common/footer";
import Logo from "../../assets/logo";
import GiftImg from "../../assets/details/giftImg.png";
import Button from "../../common/Button";

const UnwrapGift02 = () => {
  return (
    <>
      <div
        className={`${"bg-white"} h-[100vh] min-h-[1024px]  flex justify-center`}
      >
        <div className="md:flex block w-[70%] mt-[55px]">
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <div>
              <img src={GiftImg} alt="img" />
            </div>
            <div className="text-[32px] leading-10 font-bold text-[#2E354B] mt-16 flex justify-center text-center w-[325px]">
              This gift is almost yours
            </div>
            <div className="text-lg font-normal text-[#2E354B] mt-2 flex justify-center text-center">
              Specify delivery details now!
            </div>
            <div className="flex justify-center mt-8">
              <Button
                name={"Unwrap Gift"}
                className={"text-white w-[300px] bg-[#635BFF]"}
                // onClick={() => dispatch(stepCount(3))}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnwrapGift02;
