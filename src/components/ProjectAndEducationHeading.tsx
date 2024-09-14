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
      className="border border-b-0 md:border-b bg-secondary flex justify-between items-end py-6 px-8 "
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <h1 className="text-xl lg:text-2xl font-bold flex flex-wrap mr-3">
        Projects & Education
      </h1>
      <div className="flex">
        <div className="flex" role="group">
          <button
            onClick={() => {
              setIsProjects(true);
            }}
            className={`w-[3rem] sm:text-xs lg:text-sm sm:w-auto px-2 sm:px-4 py-1 border rounded-tl-md transition-all truncate ${
              isProjects
                ? "bg-stone-700 text-white font-bold border-r-0"
                : "bg-white hover:font-bold hover:bg-stone-400 hover:text-white"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setIsProjects(false);
            }}
            className={`w-[3rem] sm:text-xs lg:text-sm sm:w-auto px-2 sm:px-4 py-1 border rounded-tr-md transition-all truncate ${
              !isProjects
                ? "bg-stone-700 text-white font-bold border-l-0"
                : "bg-white hover:font-bold hover:bg-stone-400 hover:text-white"
            }`}
          >
            Education
          </button>
        </div>
      </div>
    </motion.div>
  );
}
