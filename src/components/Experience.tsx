import { motion } from "framer-motion";
import { education } from "../data/staticData";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Experience() {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="font-semibold">Education</h2>
      <div className="flex flex-col gap-y-3">
        {education.map(({ typeOfEducation, date, place, url }, idx) => (
          <motion.div
            key={idx}
            className="bg-zinc-50 py-4 px-6 rounded-md flex flex-col gap-y-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium text-lg">{typeOfEducation}</h3>
              <a
                href={url}
                target="_blank"
                className="text-secondary text-sm flex items-center gap-x-1"
              >
                <RxOpenInNewWindow />
                <span className="capitalize hidden md:block">view website</span>
              </a>
            </div>
            <div>
              <p>{place}</p>
              <p className="font-light text-secondary text-sm">{date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
