import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #a6a5a5;
  display: flex;
  height: 50px;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px #696969;
`;
export const Title = styled.div`
  background-color: #a6a5a5;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
export const GoMain = styled.div`
  background-color: #a6a5a5;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: underline;
`;
export const MainDiv = styled.div`
  padding-top: 50px;
`;

export const InputSearch = styled.input`
  height: 30px;
  border-radius: 10px;
  width: 450px;
  border-color: #a6a5a5;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  color: #a6a5a5;
`;

export const ButtonSearch = styled.button`
  background-color: #a6a5a5;
  height: 35px;
  border-radius: 10px;
  width: 450px;
  color: #fff;
  font-weight: bold;
  border-color: #a6a5a5;
`;

export const SearchDiv = styled.div`
  background-color: #ffffff;
  display: flex;
  gap: 30px;
  border-radius: 10px;
  justify-content: center;
`;

export const DivRadio = styled.div`
  background-color: #ffffff;
  display: flex;
  gap: 10px;
  padding-bottom: 20px;
  align-items: center;
  width: 500px;
`;

export const SortText = styled.div`
  white-space: nowrap;
  font-weight: bold;
  color: #a6a5a5;
`;

export const LabelRadio = styled.label`
  color: #a6a5a5;
  width: 110px;
  white-space: nowrap;
`;

export const RepoSt = styled.div`
  color: #a6a5a5;
  border: solid 1px;
  border-radius: 10px;
  padding: 5px;
`;

export const RepoLink = styled.a`
  color: #a6a5a5;
`;

export const MessageText = styled.p`
  color: #a6a5a5;
  padding: 10px;
`;

export const Text = styled.p`
  color: #a6a5a5;
  padding: 10px;
`;

export const PageText = styled.span`
  color: #a6a5a5;
  padding: 10px;
  &:hover {
    color: #000;
  }
`;

export const PageTextBold = styled.span`
  color: #a6a5a5;
  padding: 10px;
  &:hover {
    font-weight: bold;
    color: #000;
  }
`;

export const ListPage = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const ItemUser = styled.div`
  padding: 10px;
  color: #a6a5a5;
  border: solid 1px;
  border-radius: 10px;
  margin-bottom: 5px;
`;
