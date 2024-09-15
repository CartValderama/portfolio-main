import "@fontsource/rubik";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ThemeContextProvider from "./context/theme-context";
import Main from "./layouts/Main";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeContextProvider>
      <div className="max-w-5xl m-auto text-primary py-5 dark:text-opacity-85 dark:text-[#fcf9ec]">
        <Toaster position="top-center" />
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}
