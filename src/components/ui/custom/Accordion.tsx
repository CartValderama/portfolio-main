import { useState } from "react";
import { IconBaseProps } from "react-icons";

type AccordionProps = {
  title: string;
  description: string;
  icon?: React.FunctionComponentElement<IconBaseProps>;
};
export default function Accordion({
  title,
  description,
  icon,
}: AccordionProps) {
  const [isAccordion, setIsAccordion] = useState(false);

  const accordionId = `accordion-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className="bg-slate-100 shadow-sm p-4 px-6 flex flex-col rounded dark:bg-white/10 dark:hover:bg-stone-900 transition-all ease-in-out duration-300 hover:bg-stone-200"
      role="button"
      aria-expanded={isAccordion}
      aria-controls={accordionId}
      tabIndex={0}
      onClick={() => setIsAccordion(!isAccordion)}
    >
      <div className="flex justify-between capitalize gap-x-1 items-start sm:items-center">
        <span className="flex gap-x-3 items-center">
          <i className="text-2xl float-start hidden sm:block">{icon}</i>
          {title}
        </span>

        <svg
          className="fill-stone-700 dark:fill-white/50 shrink-0 ml-10 mt-2 sm:mt-0"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isAccordion && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isAccordion && "!rotate-180"
            }`}
          />
        </svg>
      </div>

      <div
        id={accordionId}
        className={`grid leading-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isAccordion
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isAccordion}
      >
        <p className="overflow-hidden w-11/12 ">{description}</p>
      </div>
    </div>
  );
}
