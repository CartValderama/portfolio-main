import { motion } from "framer-motion";
import Contacts from "./intro-section/Contacts";
import AboutMe from "./intro-section/AboutMe";
import Welcome from "./intro-section/Welcome";
import ThemeSwitch from "./ThemeSwitch";
import { useSectionInView } from "../utils/hooks";

export default function Introduction() {
  const { ref } = useSectionInView("Introduction", 0.4);
  return (
    <section
      className="flex flex-col md:grid md:grid-cols-6 md:gap-2 scroll-mt-20"
      id="intro"
      ref={ref}
    >
      <motion.div
        className="col-span-3 flex justify-between border-y md:border-0 bg-secondary md:rounded-md py-6 px-8  dark:bg-white/10 dark:border-white/5"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold uppercase">
          Introduction
        </h1>
        <div className="inline md:hidden">
          <ThemeSwitch />
        </div>
      </motion.div>
      <Welcome />
      <AboutMe />
      <Contacts />
    </section>
  );
}
