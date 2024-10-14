import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";
import { usePagination } from "@/utils/hooks";

type ProjectNavigationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  sectionRef: MutableRefObject<HTMLHeadingElement | null>;
  totalPages: number; // Ensure totalPages is still a prop
};

export default function ProjectNavigation({
  currentPage,
  setCurrentPage,
  sectionRef,
  totalPages = 3,
}: ProjectNavigationProps) {
  const [isStartNavigating, setIsStartNavigating] = useState(false);

  const { handlePageChange } = usePagination({
    currentPage,
    setCurrentPage,
    sectionRef,
    totalPages,
    isStartNavigating,
  });

  return (
    <div
      className="flex justify-between items-center gap-x-2 mt-4"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <button
        type="button"
        onClick={() => {
          handlePageChange("prev");
          setIsStartNavigating(true);
        }}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`py-1 px-3 border dark:border-none rounded-sm w-20 dark:bg-white/10 ${
          currentPage > 1
            ? "hover:bg-gray-100 dark:hover:bg-stone-900"
            : "opacity-50 cursor-not-allowed"
        } transition-all duration-300`}
      >
        Prev
      </button>

      <p className="text-sm">
        <i>
          Page {currentPage} of {totalPages}
        </i>
      </p>

      <button
        type="button"
        onClick={() => {
          handlePageChange("next");
          setIsStartNavigating(true);
        }}
        disabled={currentPage === totalPages}
        aria-disabled={currentPage === totalPages}
        aria-label="Next Page"
        className={`py-1 px-3 border dark:border-none rounded w-20 dark:bg-white/10 ${
          currentPage < totalPages
            ? "hover:bg-gray-100 dark:hover:bg-stone-900"
            : "opacity-50 cursor-not-allowed"
        } transition-all duration-300`}
      >
        Next
      </button>
    </div>
  );
}
