import Image from "next/image"
import Link from "next/link"

import { Icons } from "./icons"
import { SignupForm } from "./signup-form"
import { Button } from "./ui/button"

export function RightSection() {
  return (
    <div className="relative flex h-screen px-0 pt-10 font-sans lg:items-center lg:px-20 2xl:px-30">
      <div className="flex flex-col px-[30px] lg:p-14">
        <Icons.nifty className="mb-8 flex h-8 w-8 lg:hidden" />

        <h2 className="scroll-m-20 text-3xl font-bold leading-tight tracking-[-0.72px] text-[#171936] lg:text-4xl">
          Get Started
        </h2>
        <p className="pt-2.5 text-base leading-normal text-[#667085] lg:text-lg">
          Personal finance shouldn&apos;t be confusing.{"\n"}Start your journey
          to financial freedom.
        </p>

        <div className="flex justify-between py-6">
          <Button variant="outline" className="flex h-fit gap-[12px] px-4 py-3">
            <Image src={"/google.svg"} alt="Google" height={24} width={24} />
            Sign in with Google
          </Button>
          <Button className="h-fit bg-black p-3">
            <Image src={"/apple.svg"} alt="Apple" height={24} width={24} />
          </Button>
          <Button className="h-fit bg-[#1877F2] p-3 hover:bg-[#1877F2]">
            <Image
              src={"/facebook.svg"}
              alt="Facebook"
              height={24}
              width={24}
              className="h-6 w-6"
            />
          </Button>
        </div>

        <div className="border-b" />

        <div className="relative pt-6 ">
          <SignupForm />
        </div>

        <p className="pb-6 pt-2.5 text-center text-[#98A2B3]">
          Already have an account?{" "}
          <Link href={"#"} className="text-[#344054]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
