import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutMe() {
  return (
    <motion.div
      className="col-span-4 md:rounded-md flex flex-col gap-y-4 bg-secondary border border-b-0 md:border-b px-8 py-6 dark:bg-white/10 dark:border-white/10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.div
        className="flex items-center gap-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.175,
        }}
      >
        <img
          src="https://i.imgur.com/6VSZ344.jpeg"
          alt="image of cart valderama"
          className="w-36 rounded-full"
        />
        <div className="flex flex-col gap-y-1">
          <p className="text-2xl">Cart Antonio Valderama</p>
          <p className=" text-stone-600 dark:text-stone-300 flex items-baseline gap-x-1 ">
            <FaLocationDot className="text-sm" />
            <span className="">Oslo, Norway</span>
          </p>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        Hello! I’m Cart Antonio Valderama a <b>frontend developer</b> with a
        strong foundation in technologies such as HTML CSS JavaScript React and
        TypeScript. My goal is to create simple and intuitive web interfaces and
        build modern user-friendly web applications. I am currently exploring
        new tools and deepening my knowledge of web accessibility to ensure an
        inclusive and seamless user experience.
      </motion.p>
    </motion.div>
  );
}
