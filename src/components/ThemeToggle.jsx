import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    // Default to dark if no theme is stored, or if it's explicitly 'dark'
    return storedTheme !== "light";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex items-center justify-center w-14 h-7 rounded-full transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        isDarkMode ? "bg-primary" : "bg-muted"
      )}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={cn(
          "absolute left-1 top-1/2 -translate-y-1/2 transition-transform",
          isDarkMode ? "translate-x-7" : "translate-x-0"
        )}
      >
        {isDarkMode ? <Moon size={20} className="text-background" /> : <Sun size={20} className="text-foreground" />}
      </span>
    </button>
  );
};