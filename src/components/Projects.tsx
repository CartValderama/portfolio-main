import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";
import { RepositoryProps } from "../types/repository";
import { colorChecker } from "../utils/colorChecker";
import { RxOpenInNewWindow } from "react-icons/rx";
import { fetchPublicRepos } from "../data/fetchData";
import { useQuery } from "@tanstack/react-query";

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
  const reposPerPage = 3;
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

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
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
        <div className="flex flex-col gap-y-6 border bg-secondary justify-between py-6 px-8 md:rounded-b-md">
          <h2 className="text-lg">Notable Projects</h2>
          {repos?.map(
            (
              { id, name, description, html_url, homepage, language, topics },
              idx
            ) => (
              <motion.div
                key={id}
                className="bg-slate-50 rounded-md py-4 px-6 flex flex-col justify-between relative overflow-hidden group"
                variants={fadeInAnimationVariants("x", 50, 0)}
                initial="initial"
                animate="animate"
                custom={idx}
              >
                <div className="flex flex-col items-start gap-y-1 mb-5">
                  <div className="flex items-center justify-between w-full gap-x-2">
                    <h3 className="capitalize text-xl font-medium">{name}</h3>
                    <div className="flex gap-x-4 text-xl lg:text-sm">
                      <a
                        href={html_url}
                        target="_blank"
                        className="flex gap-x-1 items-center hover:underline transition-all"
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
                          className="flex gap-x-1 items-center hover:underline transition-all"
                        >
                          <RxOpenInNewWindow />
                          <span className="capitalize hidden lg:block">
                            live demo
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-light text-secondary capitalize flex gap-x-1 items-center">
                    Predominantly:{" "}
                    <span
                      className="font-normal"
                      style={{
                        color: language ? colorChecker(language) : "#57534e",
                      }}
                    >
                      {language}
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-y-4 lg:w-[22rem]">
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
                          className="text-[0.65rem] text-white px-2 py-1 font-thin rounded uppercase"
                          style={{
                            backgroundColor: language
                              ? colorChecker(language)
                              : "#57534e",
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
                  className="w-[23rem] border rounded-tl absolute -right-32 -bottom-20 group-hover:-translate-x-3 
          group-hover:translate-y-3 group-hover:-rotate-2  transition-all duration-300 hidden lg:block"
                />
              </motion.div>
            )
          )}
          <div className="flex justify-between items-center mt-12 space-x-2">
            <button
              onClick={() => {
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
                handleScroll();
              }}
              disabled={currentPage === 1}
              className={`py-1 px-3 bg-slate-100 rounded-sm w-20 ${
                currentPage !== 1
                  ? "hover:font-bold hover:bg-slate-200"
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
              onClick={() => {
                setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
                handleScroll();
              }}
              disabled={currentPage === 3}
              className={`py-1 px-3 bg-slate-100 rounded-sm w-20 ${
                currentPage !== 3
                  ? "hover:font-bold hover:bg-slate-200"
                  : "opacity-0"
              } transition-all duration-300`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
