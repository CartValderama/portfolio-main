import { RepositoryProps } from "@/types/repository";
import { colorChecker, fadeInAnimationVariants } from "@/utils/general-utils";
import { useTheme } from "@/utils/useContext";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import TooltipCustom from "../ui/custom/Tooltip";

type ProjectContentProps = {
  content: RepositoryProps[];
};

export default function ProjectContent({ content }: ProjectContentProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-y-6 ">
      {content?.map(
        (
          { id, name, description, html_url, homepage, language, topics },
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
                  <TooltipCustom msg="check source code">
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
                  </TooltipCustom>

                  {homepage && (
                    <TooltipCustom msg="see demo">
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
                    </TooltipCustom>
                  )}
                </div>
              </div>

              <p className="text-sm text-stone-600 dark:text-stone-300 capitalize flex gap-x-1 items-center">
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
  );
}
