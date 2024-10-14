import { Dispatch, MutableRefObject, SetStateAction } from "react";

type ProjectNavigationProps = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  sectionRef: MutableRefObject<HTMLHeadingElement | null>;
};

export default function ProjectNavigation({
  currentPage,
  setCurrentPage,
  sectionRef,
}: ProjectNavigationProps) {
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView();
  };

  return (
    <div
      className="flex justify-between items-center gap-x-2 mt-4"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <button
        type="button"
        onClick={() => {
          setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
          handleScroll();
        }}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
        aria-label="Previous Page"
        className={`py-1 px-3 border dark:border-none rounded-sm w-20 dark:bg-white/10 ${
          currentPage !== 1
            ? "hover:bg-gray-100 dark:hover:bg-stone-900"
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
        type="button"
        onClick={() => {
          setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
          handleScroll();
        }}
        disabled={currentPage === 3}
        aria-disabled={currentPage === 3}
        aria-label="Next Page"
        className={`py-1 px-3 border dark:border-none rounded w-20 dark:bg-white/10 ${
          currentPage !== 3
            ? "hover:bg-gray-100 dark:hover:bg-stone-900"
            : "opacity-0"
        } transition-all duration-300`}
      >
        Next
      </button>
    </div>
  );
}