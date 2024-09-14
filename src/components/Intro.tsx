import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="flex flex-col gap-y-4 bg-secondary border border-b-0 md:border-b px-8 py-6"
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
          <p className="text-2xl font-bold">Cart Antonio Valderama</p>
          <p className="font-thin text-secondary text">Student</p>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        Hi, I'm Cart Antonio Valderama, a 24-year-old from Oslo, working toward
        becoming a frontend developer. I’m passionate about building modern,
        user-friendly web experiences 🌐 and constantly learning new
        technologies 🔧.
      </motion.p>
    </motion.div>
  );
}
