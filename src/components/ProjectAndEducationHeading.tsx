import { motion } from "framer-motion";

type ProjectAndEducationHeadingProps = {
  setIsProjects: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isProjects: boolean;
};

export default function ProjectAndEducationHeading({
  setIsProjects,
  setCurrentPage,
  isProjects,
}: ProjectAndEducationHeadingProps) {
  return (
    <motion.div
      className="border border-b-0 md:border-b bg-secondary flex justify-between items-end py-4 px-8 md:rounded-t-md"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1 className="text-lg sm:text-2xl font-bold flex flex-wrap mr-3">
        Projects & Education
      </h1>
      <div className="flex">
        <div className="flex text-xs md:text-normal" role="group">
          <button
            onClick={() => {
              setIsProjects(true);
              setCurrentPage(1);
            }}
            className={`px-2 sm:px-4 py-1 border w-[5.5rem] rounded-tl-md  transition-all ${
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
              setCurrentPage(1);
            }}
            className={`px-2 sm:px-4 py-1 border w-[5.5rem] rounded-tr-md  transition-all ${
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
