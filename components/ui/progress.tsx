"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full bg-emerald-100",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full flex-1 bg-emerald-600 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      {/* Percentage chip centered at current value */}
      <span
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -translate-x-1/2 select-none rounded-full bg-emerald-600 px-2 py-[2px] text-[10px] font-semibold leading-none text-white"
        style={{ left: `${value ?? 0}%` }}
        aria-hidden
      >
        {Math.round((value as number) ?? 0)}%
      </span>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
