import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa"; // Import a single icon

export default function Footer() {
  return (
    <motion.footer
      className="bg-secondary border px-8 py-6 mt-1 rounded-b-md"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <p className="text-sm flex items-center">
        <FaCode className="hidden lg:inline text-xl mr-2" />
        Designed and developed by Cart Valderama. Built with React, TailwindCSS,
        Vite, Framer Motion, and TypeScript.
      </p>
    </motion.footer>
  );
}
