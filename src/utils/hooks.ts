import { useActiveSectionContext } from "./useContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "../types/sectionLink";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
