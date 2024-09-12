import axios from "axios";
import { RepositoryProps } from "../types/repository";

export const fetchPublicRepos = async (
  page: number,
  limit: number
): Promise<RepositoryProps[]> => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/CartValderama/starred`,
      {
        params: {
          page: page,
          per_page: limit,
        },
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
