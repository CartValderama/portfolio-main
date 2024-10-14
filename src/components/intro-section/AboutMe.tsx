import { motion } from "framer-motion";

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
        <div className="flex flex-col">
          <p className="text-2xl">Cart Antonio Valderama</p>
          <p className=" text-secondary text">Student</p>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        Hello, I’m Cart Antonio Valderama, an aspiring frontend developer
        dedicated to creating simple and intuitive web interfaces. With a solid
        foundation in HTML, CSS, and JavaScript, I possess expertise in building
        responsive layouts and optimizing performance. Currently, I’m exploring
        new tools and techniques to enhance my projects while prioritizing
        accessibility and performance.
      </motion.p>
    </motion.div>
  );
}
