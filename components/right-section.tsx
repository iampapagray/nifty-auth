import Image from "next/image";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { SignupForm } from "./signup-form";
import Link from "next/link";

export function RightSection() {
  return (
    <div className="relative p-10 font-sans lg:p-20 2xl:p-30">
      <div className="flex flex-col bg-white p-14">
        <Icons.nifty className="flex lg:hidden" />

        <h2
          className="scroll-m-20 text-4xl font-bold leading-tight tracking-[-0.72px] text-[#171936]"
        >
          Get Started
        </h2>
        <p className="pt-2.5 text-lg leading-normal text-[#667085]">
          Personal finance shouldn&apos;t be confusing.{"\n"}Start your journey to financial freedom.
        </p>

        <div className="flex justify-between py-6">
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

        <div className="border-b" />

        <div className="relative pt-6 ">
          <SignupForm />
        </div>


        <p className="pt-2.5 text-center text-[#98A2B3]">
          Already have an account? {' '}
          <Link href={'#'} className="text-[#344054]">Sign in</Link>
        </p>


      </div>
    </div>
  )
}
