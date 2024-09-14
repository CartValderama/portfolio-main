import { motion } from "framer-motion";
import { education } from "../data/staticData";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";
import { FaGlobe } from "react-icons/fa6";

export default function AcademicEducation() {
  return (
    <div className="flex flex-col gap-y-5 border bg-secondary py-6 px-8 h-full">
      <h2 className="text-lg">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 lg:gap-4">
        {education.map(({ typeOfEducation, date, place, url }, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-50 py-4 px-6 rounded-md flex flex-col justify-between gap-y-2"
            variants={fadeInAnimationVariants("x", 50, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <div className="flex justify-between items-baseline">
              <h3 className="capitalize flex flex-wrap mr-2 text-base mb-1">
                {typeOfEducation}
              </h3>
              <a
                href={url}
                target="_blank"
                className="text-sm flex items-center gap-x-1 hover:underline"
              >
                <FaGlobe />
              </a>
            </div>
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
