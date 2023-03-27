import Image from "next/image";
import React from "react";
import HeroBg from "../../assets/heroBg.png";
import { heroData } from "@/utils/data";
function HeroSectionContet() {
  return (
    <div className="p-4 flex-1 flex items-center relative py-2">
      <Image
        src={HeroBg}
        className="h-[420px] lg:h-[420px] 2xl:h-[650px] w-full lg:w-[440px] md:w-auto ml-auto"
        alt="background"
      />
      <div className="w-full h-full absolute  xl:ml-14 flex top-0 left-0 items-center justify-center lg:px-12 2xl:px-32 2xl:py-[64px]  py-4 xl:py-20  lg:py-12 gap-8 lg:gap-6 xl:gap-10  flex-wrap">
        {heroData.map((n) => (
          <div
            key={n.id}
            className="lg:w-[160px] xl:w-[190px] p-4 lg:mb-20 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
          >
            <Image
              className="w-20 lg:w-34 2xl:w-36 md:w-28 -mt-10 lg:-mt-20"
              src={n.imageSrc}
              alt="I1"
            />
            <p className="text-sm md:text-[12px] lg:text-[12px] xl:text-base  font-semibold text-textColor mt-2 xl:mt-4">
              {n.name}
            </p>
            <p className="text-[12px] md:text-[12px] lg:text-[12px] xl:text-base font-semibold text-lighttextGray my-1 xl:my-3">
              {n.decp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSectionContet;
