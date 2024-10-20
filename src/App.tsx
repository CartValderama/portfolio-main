import "@fontsource/rubik";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ThemeContextProvider from "./context/theme-context";
import { Toaster } from "react-hot-toast";
import Body from "./layouts/Main";
import ActiveSectionContextProvider from "./context/active-section-context";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <div className="max-w-4xl sm:mt-2 gap-6 flex flex-col m-auto text-primary dark:text-opacity-85 dark:text-[#fcf9ec]">
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
