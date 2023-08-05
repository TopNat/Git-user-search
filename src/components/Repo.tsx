import { IRepos } from "../models/models";
import { RepoSt, RepoLink } from "../styles/components";

export function Repo({ repo }: { repo: IRepos }) {
  return (
    <RepoLink href={repo.html_url} target="_blank" rel="noreferrer">
      <RepoSt>
        <h3>{repo.full_name}</h3>
        <span>{repo?.description}</span>
      </RepoSt>
    </RepoLink>
  );
}
