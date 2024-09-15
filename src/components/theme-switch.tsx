import { useTheme } from "../context/theme-context";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      className="text-sm w-[2rem] h-[2rem] text-yellow-600 bottom-5 right-5 bg-opacity-70 backdrop-blur-[0.5rem] border border-yellow-600 border-opacity-40 shadow-2xl flex items-center justify-center transition-all dark:border-sky-800 dark:text-sky-800 rounded-md"
      onClick={toggleTheme}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        delay: 0.1,
      }}
    >
      {theme === "light" ? <FaSun /> : <FaMoon />}
    </motion.button>
  );
}
