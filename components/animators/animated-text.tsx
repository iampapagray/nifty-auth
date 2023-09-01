'use client'

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export function AnimatedText(){
  const sentences = [
    "Unravel the clutter",
    "and take control of",
    "your finances"
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle from 0 to 2
    }, 3000);

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">
      {sentences.map((sentence, i) => {
        return (
          <h1
            key={i}
            className={cn(
              "font-sans text-5xl font-bold leading-tight tracking-[-0.96px]",
              i == activeIndex ? 'text-white':'text-[#667085]'
            )}
          >
            {sentence}
          </h1>
        )
      })}

    </div>
  )
}
