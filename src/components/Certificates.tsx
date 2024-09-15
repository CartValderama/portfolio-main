import { certificates } from "../data/staticData";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";
import { RxOpenInNewWindow } from "react-icons/rx";

export default function Certificates() {
  return (
    <div className="flex flex-col gap-y-5 border border-t-0 md:border bg-secondary py-6 px-8 h-full dark:bg-white/10 dark:border-white/10">
      <h2 className="text-lg">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-4 h-full">
        {certificates.map(({ name, date, from, url }, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-50 p-4 rounded-md flex flex-col gap-y-2 justify-between h-full dark:bg-white/10"
            variants={fadeInAnimationVariants("x", 50, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <div className="flex justify-between items-baseline">
              <h3 className="capitalize mr-2 text-base mb-1">{name}</h3>
              <a
                href={url}
                target="_blank"
                className="flex items-center gap-x-1 hover:underline text-xs capitalize"
              >
                <RxOpenInNewWindow /> view
              </a>
            </div>
            <div className="text-sm">
              <p>{from}</p>
              <p className="text-secondary text-xs">{date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
