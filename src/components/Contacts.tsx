import { motion } from "framer-motion";
import { copyText } from "../utils/copyText";
import { FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";

export default function Contacts() {
  return (
    <motion.div
      className="flex flex-col gap-y-4 bg-secondary border px-8 py-6 dark:bg-white/10 dark:border-white/10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-xl">Contacts</h2>
      <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-4">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <div className="flex items-baseline gap-x-2">
            <h3 className="">E-mail</h3>
            <button
              onClick={() => copyText("email")}
              className="text-sm hover:text-stone-500 transition "
            >
              <FaRegCopy />
            </button>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cartantonio2000@gmail.com"
            target="_blank"
            className="text-sm sm:text-base flex"
            id="email"
          >
            <span className="truncate">cartantonio2000@gmail.com</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.125,
          }}
        >
          <div className="flex items-baseline gap-x-2">
            <h3 className="">Phone no.</h3>
            <button
              onClick={() => copyText("phone")}
              className="text-sm hover:text-stone-500 transition "
            >
              <FaRegCopy />
            </button>
          </div>

          <p id="phone" className="text-sm sm:text-base truncate">
            +47 908 83 637
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.15,
          }}
        >
          <h3>Socials</h3>
          <div className="flex text-sm sm:text-base gap-3">
            <a
              href="https://github.com/CartValderama"
              target="_blank"
              className="flex gap-1 items-center text-sm sm:text-base text-black hover:text-stone-500 hover:underline transition-all dark:text-[#fcf9ec]"
            >
              <FaGithub />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cart-valderama/"
              target="_blank"
              className="flex gap-1 items-center text-sm sm:text-base text-sky-700 hover:text-stone-500 hover:underline transition-all dark:text-[#fcf9ec]"
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
          <h3 className="">Resume</h3>
          <a
            href="/docs/CV_CartValderama.pdf"
            download
            className="flex gap-1 items-center hover:underline text-sm sm:text-base transition-all duration-300"
          >
            <FaFileDownload />
            <span>resume.pdf</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
