import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProjAndEduc from "../components/ProjAndEduc";
const queryClient = new QueryClient();

export default function Main() {
  return (
    <main className="flex flex-col gap-3 ">
      <AboutMe />
      <div className="flex flex-col md:flex-row gap-3">
        <Skills />
        <QueryClientProvider client={queryClient}>
          <ProjAndEduc />
        </QueryClientProvider>
      </div>
    </main>
  );
}
