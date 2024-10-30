import { certificates } from "../../data/staticData";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../../utils/general-utils";
import { RxOpenInNewWindow } from "react-icons/rx";
import TooltipCustom from "../ui/custom/Tooltip";

export default function Certificates() {
  return (
    <div className="flex flex-col gap-y-5 border-b md:border-0 md:rounded-md bg-secondary py-6 px-8  dark:bg-white/10 dark:border-white/10">
      <h2 className="text-xl">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-2 lg:gap-4 ">
        {certificates.map(({ title, date, from, url }, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-50 py-4 px-6 rounded-sm flex flex-col gap-y-6 justify-between dark:bg-white/10"
            variants={fadeInAnimationVariants("x", 50, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <div className="flex justify-between items-baseline">
              <h3 className="capitalize mr-2 text-base mb-2">{title}</h3>
              <TooltipCustom msg="check certificate">
                <a
                  href={url}
                  target="_blank"
                  className="flex items-center gap-x-1 transition-colors duration-300 hover:text-stone-400"
                >
                  <RxOpenInNewWindow />
                </a>
              </TooltipCustom>
            </div>
            <div>
              <p className="text-sm">{from}</p>
              <p className="text-stone-600 dark:text-stone-300 text-xs">
                {date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
