import { motion } from "framer-motion";

type ProjectAndEducationHeadingProps = {
  setIsProjects: React.Dispatch<React.SetStateAction<boolean>>;
  isProjects: boolean;
};

export default function ProjectAndEducationHeading({
  setIsProjects,
  isProjects,
}: ProjectAndEducationHeadingProps) {
  return (
    <motion.div
      className="border border-b-0 md:border-b bg-secondary flex justify-between items-end py-4 px-8 dark:bg-white/10 dark:border-white/10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <h1 className="text-xl lg:text-2xl font-bold flex flex-wrap mr-3">
        Projects & Education
      </h1>

      <div className="flex gap-x-3">
        <button
          onClick={() => setIsProjects(true)}
          className={`px-1 border-b-2 transition-colors ease-in-out border-transparent ${
            isProjects
              ? "border-b-stone-600 dark:border-b-[#fcf9ec]"
              : "text-secondary"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setIsProjects(false)}
          className={`px-1 border-b-2 transition-colors ease-in-out border-transparent ${
            !isProjects
              ? "border-b-stone-600 dark:border-b-[#fcf9ec]"
              : "text-secondary"
          }`}
        >
          Education
        </button>
      </div>
    </motion.div>
  );
}
