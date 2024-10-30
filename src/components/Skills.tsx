import { motion } from "framer-motion";
import TechStack from "./skills-section/TechStack";
import Tools from "./skills-section/Tools";
import Language from "./skills-section/Language";
import Complementary from "./skills-section/Complementary";
import { useSectionInView } from "../utils/hooks";
import { useEffect, useState } from "react";

export default function Skills() {
  const [threshold, setThreshold] = useState(0.8);

  useEffect(() => {
    const handleResize = () => {
      setThreshold(window.innerWidth < 770 ? 0.2 : 0.8);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { ref } = useSectionInView("Skillset", threshold);

  return (
    <motion.section
      className="flex flex-col md:grid grid-cols-3 md:gap-2 scroll-mt-20"
      ref={ref}
      id="skillset"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <h1 className="row-span-1 bg-secondary border-y md:border-0 md:rounded-md py-6 px-8 text-xl sm:text-2xl font-bold uppercase dark:bg-white/10 dark:border-white/5">
        Skills
      </h1>
      <TechStack />
      <Tools />
      <Language />
      <Complementary />
    </motion.section>
  );
}
