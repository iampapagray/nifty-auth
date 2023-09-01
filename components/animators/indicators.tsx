'use client'

import { cn } from "@/lib/utils"
import { useState } from "react"

export function Indicators(){
  const fakes = Array.from(Array(3).keys())
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex gap-4">
      {fakes.map((fake, i) => {
        return (
          <div
          className={cn(
            "h-2 rounded-full bg-[#667085]",
            i == activeIndex ? 'w-15 opacity-40' : 'w-5 opacity-20'
          )} />
        )
      })}
    </div>
  )
}
