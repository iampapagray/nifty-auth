import Image from "next/image";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function RightSection() {
  return (
    <div className="relative bg-red-500 p-10 font-sans lg:px-30 lg:py-20 2xl:py-30">
      <div className="flex flex-col bg-white p-14">
        <Icons.nifty className="flex lg:hidden" />

        <h2 className="text-4xl font-bold leading-tight tracking-[-0.72px] text-[#171936]">Get Started</h2>
        <p className="pt-2.5 text-lg leading-normal text-[#667085]">
          Personal finance shouldn&apos;t be confusing.{"\n"}Start your journey to financial freedom.
        </p>

        <div className="flex justify-between pt-6">
          <Button variant="outline" className="flex gap-[12px] px-4 py-3">
            <Image
              src={"/google.svg"}
              alt="Google"
              height={24}
              width={24}
            />
            Sign in with Google
          </Button>
          <Button className="bg-black p-3">
            <Image
              src={"/apple.svg"}
              alt="Apple"
              height={24}
              width={24}
            />
          </Button>
          <Button className="bg-[#1877F2] p-3 hover:bg-[#1877F2]">
            <Image
              src={"/facebook.svg"}
              alt="Facebook"
              height={24}
              width={24}
            />
          </Button>
        </div>

        <div className="border-b py-6" />
      </div>
    </div>
  )
}
