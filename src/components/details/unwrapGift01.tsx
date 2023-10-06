import React, { useState } from "react";
import Footer from "../../common/footer";
import Logo from "../../assets/logo";
import GiftBox from "../../assets/details/giftbox.png";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import GiftImg from "../../assets/details/giftImg.png";
import { stepCount } from "../../redux/slices/stepsCounter";
import ProgressBar from "../../common/progressBar";

const UnwrapGift01 = () => {
  const [giftStep, setGiftStep] = useState(1);
  const dispatch = useDispatch();
  const felWidth = 100 / 7;

  return (
    <>
      {giftStep === 1 ? (
        <>
          <div
            className={`${"bg-white"} h-[100vh] min-h-[1024px]  flex justify-center`}
          >
            <div className="md:flex block w-[70%] mt-[55px]">
              <div className="flex justify-center">
                <Logo />
              </div>
              <div className="w-full flex flex-col items-center mt-16">
                <div className="text-[32px] leading-10 font-bold text-[#2E354B] mt-16 flex justify-center">
                  Hello there!
                </div>
                <div className="text-lg font-normal text-[#2E354B] mt-2 flex justify-center text-center w-[236px]">
                  You just received a Gift from Gift On Schedule. Reveal What's
                  Inside!
                </div>
                <div>
                  <img src={GiftBox} alt="img" />
                </div>
                <div className="flex justify-center mt-8">
                  <Button
                    name={"Unwrap Gift"}
                    className={"text-white w-[300px] bg-[#635BFF]"}
                    onClick={() => setGiftStep(2)}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`${"bg-white"} h-[100vh] min-h-[1024px]  flex justify-center`}
          >
            <div className="md:flex block w-[70%] mt-[55px]">
              <div className="flex justify-center">
                <Logo />
              </div>
              <div className="w-full flex flex-col  items-center mt-4">
                <div className="w-[340px]">
                  <ProgressBar
                    bgColor={"bg-[#edd3fb]"} // #edd3fb
                    felColor={"bg-[#af37ee]"} // #af37ee
                    felWidth={`${felWidth}%`}
                  />
                </div>
                <div className="mt-16">
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
                    onClick={() => dispatch(stepCount(1))}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default UnwrapGift01;
