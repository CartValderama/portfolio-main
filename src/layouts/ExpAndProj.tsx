import { useQuery } from "@tanstack/react-query";
import { fetchPublicRepos } from "../data/fetchPublicRepo";
import { RepositoryProps } from "../types/repository";
import { useState } from "react";
import { motion } from "framer-motion";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function ExpAndProj() {
  const [isProjects, setIsProjects] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 5;
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery<RepositoryProps[]>({
    queryFn: () => fetchPublicRepos(currentPage, reposPerPage),
    queryKey: ["repos", currentPage],
  });

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
    >
      <div className="flex flex-col gap-y-10">
        <h1 className="hidden">Experience and Projects</h1>
        <div className="flex gap-x-10">
          <button
            onClick={() => {
              setIsProjects(true);
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
              setCurrentPage(1);
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
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <p>
            page {currentPage} of {2}
          </p>
          <button
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            disabled={currentPage === 2}
          >
            Next
          </button>
        </div>
      )}
    </motion.section>
  );
}
