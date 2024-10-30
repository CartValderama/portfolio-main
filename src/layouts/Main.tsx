import Skills from "../components/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Introduction from "../components/Introduction";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "@/utils/useContext";

const queryClient = new QueryClient();

export default function Main() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const luminariesY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const luminariesX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const luminariesScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "200%"]
  );
  const luminariesRotation = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main ref={ref} className="flex flex-col gap-6 ">
      {/* sun */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        style={{
          y: luminariesY,
          x: luminariesX,
          scale: luminariesScale,
          rotateZ: theme === "dark" ? 0 : luminariesRotation,
        }}
        aria-hidden
        className="-z-10 left-2 top-3 fixed hidden xl:block "
      >
        <FaMoon className="text-4xl text-sky-900 backdrop-blur-sm hidden dark:block" />
        <FaSun className="text-4xl text-yellow-400 backdrop-blur-sm dark:hidden" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        style={{
          y: luminariesY,
          x: luminariesX,
          scale: luminariesScale,
        }}
        aria-hidden
        className="fixed -z-30 bg-amber-200 -left-[7.5rem] -top-[7.5rem] rounded-full w-[9rem] h-[9rem] blur-2xl dark:bg-blue-900 dark:-left-[12rem] dark:-top-[12rem] hidden lg:block"
      ></motion.div>

      <Introduction />
      <Skills />
      <Education />
      <QueryClientProvider client={queryClient}>
        <Projects />
      </QueryClientProvider>
      <Experience />
    </main>
  );
}
