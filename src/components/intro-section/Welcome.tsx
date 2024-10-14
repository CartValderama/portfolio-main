import { motion } from "framer-motion";
import { textSplitter } from "../../utils/general-utils";
import ThemeSwitch from "../ThemeSwitch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const text = "Welcome to my portfolio.";

const DURATION = 0.1;
const STAGGER = 0.1;
const CHAR_SPACING = "0.02rem";
const WORD_SPACING = "0.2rem";

export default function Welcome() {
  return (
    <motion.div
      className="hidden md:flex col-span-3 justify-between items-center bg-secondary border-b-0 md:border-b border md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/5"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.div
        className="relative block overflow-hidden whitespace-nowrap"
        initial="initial"
        animate="animate"
      >
        <p className="text-sm" aria-hidden="true">
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
        </p>
      </motion.div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <ThemeSwitch />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
}
