import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type RepositoryProps = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
};

const fetchPublicRepos = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/CartValderama/repos`,
      {
        params: {
          type: "public",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};

export default function ExpAndProj() {
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery({
    queryFn: () => fetchPublicRepos(),
    queryKey: ["repos"],
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching repositories.</p>;

  return (
    <div>
      <h1>Experience and Projects</h1>
      <ul>
        {repos?.map((repo: RepositoryProps) => (
          <li key={repo.id}>
            <p>{repo.name}</p>
            <p>{repo.html_url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
