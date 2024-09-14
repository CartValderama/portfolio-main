import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/rubik";
import { Toaster } from "react-hot-toast";
import AboutMe from "./layouts/AboutMe";
import ProjAndEduc from "./layouts/ProjAndEduc";
import Skills from "./layouts/Skills";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="max-w-5xl m-auto my-5 text-primary">
      <Header />
      <main className="flex flex-col gap-3">
        <AboutMe />
        <div className="flex flex-col md:flex-row gap-3">
          <Skills />
          <QueryClientProvider client={queryClient}>
            <ProjAndEduc />
          </QueryClientProvider>
        </div>
        <Toaster position="top-center" />
      </main>
      <Footer />
    </div>
  );
}
