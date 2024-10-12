import Skills from "../components/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Introduction from "../components/Introduction";
import Background from "../components/Background";

const queryClient = new QueryClient();

export default function Body() {
  return (
    <main className="flex flex-col gap-6 ">
      <Introduction />
      <Skills />
      <QueryClientProvider client={queryClient}>
        <Background />
      </QueryClientProvider>
    </main>
  );
}
