import { motion } from "framer-motion";
import Academic from "./education-section/Academic";
import Certificates from "./education-section/Certificates";
import { useSectionInView } from "@/utils/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.5);
  return (
    <section
      className="flex flex-col md:gap-1 scroll-mt-20"
      id="education"
      ref={ref}
    >
      <motion.div
        className="flex justify-between items-center bg-secondary border-b-0 md:border-b border md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold uppercase scroll-mt-28">
          Education
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col col-span-9 md:gap-1"
      >
        <Academic />
        <Certificates />
      </motion.div>
    </section>
  );
}
