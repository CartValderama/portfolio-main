import { CustomCarousel } from "@/components/ui/custom/Carousel";
import { aboutCart } from "@/data/staticData";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa"; // Import a single icon

export default function Footer() {
  return (
    <motion.footer
      className="flex md:gap-2 mb-20 md:mb-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-secondary border-r border-y md:border-0 px-8 py-6 mt-1 md:rounded-md dark:bg-white/10 dark:border-white/10">
        <div>
          <FaCode className="hidden md:inline text-2xl mr-3 float-start" />
          <p>
            Designed and developed by Cart Valderama. Built with React,
            TailwindCSS, Vite, Framer Motion, Shadcn/ui, and TypeScript.
          </p>
        </div>
      </div>
      <div
        className="hidden w-[14rem] sm:block bg-secondary border-y md:border-0 px-8 py-6 border-l-0 mt-1 md:rounded-md dark:bg-white/10 dark:border-white/10"
        aria-hidden={true}
      >
        <CustomCarousel data={aboutCart} delay={2000} />
      </div>
    </motion.footer>
  );
}
