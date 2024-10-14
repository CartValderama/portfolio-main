import { useActiveSectionContext } from "./useContext";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "../types/sectionLink";
import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

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

type UsePaginationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  sectionRef: MutableRefObject<HTMLHeadingElement | null>;
  totalPages: number;
  isStartNavigating: boolean;
};

export const usePagination = ({
  currentPage,
  setCurrentPage,
  sectionRef,
  totalPages,
  isStartNavigating,
}: UsePaginationProps) => {
  useEffect(() => {
    if (isStartNavigating) {
      sectionRef.current?.scrollIntoView();
    }
  }, [currentPage, sectionRef, isStartNavigating]);

  const handlePageChange = (direction: "prev" | "next") => {
    setCurrentPage((prevPage) =>
      direction === "prev"
        ? Math.max(prevPage - 1, 1)
        : Math.min(prevPage + 1, totalPages)
    );
  };

  return { handlePageChange };
};
