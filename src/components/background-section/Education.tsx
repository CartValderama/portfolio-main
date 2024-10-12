import { motion } from "framer-motion";
import Academic from "./Academic";
import Certificates from "./Certificates";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
      className="flex flex-col col-span-9 md:gap-y-1"
    >
      <Academic />
      <Certificates />
    </motion.div>
  );
}
