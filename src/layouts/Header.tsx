import { motion } from "framer-motion";
import { links } from "../data/staticData";
import { useActiveSectionContext } from "../utils/useContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.header
      className="fixed md:sticky w-full z-[999] bottom-0 md:top-0 h-[4.5rem] rounded-none border bg-secondary md:bg-opacity-80 text-stone-700 md:shadow-black/[0.10] 
        md:backdrop-blur-[0.5rem] sm:h-[4rem] sm:rounded-md dark:bg-stone-800 dark:md:bg-stone-700 dark:border-white/5 dark:md:bg-opacity-80"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav className="flex justify-center items-center h-full">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 w-full sm:w-[initial] sm:flex-nowrap gap-10">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "tween",
                duration: 0.1,
              }}
            >
              <a
                className={`p-2 hover:text-stone-950 transition-all duration-300 ease-in-out dark:text-stone-200 flex items-center gap-x-2 justify-center relative hover:bg-stone-100 dark:hover:text-stone-800 dark:hover:bg-stone-500 rounded ${
                  activeSection === link.name ? "text-stone-950" : ""
                }`}
                href={link.hash}
                aria-label={link.name}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <i className="md:hidden lg:inline-block" aria-hidden="false">
                  {link.icon}
                </i>
                <span className="sr-only md:not-sr-only">{link.name}</span>
                {link.name === activeSection && (
                  <motion.span
                    className="border-b-2 border-sky-950 absolute inset-0 dark:border-stone-400"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
