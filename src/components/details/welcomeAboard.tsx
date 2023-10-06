import React from "react";
import Logo from "../../assets/logo";
import Button from "../../common/Button";
import RocketImg from "../../assets/details/rocketImg.png";
import Footer from "../../common/footer";
import { useSelector } from "react-redux";

const WelcomeAboard = () => {
  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  return (
    <>
      <div className="flex justify-center mt-10">
        <Logo />
      </div>
      <div
        className={`${"bg-white"} h-[100vh] min-h-[1024px]  flex justify-center`}
      >
        <div className="w-full flex flex-col items-center mt-10">
          <div className="text-[28px] leading-[36px] font-bold text-[#2E354B] mt-10 flex justify-center">
            Welcome aboard,
          </div>
          <div className="text-[24px] leading-[31px] font-bold text-[#2E354B] mt-8 flex justify-center">
            {userData?.firstName ? userData?.firstName : "Annu"}{" "}
            {userData?.lastName ? userData?.lastName : "Dou"}
          </div>
          <div className="text-[24px] leading-[31px] font-bold text-[#2E354B] mt-8 mb-4 flex justify-center text-center w-[266px]">
            Your Gift On Schedule membership is now active
          </div>
          <div>
            <img src={RocketImg} alt="img" />
          </div>
          <div className="flex justify-center mt-8">
            <Button
              name={"Explore All Features"}
              className={"text-white w-[300px] bg-[#635BFF]"}
              // onClick={() => setGiftStep(2)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WelcomeAboard;
