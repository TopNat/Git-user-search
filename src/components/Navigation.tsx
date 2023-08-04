import { useNavigate } from "react-router-dom";
import { ContainerHeader, GoMain, Title } from "../styles/components";

export function Navigation() {
  
  const navigate = useNavigate();

  function goMain() {
    navigate("/");
  }

  return (
    <nav>
      <ContainerHeader>
        <Title>GitHub User Search</Title>
        <GoMain onClick={goMain}>Main</GoMain>
      </ContainerHeader>
    </nav>
  );
}
