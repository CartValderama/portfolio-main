import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutMe from "./layouts/AboutMe";
import ExpAndProj from "./layouts/ExpAndProj";
import Skills from "./layouts/Skills";

const queryClient = new QueryClient();

export default function App() {
  return (
    <main className="bg-background">
      <AboutMe />
      <div className="flex">
        <Skills />
        <QueryClientProvider client={queryClient}>
          <ExpAndProj />
        </QueryClientProvider>
      </div>
    </main>
  );
}
