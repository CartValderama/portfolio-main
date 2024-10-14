import { fadeInAnimationVariants } from "@/utils/general-utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type TimelineItem = {
  title: string;
  date: string;
  place?: string;
  desc?: string;
  icon: ReactNode;
};

type TimelineProps = {
  data: ReadonlyArray<TimelineItem>;
};

export default function Timeline({ data }: TimelineProps) {
  return (
    <motion.div
      key="list"
      className="flex flex-col pl-4 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {data.map((item, idx) => {
        const { title, date, place, desc, icon } = item;

        return (
          <motion.div
            key={idx}
            className={`border-l-2 border-stone-200 dark:border-white/10 relative pl-9 ${
              idx === data.length - 1 ? "pb-0" : "pb-6"
            } pt-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.i
              className="rounded-full absolute -top-2 -left-4 z-99 bg-white p-2 shadow dark:bg-stone-600"
              variants={fadeInAnimationVariants("x", -20, 0)}
              initial="initial"
              animate="animate"
              custom={idx}
            >
              {icon}
            </motion.i>

            <motion.div
              className="bg-slate-50 p-6 rounded-sm dark:bg-white/10"
              variants={fadeInAnimationVariants("x", 50, 0)}
              initial="initial"
              animate="animate"
              custom={idx}
            >
              <h2 className="capitalize flex flex-wrap">
                {place ?? "Unknown Place"} {" - "} {title ?? "Unknown Name"}
              </h2>
              <p className="text-secondary text-sm">{date ?? "Unknown Date"}</p>
              <p className="mt-3">{desc ?? "No Description Available"}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
