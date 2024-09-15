import { motion } from "framer-motion";
import { education } from "../data/staticData";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";

export default function AcademicEducation() {
  return (
    <div className="flex flex-col gap-y-5 border bg-secondary py-6 px-8 md:h-full dark:bg-white/10 dark:border-white/10">
      <h2 className="text-lg">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-4 md:h-full">
        {education.map(({ typeOfEducation, date, place }, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-50 py-4 px-6 rounded-sm flex flex-col justify-between gap-y-2 h-full dark:bg-white/10"
            variants={fadeInAnimationVariants("x", 50, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <h3 className="capitalize flex flex-wrap text-base">
              {typeOfEducation}
            </h3>

            <div className="text-xs">
              <p className="text-sm">{place}</p>
              <p className=" text-secondary">{date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
