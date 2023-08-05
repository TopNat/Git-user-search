import { useParams } from "react-router-dom";
import { useGetUserReposQuery } from "../services/user";
import { Repo } from "../components/Repo";
import { MessageText } from "../styles/components";
//import { useState } from "react";

export function UserRepos() {
  
  const { login } = useParams();
  const { isLoading, data } = useGetUserReposQuery(String(login));
  console.log(data);
  
  return (
    <div>
      {isLoading && <MessageText>Идет загрузка...</MessageText>}

      {data?.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </div>
  );
}
