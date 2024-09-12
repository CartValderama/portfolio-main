import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="flex flex-col gap-y-4 sm:gap-y-8 bg-secondary border p-8 rounded-md"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="flex items-center gap-5">
        <img
          src="https://i.imgur.com/6VSZ344.jpeg"
          alt="image of cart valderama"
          className="w-32 rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Cart Antonio Valderama</h1>
          <p className="font-thin text-secondary text-sm">Student</p>
        </div>
      </div>
      <p>
        Hi, I'm Cart Antonio Valderama, a 24-year-old from Oslo, working toward
        becoming a frontend developer. I’m passionate about building modern,
        user-friendly web experiences 🌐 and constantly learning new
        technologies 🔧. Ready for the next challenge! 🚀✨
      </p>
    </motion.div>
  );
}
