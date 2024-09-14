import { useRef, useState } from "react";
import Projects from "../components/Projects";
import ProjectAndEducationHeading from "../components/ProjectAndEducationHeading";
import Education from "../components/Education";

export default function ProjAndEduc() {
  const [isProjects, setIsProjects] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section className="flex flex-col md:gap-1 w-full" ref={sectionRef}>
      <ProjectAndEducationHeading
        setIsProjects={setIsProjects}
        isProjects={isProjects}
      />

      {!isProjects ? (
        <Education />
      ) : (
        <Projects
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          sectionRef={sectionRef}
        />
      )}
    </section>
  );
}
