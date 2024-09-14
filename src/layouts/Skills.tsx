import { motion } from "framer-motion";
import { languages, techStack } from "../data/staticData";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";

export default function Skills() {
  return (
    <motion.section
      className="md:max-w-[16rem] flex-col md:gap-1 flex"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <h1 className="bg-secondary border py-6 px-8 text-xl lg:text-2xl font-bold md:rounded-t-md">
        Skills
      </h1>
      <div className="bg-secondary border-r border-l md:border py-6 px-8 flex flex-col gap-y-6">
        <h2 className="capitalize text-lg">Tech Stack</h2>
        <ul className="grid grid-cols-auto-fit md:grid-cols-2 gap-4">
          {techStack.map(({ skill, icon }, idx) => (
            <motion.li
              className="w-16 md:w-auto text-sm px-12 py-4 md:px-10 flex flex-col items-center gap-2 bg-slate-50 rounded-sm "
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
      <div className="bg-secondary border py-6 px-8 md:rounded-b-md flex flex-col gap-y-6">
        <h2 className="capitalize text-lg">language</h2>
        <ul className="flex flex-wrap gap-2">
          {languages.map((language, idx) => (
            <motion.li
              className="rounded-sm bg-slate-50 py-2 px-4 text-sm"
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
