import { motion } from "framer-motion";
import ThemeSwitch from "../components/ThemeSwitch";
import { textSplitter } from "../utils/textSplitter";

const text = "Welcome to my portfolio.";

const DURATION = 0.1;
const STAGGER = 0.1;
const CHAR_SPACING = "0.02rem";
const WORD_SPACING = "0.2rem";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-secondary border mb-1 rounded-t-md px-8 py-4 dark:bg-white/10 dark:border-white/10">
      <motion.div
        className="relative block overflow-hidden whitespace-nowrap"
        initial="initial"
        animate="animate"
      >
        <h1 className="text-sm">
          {textSplitter(text).map(({ char, isSpace, index }) => (
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
