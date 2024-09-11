import { useQuery } from "@tanstack/react-query";
import { fetchPublicRepos } from "../data/fetchPublicRepo";
import { RepositoryProps } from "../types/repository";

export default function ExpAndProj() {
  const {
    isLoading,
    error,
    data: repos,
  } = useQuery<RepositoryProps[]>({
    queryFn: () => fetchPublicRepos(),
    queryKey: ["repos"],
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching repositories.</p>;

  return (
    <div>
      <h1>Experience and Projects</h1>
      <ul>
        {repos?.map((repo) => (
          <li key={repo.id}>
            <p>{repo.name}</p>
            <p>{repo.html_url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
