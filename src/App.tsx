import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutMe from "./layouts/AboutMe";
import ProjAndEduc from "./layouts/ProjAndEduc";
import Skills from "./layouts/Skills";
import "@fontsource/rubik";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function App() {
  return (
    <main className="max-w-5xl m-auto my-5 text-primary">
      <Toaster position="top-center" />
      <div className="flex flex-col gap-3">
        <AboutMe />
        <div className="flex flex-col md:flex-row gap-3">
          <Skills />
          <QueryClientProvider client={queryClient}>
            <ProjAndEduc />
          </QueryClientProvider>
        </div>
      </div>
    </main>
  );
}
