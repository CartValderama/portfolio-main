import { motion } from "framer-motion";
import { copyText } from "../../utils/general-utils";
import { FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";

export default function Contacts() {
  return (
    <motion.div
      className="md:rounded-md col-span-2 flex flex-col gap-y-4 bg-secondary border px-8 py-6 dark:bg-white/10 dark:border-white/10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-xl">Contacts</h2>
      <div className="flex flex-wrap md:flex-col gap-4 gap-x-10">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.125,
          }}
          className="p-1"
        >
          <div className="flex items-baseline gap-x-2">
            <h3 className="">Phone no.</h3>
            <button
              onClick={() => copyText("phone")}
              className=" hover:text-stone-500 transition "
              aria-label="copy phone number +47 908 83 637"
            >
              <FaRegCopy />
            </button>
          </div>

          <p id="phone" className="truncate">
            +47 908 83 637
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.15,
          }}
          className="p-1"
        >
          <h3>Socials</h3>
          <div className="flex gap-3">
            <a
              href="https://github.com/CartValderama"
              target="_blank"
              className="flex gap-1 items-center text-black hover:text-stone-500 hover:underline transition-all dark:text-[#fcf9ec]"
              aria-label="Check Cart Valderama's github"
            >
              <FaGithub />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cart-valderama/"
              target="_blank"
              className="flex gap-1 items-center text-sky-700 hover:text-stone-500 hover:underline transition-all dark:text-[#fcf9ec]"
              aria-label="Check Cart Valderama's linkedin"
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
          className="p-1"
        >
          <h3 className="">Resume</h3>
          <a
            href="/docs/CV_Cart.pdf"
            download
            className="flex gap-1 items-center hover:underline transition-all duration-300"
            aria-label="Download Cart Valderama's resume as a PDF"
          >
            <FaFileDownload />
            <span>resume.pdf</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="p-1"
        >
          <div className="flex items-baseline gap-x-2">
            <h3 className="">E-mail</h3>
            <button
              onClick={() => copyText("email")}
              className=" hover:text-stone-500 transition"
              aria-label="copy email cartantonio2000@gmail.com"
            >
              <FaRegCopy />
            </button>
          </div>

          <p id="email" className="truncate">
            cartantonio2000@gmail.com
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
