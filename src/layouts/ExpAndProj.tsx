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
      className="border rounded-md bg-secondary flex flex-col justify-between w-full p-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={sectionRef}
    >
      <div className="flex flex-col gap-y-10">
        <h1 className="hidden">Experience and Projects</h1>
        <div className="flex gap-x-10">
          <button
            onClick={() => {
              setIsProjects(true);
              setCurrentPage(1); // Optional: Reset page to 1 when switching to Projects
            }}
            className={`text-xl font-bold hover:text-secondary ${
              isProjects && "underline"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => {
              setIsProjects(false);
              setCurrentPage(1); // Optional: Reset page to 1 when switching to Experience
            }}
            className={`text-xl font-bold hover:text-secondary ${
              !isProjects && "underline"
            }`}
          >
            Experience
          </button>
        </div>

        {!isProjects ? <Experience /> : <Projects repos={repos ?? []} />}
      </div>

      {isProjects && (
        <div className="flex justify-between items-center mt-4 space-x-2">
          <button
            onClick={() => {
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
            }}
            disabled={currentPage === 1}
            className={`py-1 px-3 bg-slate-50 rounded-md w-20 ${
              currentPage !== 1
                ? "hover:font-bold hover:bg-slate-100"
                : "opacity-0"
            } transition-all`}
          >
            Prev
          </button>
          <p className="text-sm">
            Page {currentPage} of {3}
          </p>
          <button
            onClick={() => {
              setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
            }}
            disabled={currentPage === 3}
            className={`py-1 px-3 bg-slate-50 rounded-md w-20 ${
              currentPage !== 3
                ? "hover:font-bold hover:bg-slate-100"
                : "opacity-0"
            } transition-all`}
          >
            Next
          </button>
        </div>
      )}
    </motion.section>
  );
}
