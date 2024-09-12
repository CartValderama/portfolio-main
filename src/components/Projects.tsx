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
        ({ id, name, description, html_url, homepage, language }, idx) => (
          <motion.div
            key={id}
            className="bg-zinc-50 py-4 px-6 flex flex-col gap-y-4"
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            custom={idx}
          >
            <div className="flex justify-between items-baseline gap-x-4 ">
              <h3 className="capitalize text-xl font-medium">{name}</h3>
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
              <p className="w-4/6">
                {description
                  ? description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laboriosam est libero facilis debitis commodi itaque eveniet numquam unde reiciendis"}
              </p>
              <p
                className={`text-xs px-3 py-1 text-white rounded-full`}
                style={{
                  backgroundColor: language
                    ? colorChecker(language)
                    : "#57534e",
                }}
              >
                {language}
              </p>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
