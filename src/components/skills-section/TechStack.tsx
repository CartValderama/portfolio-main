import { motion } from "framer-motion";
import { techStack } from "../../data/staticData";
import { fadeInAnimationVariants } from "../../utils/general-utils";

export default function TechStack() {
  return (
    <div className="flex flex-col col-span-2 row-span-3 bg-secondary border-b-0 md:border-b border py-6 px-8 md:rounded-md gap-y-6 dark:bg-white/10 dark:border-white/5">
      <h2 className="capitalize text-xl">Tech Stack</h2>
      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {techStack.map(({ skill, icon, svg }, idx) => (
          <motion.li
            className="p-4 px-6 flex flex-col items-center gap-2 bg-slate-50 rounded dark:bg-white/5"
            key={idx}
            variants={fadeInAnimationVariants("x", -100, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <i className="text-4xl">
              <span className="hidden dark:inline">{icon}</span>
              <span className="dark:hidden">{svg}</span>
            </i>

            <span className="whitespace-nowrap text-sm sm:text-base">
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
