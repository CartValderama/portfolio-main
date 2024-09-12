export type RepositoryProps = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  homepage?: string;
  language: string;
  topics?: string[];
};
