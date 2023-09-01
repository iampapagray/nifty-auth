import Image from "next/image";
import { AnimatedText } from "./animators/animated-text";
import { Icons } from "./icons";
import { Indicators } from "./animators/indicators";
// import Rings from "/rings.jpg";

export function LeftSection() {
  return (
    <div className="relative flex w-full flex-col bg-background pb-15 xl:px-24 xl:pt-12 2xl:px-20 2xl:pt-20">
      <div className="glow absolute opacity-50"></div>
      <div className="flex flex-col xl:gap-10 2xl:gap-15">
        <Icons.nifty />

        <AnimatedText />
      </div>
      <div className="flex flex-1 flex-col justify-end gap-8 2xl:gap-15 ">
        <div className="flex">
          <Image
            src="/rings.png"
            alt="rings"
            height={500}
            width={500}
            className="w-full xl:h-full 2xl:h-full"
          />
        </div>
        <Indicators />
      </div>
    </div>
  )
}
