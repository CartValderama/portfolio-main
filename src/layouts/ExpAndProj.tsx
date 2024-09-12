import { useQuery } from "@tanstack/react-query";
import { fetchPublicRepos } from "../data/fetchPublicRepo";
import { RepositoryProps } from "../types/repository";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function ExpAndProj() {
  const [isProjects, setIsProjects] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 4;
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery<RepositoryProps[]>({
    queryFn: () => fetchPublicRepos(currentPage, reposPerPage),
    queryKey: ["repos", currentPage],
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (sectionRef.current) {
      scrollToElement(sectionRef);
    }
  }, [currentPage]);

  if (isLoading)
    return (
      <div className="flex w-full justify-center items-center">
        <div className="w-44 h-44 border-4 border-stone-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  if (error)
    return (
      <div className="flex w-full justify-center items-center">
        <p>error fetching</p>
      </div>
    );

  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      ref={sectionRef}
      className="flex flex-col md:gap-1 w-full "
    >
      <motion.div
        className="border border-b-0 md:border-b bg-secondary flex justify-between items-end py-4 px-8 md:rounded-t-md"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
        }}
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

      <div className="border bg-secondary flex flex-col justify-between py-4 px-8 md:rounded-b-md">
        <div className="flex flex-col gap-y-10">
          {!isProjects ? <Experience /> : <Projects repos={repos ?? []} />}
        </div>

        {isProjects && (
          <div className="flex justify-between items-center mt-12 space-x-2">
            <button
              onClick={() => {
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
              }}
              disabled={currentPage === 1}
              className={`py-1 px-3 bg-stone-600 text-white rounded-md w-20 ${
                currentPage !== 1
                  ? "hover:font-bold hover:bg-stone-400"
                  : "opacity-0"
              } transition-all`}
            >
              Prev
            </button>
            <p className="text-sm">
              <i>
                Page {currentPage} of {3}
              </i>
            </p>
            <button
              onClick={() => {
                setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
              }}
              disabled={currentPage === 3}
              className={`py-1 px-3 bg-stone-600 text-white rounded-md w-20 ${
                currentPage !== 3
                  ? "hover:font-bold hover:bg-stone-400"
                  : "opacity-0"
              } transition-all`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
