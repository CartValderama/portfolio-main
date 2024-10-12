import { useTheme } from "../utils/useContext";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <motion.button
      className="text-sm w-[2rem] h-[2rem] text-yellow-600 bottom-5 right-5 bg-opacity-70 backdrop-blur-[0.5rem] border border-yellow-600 border-opacity-40 shadow-2xl flex items-center justify-center transition-colors hover:bg-yellow-100 dark:border-sky-800 dark:text-sky-800 rounded-md dark:hover:bg-sky-900"
      onClick={toggleTheme}
      aria-label={
        isDarkMode
          ? "the website's theme color is in dark mode"
          : "the website's theme color is in light mode"
      }
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        delay: 0.1,
      }}
    >
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </motion.button>
  );
}
