import { motion } from "framer-motion";
import { education } from "../data/staticData";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div className="flex flex-col gap-y-6 border bg-secondary justify-between py-6 px-8 md:rounded-b-md">
        <h2 className="text-lg">Education</h2>
        <div className="flex flex-col gap-y-3">
          {education.map(({ typeOfEducation, date, place, url }, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50 py-4 px-6 rounded-md flex flex-col gap-y-6"
              variants={fadeInAnimationVariants("x", 50, 0)}
              initial="initial"
              animate="animate"
              custom={idx}
            >
              <div className="flex justify-between items-baseline">
                <h3 className="capitalize text-xl flex flex-wrap mr-10">
                  {typeOfEducation}
                </h3>
                <a
                  href={url}
                  target="_blank"
                  className="text-sm flex items-center gap-x-1 hover:underline"
                >
                  <RxOpenInNewWindow />
                  <span className="capitalize hidden text-nowrap md:flex">
                    view website
                  </span>
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
    </motion.div>
  );
}
