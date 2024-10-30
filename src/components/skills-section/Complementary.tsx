import { otherSkills } from "../../data/staticData";
import Accordion from "../ui/custom/Accordion";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../../utils/general-utils";

export default function Complementary() {
  return (
    <div className="col-span-3 row-span-2 bg-secondary border-b md:border-0 py-6 px-8 flex flex-col md:rounded-md gap-y-6 dark:bg-white/10 dark:border-white/5 ">
      <h2 className="capitalize text-xl">complementary skills</h2>
      <div className="flex flex-col gap-3">
        {otherSkills.map(({ title, desc, icon }, idx) => (
          <motion.div
            key={idx}
            variants={fadeInAnimationVariants("x", -100, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <Accordion title={title} description={desc} icon={icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
