import { FaCode } from "react-icons/fa"; // Import a single icon

export default function Footer() {
  return (
    <footer className="bg-secondary border px-8 py-6 mt-1 rounded-b-md">
      <p className="text-sm flex items-center">
        <FaCode className="hidden lg:inline text-xl mr-2" />
        Designed and developed by Cart Valderama. Built with React, TailwindCSS,
        Vite, Framer Motion, and TypeScript.
      </p>
    </footer>
  );
}
