

import { useState, useEffect } from "react"
import { SwitchTheme } from "@/components/ui/switch"

export function ModeToggle() {
  const [theme, setThemeState] = useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <div className="flex items-center space-x-2">
          <SwitchTheme id="theme-mode"
          checked={theme === "dark"}
          onCheckedChange={(checked) => {
            setThemeState(checked ? "dark" : "theme-light")
          }}
           />
          <p
            
            className="cursor-pointer select-none font-semibold"
            onClick={() => {
            setThemeState(theme === "dark" ? "theme-light" : "dark")
          }}>{theme === "dark" ? "Dark mode" : "Light mode"}
          </p>
    </div>
        
  )
}