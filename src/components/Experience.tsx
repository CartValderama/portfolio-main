import { useSectionInView } from "@/utils/hooks";
import Timeline from "./ui/custom/Timeline";
import { companyList, experience } from "@/data/staticData";
import { CustomCarousel } from "./ui/custom/Carousel";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.8);
  return (
    <section
      className="flex flex-col md:grid grid-cols-12 grid-rows-12 md:gap-1 scroll-mt-20"
      id="experience"
      ref={ref}
    >
      <motion.div
        className="col-span-4 row-span-2 flex justify-between items-center bg-secondary border-b-0 md:border-b border md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold uppercase scroll-mt-28">
          Experience
        </h1>
      </motion.div>
      <motion.div
        className="col-span-8 row-span-12 flex flex-col gap-y-5 border bg-secondary py-6 px-8 md:rounded-md dark:bg-white/10 dark:border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="capitalize text-xl">Timeline</h2>
        <Timeline data={experience} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="col-span-4 hidden row-span-10 md:flex flex-col gap-y-5 border bg-secondary py-6 px-8 md:rounded-md dark:bg-white/10 dark:border-white/10"
        aria-hidden="true"
      >
        <CustomCarousel data={companyList} delay={9000} />
      </motion.div>
    </section>
  );
}
