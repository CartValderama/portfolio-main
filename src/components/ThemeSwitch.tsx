import { useTheme } from "../utils/useContext";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <motion.button
      className={`w-[4.3rem] group relative bg-slate-100 dark:bg-white/10 rounded-full p-1 flex items-center transition-all shadow-inner`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      role="switch"
      aria-checked={isDarkMode}
    >
      <span
        className={`text-xs absolute transition-transform transform ${
          isDarkMode ? "ml-[0.3rem]" : "translate-x-[1.8rem] "
        }`}
        aria-hidden="true"
      >
        {isDarkMode ? "Dark" : "Light"}
      </span>
      <span className="bg-yellow-400 shadow-2xl dark:bg-black/50 rounded-full p-1 transition-transform ease-in-out duration-300 transform dark:translate-x-[2.3rem] group-hover:bg-yellow-500 dark:group-hover:bg-black/90">
        {isDarkMode ? (
          <Moon className="h-4 w-4 " />
        ) : (
          <Sun className="h-4 w-4 text-white" />
        )}
      </span>
    </motion.button>
  );
}
