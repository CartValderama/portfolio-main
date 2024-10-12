import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { fadeInAnimationVariants } from "../../utils/general-utils";
import { RepositoryProps } from "../../types/repository";
import { colorChecker } from "../../utils/general-utils";
import { RxOpenInNewWindow } from "react-icons/rx";
import { fetchPublicRepos } from "../../data/fetchData";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "../../utils/useContext";
import Skeleton from "./Skeleton";

type ProjectsProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sectionRef: React.MutableRefObject<HTMLElement | null>;
};

export default function Projects({
  sectionRef,
  currentPage,
  setCurrentPage,
}: ProjectsProps) {
  const reposPerPage = 2;
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery<RepositoryProps[]>({
    queryFn: () => fetchPublicRepos(currentPage, reposPerPage),
    queryKey: ["repos", currentPage],
  });

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView();
  };

  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
      className="col-span-9"
    >
      {isLoading && <Skeleton />}
      {error && (
        <div className="border flex flex-col bg-secondary md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/10">
          <div className="h-[25rem] flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl uppercase mb-2 w-3/4">
              Something went wrong while fetching data from GitHub
            </h2>

            <p className="flex justify-center items-center gap-1 text-sm text-secondary">
              You can just visit my{" "}
              <a
                href="https://github.com/CartValderama"
                className="text-black underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my projects on GitHub"
              >
                <FaGithub />
                GitHub
              </a>{" "}
              to view my projects.
            </p>
          </div>
        </div>
      )}

      {!isLoading && !error && (
        <div className="border flex flex-col bg-secondary md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/10">
          <h2 className="text-xl mb-6">Notable Projects</h2>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-6 ">
              {repos?.map(
                (
                  {
                    id,
                    name,
                    description,
                    html_url,
                    homepage,
                    language,
                    topics,
                  },
                  idx
                ) => (
                  <motion.div
                    key={id}
                    className="bg-slate-50 rounded p-6 flex flex-col justify-between relative overflow-hidden group dark:bg-white/10"
                    variants={fadeInAnimationVariants("x", 50, 0)}
                    initial="initial"
                    animate="animate"
                    custom={idx}
                  >
                    <div className="flex flex-col items-start gap-y-1 mb-6">
                      <div className="flex items-center justify-between w-full gap-x-2">
                        <h3 className="capitalize text-xl font-bold">{name}</h3>
                        <div className="flex gap-x-4 text-xl lg:text-sm">
                          <a
                            href={html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-x-1 items-center hover:underline transition-all"
                            aria-label={`View the GitHub repository for ${name}`}
                          >
                            <FaGithub />
                            <span className="capitalize hidden lg:block">
                              repository
                            </span>
                          </a>
                          {homepage && (
                            <a
                              href={homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex gap-x-1 items-center hover:underline transition-all"
                              aria-label={`View the live demo for ${name}`}
                            >
                              <RxOpenInNewWindow />
                              <span className="capitalize hidden lg:block">
                                live demo
                              </span>
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-secondary capitalize flex gap-x-1 items-center">
                        Predominantly:{" "}
                        <span
                          style={{
                            color:
                              theme === "light"
                                ? language
                                  ? colorChecker(language)
                                  : "#57534e"
                                : "#FAF9F6",
                          }}
                        >
                          {language}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-y-4 w-11/12 md:w-8/12">
                      <div className="flex flex-col items-start gap-y-4">
                        <p>
                          {description
                            ? description
                            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laboriosam est libero facilis debitis commodi itaque eveniet numquam unde reiciendis"}
                        </p>
                        <ul className="flex gap-2 flex-wrap">
                          {topics?.map((topic, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-white dark:text-stone-800 px-2 py-1 font-thin rounded-sm uppercase"
                              style={{
                                backgroundColor:
                                  theme === "light"
                                    ? language
                                      ? colorChecker(language)
                                      : "#57534e"
                                    : "#FAF9F6",
                              }}
                            >
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <img
                      src={`https://raw.githubusercontent.com/CartValderama/${name}/main/pics/${name}.png`}
                      alt={`${name} image`}
                      aria-hidden="true"
                      className="w-[23rem] border rounded-tl absolute -right-44 -bottom-20 group-hover:-translate-x-3 
          group-hover:translate-y-3 group-hover:-rotate-2  transition-all duration-300 hidden md:block dark:border-transparent"
                    />
                  </motion.div>
                )
              )}
            </div>
            <div
              className="flex justify-between items-center gap-x-2 mt-5"
              role="navigation"
              aria-label="Pagination Navigation"
            >
              <button
                type="button"
                onClick={() => {
                  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
                  handleScroll();
                }}
                disabled={currentPage === 1}
                aria-disabled={currentPage === 1}
                aria-label="Previous Page"
                className={`py-1 px-3 border dark:border-none rounded-sm w-20 dark:bg-white/10 ${
                  currentPage !== 1
                    ? "hover:bg-gray-100 dark:hover:bg-stone-900"
                    : "opacity-0"
                } transition-all duration-300`}
              >
                Prev
              </button>

              <p className="text-sm">
                <i>
                  Page {currentPage} of {3}
                </i>
              </p>

              <button
                type="button"
                onClick={() => {
                  setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
                  handleScroll();
                }}
                disabled={currentPage === 3}
                aria-disabled={currentPage === 3}
                aria-label="Next Page"
                className={`py-1 px-3 border dark:border-none rounded w-20 dark:bg-white/10 ${
                  currentPage !== 4
                    ? "hover:bg-gray-100 dark:hover:bg-stone-900"
                    : "opacity-0"
                } transition-all duration-300`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
