import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { RxOpenInNewWindow } from "react-icons/rx";
import { fadeInAnimationVariants } from "../utils/staggerAnimation";
import { RepositoryProps } from "../types/repository";
import { colorChecker } from "../utils/colorChecker";

interface ProjectsProps {
  repos: RepositoryProps[];
}

export default function Projects({ repos }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="font-semibold">Notable Projects</h2>
      {repos?.map(
        (
          { id, name, description, html_url, homepage, language, topics },
          idx
        ) => (
          <motion.div
            key={id}
            className="bg-zinc-50 rounded-md py-4 px-6 flex flex-col gap-y-6"
            variants={fadeInAnimationVariants("x", 100, 0)}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <div className="flex justify-between items-baseline gap-x-4 ">
              <div className="flex flex-col items-start gap-y-1">
                <h3 className="capitalize text-xl font-medium">{name}</h3>
                <p className="text-sm font-thin text-secondary capitalize flex gap-x-1 items-center">
                  Predominantly: {language}
                </p>
              </div>

              <div className="flex gap-x-3 text-sm text-secondary">
                <a
                  href={html_url}
                  target="_blank"
                  className="flex gap-x-1 items-center"
                >
                  <FaGithub />
                  <span className="capitalize hidden md:block">github</span>
                </a>
                {homepage && (
                  <a
                    href={homepage}
                    target="_blank"
                    className="flex gap-x-1 items-center"
                  >
                    <RxOpenInNewWindow />
                    <span className="capitalize hidden md:block">website</span>
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-4">
              <p className="md:w-3/4">
                {description
                  ? description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laboriosam est libero facilis debitis commodi itaque eveniet numquam unde reiciendis"}
              </p>
              <ul className="flex gap-2 flex-wrap">
                {topics?.map((topic, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-white px-2 py-1 font-thin rounded"
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
          </motion.div>
        )
      )}
    </div>
  );
}
