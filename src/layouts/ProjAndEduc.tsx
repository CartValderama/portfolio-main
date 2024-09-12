import { useQuery } from "@tanstack/react-query";
import { fetchPublicRepos } from "../data/fetchPublicRepo";
import { RepositoryProps } from "../types/repository";
import { useState } from "react";

import Experience from "../components/Education";
import Projects from "../components/Projects";
import ProjectAndEducationHeading from "../components/ProjectAndEducationHeading";

export default function ProjAndEduc() {
  const [isProjects, setIsProjects] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 3;
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery<RepositoryProps[]>({
    queryFn: () => fetchPublicRepos(currentPage, reposPerPage),
    queryKey: ["repos", currentPage],
  });

  return (
    <section className="flex flex-col md:gap-1 w-full ">
      <ProjectAndEducationHeading
        setIsProjects={setIsProjects}
        setCurrentPage={setCurrentPage}
        isProjects={isProjects}
      />

      {isLoading && (
        <div className="w-full flex items-center justify-center mt-32">
          <div className="w-44 h-44 border-4 border-stone-500 border-t-transparent border-solid rounded-full animate-spin text-center"></div>
        </div>
      )}

      {error && (
        <p className="text-center text-2xl capitalize mt-32">
          Something went wrong when fetching the data
        </p>
      )}

      {!isLoading && !error && (
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
      )}
    </section>
  );
}
