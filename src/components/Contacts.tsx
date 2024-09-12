import { motion } from "framer-motion";
import { BiDownload } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contacts() {
  return (
    <motion.div
      className="grid grid-cols-2 gap-x-24 gap-y-4 lg:flex lg:flex-col lg:gap-4 bg-secondary border px-8 py-4 lg:rounded-tr-md lg:rounded-br-md"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text font-semibold hidden lg:block">Contacts</h2>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <h3>E-mail</h3>
        <p className="truncate font-light">cartantonio2000@gmail.com</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.125,
        }}
      >
        <h3>Phone no.</h3>
        <p className="font-light">+47 908 83 637</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.15,
        }}
      >
        <h3>Socials</h3>
        <div className="flex gap-3">
          <a
            href=""
            target="_blank"
            className="flex gap-1 items-center font-light text-black hover:text-stone-500 hover:underline transition-all"
          >
            <FaGithub />
            <span>Github</span>
          </a>
          <a
            href=""
            target="_blank"
            className="flex gap-1 items-center font-light text-sky-700 hover:text-stone-500 hover:underline transition-all"
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
        <h3>Resume</h3>
        <a
          href=""
          className="flex gap-1 items-center font-light hover:text-stone-500 transition-all"
        >
          <BiDownload />
          <span>resume.pdf</span>
        </a>
      </motion.div>
    </motion.div>
  );
}
