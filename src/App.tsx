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

  const planeY = useTransform(scrollYProgress, [1, 0], ["-100%", "10%"]);
  const planeX = useTransform(scrollYProgress, [0, 1], ["-100%", "150%"]);
  const planeScale = useTransform(scrollYProgress, [1, 0], ["0%", "150%"]);

  const asteroidY = useTransform(scrollYProgress, [1, 0], ["0%", "100%"]);
  const asteroidX = useTransform(scrollYProgress, [1, 0], ["-20%", "100%"]);
  const asteroidScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <div
          ref={ref}
          className="max-w-4xl sm:mt-2 gap-6 flex m-auto flex-col text-primary dark:text-opacity-85 dark:text-[#fcf9ec] relative"
        >
          {/* plane */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ y: planeY, x: planeX, scale: planeScale }}
            aria-hidden
            src="https://i.imgur.com/zebyBvC.png"
            className="-z-10 w-[16rem] -left-14 top-0 fixed dark:hidden"
            alt="pilot's plane"
          />
          {/* asteroid */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ y: asteroidY, x: asteroidX, scale: asteroidScale }}
            aria-hidden
            src="https://i.imgur.com/zzfa7JK.png"
            className="w-[16rem] 2xl:w-[24rem] -right-14 bottom-0 fixed dark:hidden"
            alt="little prince's asteroid"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5 }}
            aria-hidden
            className="fixed -z-30 bg-red-50 left-[8rem] rounded-full w-[40rem] h-[40rem] blur-3xl dark:bg-slate-100 dark:hidden hidden lg:block"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.5 }}
            aria-hidden
            className="fixed -z-30 bg-amber-50 right-[8rem] top-[16rem] rounded-full w-[40rem] h-[40rem] blur-3xl dark:bg-slate-100 dark:hidden hidden lg:block"
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
