import { motion } from "framer-motion";
import Contacts from "./Contacts";
import Intro from "./Intro";

export default function AboutMe() {
  return (
    <section className="flex flex-col lg:flex-row justify-between md:gap-1">
      <div className="flex flex-col md:gap-1">
        <motion.h1
          className="text-lg sm:text-2xl font-bold bg-secondary border px-8 py-4 border-b-0 md:border-b dark:bg-white/10 dark:border-white/10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Introduction
        </motion.h1>
        <Intro />
      </div>

      <Contacts />
    </section>
  );
}
