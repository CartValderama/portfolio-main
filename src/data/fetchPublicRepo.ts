import axios from "axios";
import { RepositoryProps } from "../types/repository";

export const fetchPublicRepos = async (): Promise<RepositoryProps[]> => {
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
