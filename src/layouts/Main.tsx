import Skills from "../components/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Introduction from "../components/Introduction";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const queryClient = new QueryClient();

export default function Main() {
  return (
    <main className="flex flex-col gap-6 ">
      <Introduction />
      <Skills />
      <Education />
      <QueryClientProvider client={queryClient}>
        <Projects />
      </QueryClientProvider>
      <Experience />
    </main>
  );
}
