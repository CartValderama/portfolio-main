import { motion } from "framer-motion";
import { RepositoryProps } from "../types/repository";
import { fetchPublicRepos } from "../data/fetchData";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./project-section/Skeleton";
import ErrorPage from "./project-section/ErrorPage";
import ProjectContent from "./project-section/ProjectContent";
import { useRef, useState } from "react";
import ProjectNavigation from "./project-section/ProjectNavigation";
import { useSectionInView } from "@/utils/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const sectionRef = useRef<HTMLHeadingElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 2;
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery<RepositoryProps[]>({
    queryFn: () => fetchPublicRepos(currentPage, reposPerPage),
    queryKey: ["repos", currentPage],
  });

  return (
    <section
      className="flex flex-col md:gap-2 scroll-mt-20"
      id="projects"
      ref={ref}
    >
      <motion.div
        className="flex justify-between items-center bg-secondary border-y md:border-0 md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1
          className="text-xl sm:text-2xl font-bold uppercase scroll-mt-28"
          ref={sectionRef}
        >
          Projects
        </h1>
      </motion.div>
      {isLoading && <Skeleton />}
      {error && <ErrorPage />}

      {!isLoading && repos && !error && (
        <div className="border-b md:border-0 flex flex-col bg-secondary md:rounded-md gap-y-5 py-6 px-8 dark:bg-white/10 dark:border-white/10">
          <h2 className="capitalize text-xl">Notable Projects</h2>
          <ProjectContent content={repos} />
          <ProjectNavigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            sectionRef={sectionRef}
            totalPages={3}
          />
        </div>
      )}
    </section>
  );
}
