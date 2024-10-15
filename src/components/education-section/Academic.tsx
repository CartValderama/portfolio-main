import { motion, AnimatePresence } from "framer-motion";
import { education } from "../../data/staticData";
import { fadeInAnimationVariants } from "../../utils/general-utils";
import { useState } from "react";
import Timeline from "../ui/custom/Timeline";
import { FaTh } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";

export default function Academic() {
  const [isGridLayout, setIsGridLayout] = useState(true);

  return (
    <div className="flex flex-col gap-y-5 border bg-secondary py-6 px-8 md:rounded-md dark:bg-white/10 dark:border-white/10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Academic</h2>
        <button
          onClick={() => setIsGridLayout(!isGridLayout)}
          className="flex items-center p-2 border rounded-sm hover:bg-gray-100 dark:bg-white/10 dark:border-none dark:hover:bg-stone-900 transition text-lg"
          aria-label={`Toggle to display by ${
            isGridLayout ? "Timeline" : "Grid"
          }`}
        >
          {isGridLayout ? <FaTimeline /> : <FaTh />}
        </button>
      </div>
      <AnimatePresence>
        {isGridLayout ? (
          <motion.div
            key="grid"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-2 lg:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {education.map(({ title, date, place }, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-50 py-4 px-6 rounded-sm flex flex-col justify-between gap-y-6 dark:bg-white/10"
                variants={fadeInAnimationVariants("x", 50, 0)}
                initial="initial"
                animate="animate"
                custom={idx}
              >
                <h3 className="capitalize flex flex-wrap">{title}</h3>

                <div>
                  <p className="text-sm">{place}</p>
                  <p className="text-stone-600 dark:text-stone-300 text-xs">
                    {date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <Timeline data={education} />
        )}
      </AnimatePresence>
    </div>
  );
}
