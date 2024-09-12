import { motion } from "framer-motion";
import { languages, techStack } from "../data/staticData";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";

export default function Skills() {
  return (
    <motion.section
      className="md:max-w-[16rem] flex-col gap-1 flex"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <h1 className="bg-secondary border py-4 px-8 text-lg sm:text-2xl font-bold md:rounded-t-md">
        Skills
      </h1>
      <div className="bg-secondary border py-4 px-8 flex flex-col gap-y-4">
        <h2 className="capitalize font-semibold">Tech Stack</h2>
        <ul className="grid grid-cols-4 md:grid-cols-2 gap-y-2 gap-x-7">
          {techStack.map(({ skill, icon }, idx) => (
            <motion.li
              className="w-16 md:w-auto text-xs sm:text-sm py-4 flex flex-col items-center gap-2 rounded-sm "
              key={idx}
              variants={fadeInAnimationVariants("x", -100, 0)}
              initial="initial"
              animate="animate"
              custom={idx}
            >
              <i className="text-2xl">{icon}</i>

              <span>{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="bg-secondary border py-4 px-8 md:rounded-b-md flex flex-col gap-y-4">
        <h2 className="capitalize font-semibold">language</h2>
        <ul className="flex flex-wrap gap-y-2 gap-x-7">
          {languages.map((language, idx) => (
            <motion.li
              className="py-2 rounded-sm"
              key={idx}
              variants={fadeInAnimationVariants("x", -100, 0)}
              initial="initial"
              animate="animate"
              custom={idx}
            >
              {language}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
