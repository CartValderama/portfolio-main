import { motion } from "framer-motion";
import Contacts from "../components/Contacts";
import Intro from "../components/Intro";

export default function AboutMe() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-1">
      <div className="flex flex-col gap-1">
        <motion.h1
          className="text-lg sm:text-2xl font-bold bg-secondary border px-8 py-4 lg:rounded-tl-md"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Introduction
        </motion.h1>
        <Intro />
      </div>

      <Contacts />
    </section>
  );
}
