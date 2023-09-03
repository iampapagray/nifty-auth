import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { LeftSection } from "@/components/left-section"
import { RightSection } from "@/components/right-section"

export default function IndexPage() {
  return (
    <section className="container mx-auto flex h-screen w-full lg:overflow-hidden bg-white px-0">
      <div className="hidden flex-1 md:flex">
        <LeftSection />
      </div>
      <div className="flex-1">
        <RightSection />
      </div>
    </section>
  )
}
