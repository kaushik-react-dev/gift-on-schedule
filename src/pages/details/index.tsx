import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo";
import Step01 from "../../components/details/steps/step01";
import Step02 from "../../components/details/steps/step02";
import Step03 from "../../components/details/steps/step03";
import Step04 from "../../components/details/steps/step04";
import Step06 from "../../components/details/steps/step06";
import Step05 from "../../components/details/steps/step05";
import Step07 from "../../components/details/steps/step07";
import Footer from "../../common/footer";
import { useDispatch, useSelector } from "react-redux";
import UnwrapGift01 from "../../components/details/unwrapGift01";
import UnwrapGift02 from "../../components/details/unwrapGift02";
import ShipmentInfo from "../../components/details/shipmentInfo";
import WelcomeAboard from "../../components/details/welcomeAboard";
import { stepCount } from "../../redux/slices/stepsCounter";

const Details = () => {
  const step = useSelector((state: any) => state?.counter?.step);
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state?.giftFormData?.formState);

  console.log("userData == ", userData);

  const handleSteps: any = (data: number) => {
    if (data === 1) {
      return <Step01 />;
    }
    if (data === 2) {
      return <Step02 />;
    }
    if (data === 3) {
      return <Step03 />;
    }
    if (data === 4) {
      return <Step04 />;
    }
    if (data === 5) {
      return <Step05 />;
    }
    if (data === 6) {
      return <Step06 />;
    }
    if (data === 8) {
      return <Step07 />;
    }
  };

  useEffect(() => {
    if (step === 8) {
      setTimeout(() => {
        dispatch(stepCount(9));
      }, 4000);
    }
  }, [step]);

  return (
    <>
      {step !== 0 && step !== 9 && step !== 10 && (
        <>
          <div
            className={`${
              step % 2 === 1 ? "details-bg" : "bg-white"
            } h-[100vh] min-h-[1024px]  flex justify-center`}
          >
            <div className="md:flex block w-[70%] mt-[55px]">
              <div className="flex justify-center">
                <Logo />
              </div>
              <div className="w-full flex justify-center mt-4">
                {handleSteps(step)}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
      {
        step === 0 && <UnwrapGift01 />
        // <UnwrapGift02 />
      }
      {step === 9 && <ShipmentInfo />}
      {step === 10 && <WelcomeAboard />}
    </>
  );
};

export default Details;
