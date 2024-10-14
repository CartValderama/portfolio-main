import { useEffect, useRef, useState } from "react";
import Projects from "./Projects";
import { Dropdown } from "./ui/custom/Dropdown";
import { useSectionInView } from "@/utils/hooks";
import Experience from "./Experience";
import { motion } from "framer-motion";

const sections = [
  { value: "Projects", label: "Projects" },
  { value: "Education", label: "Education" },
  { value: "Experience", label: "Experience" },
];

export default function Background() {
  const [backgroundSection, setBackgroundSection] = useState("Projects"); // Default to "Projects"

  const [threshold, setThreshold] = useState(0.8);

  useEffect(() => {
    const handleResize = () => {
      setThreshold(window.innerWidth < 770 ? 0.2 : 0.5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { ref } = useSectionInView("Background", threshold);

  return (
    <section
      className="flex flex-col md:gap-1 scroll-mt-20"
      ref={ref}
      id="background"
    >
      <motion.div
        className="flex justify-between items-center bg-secondary border-b-0 md:border-b border md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1
          className="text-xl sm:text-2xl font-bold uppercase"
          ref={sectionRef}
        >
          Background
        </h1>

        <Dropdown
          data={sections}
          action={setBackgroundSection}
          def={"Projects"}
        />
      </motion.div>

      {backgroundSection === "Experience" && <Experience />}
    </section>
  );
}
