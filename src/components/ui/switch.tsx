import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"

function SwitchTheme({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none flex items-center justify-center size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 relative"
        )}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 text-orange-300 fill-yellow-300 drop-shadow-lg drop-shadow-yellow-500 rotate-0 transition-all dark:scale-0 dark:-rotate-90 absolute" />
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-800 fill-sky-200 drop-shadow-lg drop-shadow-sky-400 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 absolute pr-0.5 pb-0.5" />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { SwitchTheme }
