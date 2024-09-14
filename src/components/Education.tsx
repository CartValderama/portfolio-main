import { motion } from "framer-motion";
import AcademicEducation from "./AcademicEducation";
import Certificates from "./Certificates";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
      }}
      className="flex flex-col md:gap-y-1 h-full"
    >
      <AcademicEducation />
      <Certificates />
    </motion.div>
  );
}
