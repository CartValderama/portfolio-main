import "@fontsource/rubik";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ThemeContextProvider from "./context/theme-context";
import { Toaster } from "react-hot-toast";
import Body from "./layouts/Body";
import ActiveSectionContextProvider from "./context/active-section-context";

export default function App() {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <div className="max-w-4xl sm:mt-2 gap-6 flex flex-col m-auto text-primary dark:text-opacity-85 dark:text-[#fcf9ec]">
          <Toaster position="top-center" />
          <Header />
          <Body />
          <Footer />
        </div>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
