import { motion } from "framer-motion";
import ThemeSwitch from "../components/theme-switch";

const text = "Welcome to my portfolio, showcasing my projects and skills.";

const DURATION = 0.2;
const STAGGER = 0.075;
const CHAR_SPACING = "0.02rem"; // Adjust the spacing between characters
const WORD_SPACING = "0.2rem"; // Adjust the spacing between words

export default function Header() {
  const letters = text.split("").map((char, i) => ({
    char,
    isSpace: char === " ",
    index: i,
  }));

  return (
    <header className="flex justify-between items-center bg-secondary border mb-1 rounded-t-md px-8 py-4 dark:bg-white/10 dark:border-white/10">
      <motion.div
        className="relative block overflow-hidden whitespace-nowrap"
        initial="initial"
        animate="animate"
      >
        <h1 className="text-sm">
          {letters.map(({ char, isSpace, index }) => (
            <motion.span
              key={index}
              variants={{
                initial: {
                  y: isSpace ? 0 : "-100%",
                },
                animate: {
                  y: isSpace ? 0 : 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block"
              style={{
                marginRight: isSpace ? WORD_SPACING : CHAR_SPACING,
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </motion.div>
      <ThemeSwitch />
    </header>
  );
}
