import "@fontsource/rubik";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ThemeContextProvider from "./context/theme-context";
import { Toaster } from "react-hot-toast";
import Body from "./layouts/Main";
import ActiveSectionContextProvider from "./context/active-section-context";
import { Analytics } from "@vercel/analytics/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const princeY = useTransform(scrollYProgress, [0.8, 0], ["0%", "35%"]);
  const asteroidY = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);

  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <div
          ref={ref}
          className="max-w-4xl sm:mt-2 gap-6 flex m-auto flex-col text-primary dark:text-opacity-85 dark:text-[#fcf9ec] relative"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ y: princeY }}
            aria-hidden
            src="https://i.imgur.com/Iduv8pu.png"
            className="w-[18rem] 2xl:w-[22rem] -right-16 bottom-20 fixed hidden dark:xl:block"
            alt="little prince"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ y: asteroidY }}
            aria-hidden
            src="https://i.imgur.com/nAjE9MK.png"
            className="w-[18rem] 2xl:w-[20rem] -right-16 bottom-0 fixed hidden dark:xl:block"
            alt="little prince's asteroid"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 3 }}
            aria-hidden
            className="fixed -z-30 bg-amber-50 right-[10rem] rounded-full w-[60rem] h-[60rem] blur-3xl dark:bg-slate-100 dark:hidden hidden lg:block"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 3 }}
            aria-hidden
            className="fixed -z-30 bg-red-50 left-[10rem] rounded-full w-[60rem] h-[60rem] blur-3xl dark:bg-slate-100 dark:hidden hidden lg:block"
          ></motion.div>
          <Toaster
            position="bottom-center"
            containerClassName="mb-32 md:mb-0"
          />
          <Analytics />
          <Header />
          <Body />
          <Footer />
        </div>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
