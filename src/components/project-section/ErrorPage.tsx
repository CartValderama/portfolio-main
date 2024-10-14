import { FaGithub } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <div className="border flex flex-col bg-secondary md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/10">
      <div className="h-[25rem] flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl uppercase mb-2 w-3/4">
          Something went wrong while fetching data from GitHub
        </h2>

        <p className="flex justify-center items-center gap-1 text-sm text-secondary">
          You can just visit my{" "}
          <a
            href="https://github.com/CartValderama"
            className="text-black underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my projects on GitHub"
          >
            <FaGithub />
            GitHub
          </a>{" "}
          to view my projects.
        </p>
      </div>
    </div>
  );
}
