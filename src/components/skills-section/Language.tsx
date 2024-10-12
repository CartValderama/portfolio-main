import { languages } from "../../data/staticData";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../../utils/general-utils";

export default function Language() {
  return (
    <div className="col-span-2 bg-secondary border-b-0 md:border-b border py-6 px-8 flex flex-col md:rounded-md gap-y-6 dark:bg-white/10 dark:border-white/5">
      <h2 className="capitalize text-xl">language</h2>
      <ul className="flex flex-wrap gap-4">
        {languages.map((language, idx) => (
          <motion.li
            className="rounded bg-slate-50 p-4 px-6 md:px-4 dark:bg-white/5"
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
  );
}
