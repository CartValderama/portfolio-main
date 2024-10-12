import { tools } from "../../data/staticData";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../../utils/general-utils";

export default function Tools() {
  return (
    <div className="row-span-3 bg-secondary border-b-0 md:border-b border py-6 px-8 flex flex-col md:rounded-md gap-y-6 dark:bg-white/10 dark:border-white/5">
      <h2 className="capitalize text-xl">Tools</h2>
      <ul className="flex md:flex-col flex-wrap gap-4">
        {tools.map(({ tool, icon }, idx) => (
          <motion.li
            className="p-4 px-6 flex gap-2 bg-slate-50 rounded dark:bg-white/5"
            key={idx}
            variants={fadeInAnimationVariants("x", -100, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <i className="text-2xl">{icon}</i>
            <span className="whitespace-nowrap">{tool}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
