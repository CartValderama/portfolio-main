import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contacts() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-x-24 gap-y-4 lg:flex lg:flex-col lg:gap-4 bg-secondary border p-8 rounded-md"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="hidden">Contacts</h2>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <h3 className="font-medium mb-1">E-mail</h3>
        <p className="truncate">cartantonio2000@gmail.com</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.125,
        }}
      >
        <h3 className="font-medium mb-1">Phone no.</h3>
        <p>+47 908 83 637</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.15,
        }}
      >
        <h3 className="font-medium mb-1">Socials</h3>
        <div className="flex gap-3">
          <a
            href=""
            target="_blank"
            className="flex gap-1 items-center underline text-black hover:text-stone-500 transition-all"
          >
            <FaGithub />
            <span>Github</span>
          </a>
          <a
            href=""
            target="_blank"
            className="flex gap-1 items-center underline text-sky-700 hover:text-stone-500 transition-all"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.175,
        }}
      >
        <h3 className="font-medium mb-1">Resume</h3>
        <a
          href=""
          className="flex gap-1 items-center hover:text-stone-500 transition-all"
        >
          <BiDownload />
          <span>resume.pdf</span>
        </a>
      </motion.div>
    </motion.div>
  );
}
